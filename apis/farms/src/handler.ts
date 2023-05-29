import { FixedNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { getFarmCakeRewardApr, SerializedFarmConfig } from '@pancakeswap/farms'
import { ChainId, CurrencyAmount, Pair } from '@pancakeswap/sdk'
import { USD, ICE } from '@pancakeswap/tokens'
import { farmFetcher } from './helper'
import { FarmKV, FarmResult } from './kv'
import { updateLPsAPR } from './lpApr'
import {coreProvider, bscProvider, bscTestnetProvider} from './provider'

const pairAbi = [
  {
    inputs: [],
    name: 'getReserves',
    outputs: [
      {
        internalType: 'uint112',
        name: 'reserve0',
        type: 'uint112',
      },
      {
        internalType: 'uint112',
        name: 'reserve1',
        type: 'uint112',
      },
      {
        internalType: 'uint32',
        name: 'blockTimestampLast',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

// AINZICS TODO

const iceUsdPairMap = {
  [ChainId.CORE]: {
    address: Pair.getAddress(ICE[ChainId.CORE], USD[ChainId.CORE]),
    tokenA: ICE[ChainId.CORE],
    tokenB: USD[ChainId.CORE],
  },
  // [ChainId.BITGERT]: {
  //   address: Pair.getAddress(ICE[ChainId.BITGERT], USD[ChainId.BITGERT]),
  //   tokenA: ICE[ChainId.BITGERT],
  //   tokenB: USD[ChainId.BITGERT],
  // },
  [ChainId.DOGE]: {
    address: Pair.getAddress(ICE[ChainId.DOGE], USD[ChainId.DOGE]),
    tokenA: ICE[ChainId.DOGE],
    tokenB: USD[ChainId.DOGE],
  },
  [ChainId.DOKEN]: {
    address: Pair.getAddress(ICE[ChainId.DOKEN], USD[ChainId.DOKEN]),
    tokenA: ICE[ChainId.DOKEN],
    tokenB: USD[ChainId.DOKEN],
  },
  [ChainId.FUSE]: {
    address: Pair.getAddress(ICE[ChainId.FUSE], USD[ChainId.FUSE]),
    tokenA: ICE[ChainId.FUSE],
    tokenB: USD[ChainId.FUSE],
  },
}

const getIcePrice = async () => {
  // const pairConfig = iceUsdPairMap[isTestnet ? ChainId.BSC_TESTNET : ChainId.BSC]
  // AINZICS TODO
  const pairConfig = iceUsdPairMap[ChainId.CORE]
  const pairContract = new Contract(pairConfig.address, pairAbi, coreProvider)
  const reserves = await pairContract.getReserves()
  const { reserve0, reserve1 } = reserves
  const { tokenA, tokenB } = pairConfig
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]

  const pair = new Pair(
    CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
    CurrencyAmount.fromRawAmount(token1, reserve1.toString()),
  )

  return pair.priceOf(tokenA)
}

const farmConfigApi = 'https://farms-config.pages.dev'

export async function saveFarms(chainId: number, event: ScheduledEvent | FetchEvent) {
  try {
    const farmsConfig = await (await fetch(`${farmConfigApi}/${chainId}.json`)).json<SerializedFarmConfig[]>()
    let lpPriceHelpers: SerializedFarmConfig[] = []
    try {
      lpPriceHelpers = await (
        await fetch(`${farmConfigApi}/priceHelperLps/${chainId}.json`)
      ).json<SerializedFarmConfig[]>()
    } catch (error) {
      console.error('Get LP price helpers error', error)
    }

    if (!farmsConfig) {
      throw new Error(`Farms config not found ${chainId}`)
    }
    const { farmsWithPrice, poolLength, regularCakePerBlock } = await farmFetcher.fetchFarms({
      chainId,
      farms: farmsConfig.concat(lpPriceHelpers),
    })

    const iceBusdPrice = await getIcePrice()
    const lpAprs = await handleLpAprs(chainId, farmsConfig)

    const finalFarm = farmsWithPrice.map((f) => {
      return {
        ...f,
        lpApr: lpAprs?.[f.lpAddress.toLowerCase()] || 0,
        cakeApr: getFarmCakeRewardApr(f, FixedNumber.from(iceBusdPrice.toSignificant(3)), regularCakePerBlock),
      }
    }) as FarmResult

    const savedFarms = {
      updatedAt: new Date().toISOString(),
      poolLength,
      regularCakePerBlock,
      data: finalFarm,
    }

    event.waitUntil(FarmKV.saveFarms(chainId, savedFarms))

    return savedFarms
  } catch (error) {
    console.error('[ERROR] fetching farms', error)
    throw error
  }
}

export async function handleLpAprs(chainId: number, farmsConfig?: SerializedFarmConfig[]) {
  let lpAprs = await FarmKV.getApr(chainId)
  if (!lpAprs) {
    lpAprs = await saveLPsAPR(chainId, farmsConfig)
  }
  return lpAprs || {}
}

export async function saveLPsAPR(chainId: number, farmsConfig?: SerializedFarmConfig[]) {
  // TODO: add other chains
  if (chainId === 56) {
    let data = farmsConfig
    if (!data) {
      const value = await FarmKV.getFarms(chainId)
      if (value && value.data) {
        // eslint-disable-next-line prefer-destructuring
        data = value.data
      }
    }
    if (data) {
      const aprMap = (await updateLPsAPR(chainId, data)) || null
      FarmKV.saveApr(chainId, aprMap)
      return aprMap || null
    }
    return null
  }
  return null
}
