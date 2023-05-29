import BigNumber from 'bignumber.js'
import { multicallv2 } from '../../utils/multicall'
import cakeVaultAbi from '../../config/abi/cakeVaultV2.json'
import { getCakeVaultAddress, getCakeFlexibleSideVaultAddress } from '../../utils/addressHelpers'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { getIceContract } from '../../utils/contractHelpers'
import { ChainId } from '@pancakeswap/sdk'

const cakeVaultV2 = getCakeVaultAddress()
const cakeFlexibleSideVaultV2 = getCakeFlexibleSideVaultAddress()
const cakeContract = getIceContract()
export const fetchPublicVaultData = async (chainId: ChainId, cakeVaultAddress = cakeVaultV2) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares', 'totalLockedAmount'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const [[[sharePrice], [shares], totalLockedAmount], totalCakeInVault] = await Promise.all([
      // @ts-ignore fix chainId support
      multicallv2({
        abi: cakeVaultAbi,
        calls,
        chainId,
        options: {
          requireSuccess: false,
        },
      }),
      cakeContract.balanceOf(cakeVaultV2),
    ])

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const totalLockedAmountAsBigNumber = totalLockedAmount ? new BigNumber(totalLockedAmount[0].toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      totalLockedAmount: totalLockedAmountAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: new BigNumber(totalCakeInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      totalLockedAmount: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
    }
  }
}

export const fetchPublicFlexibleSideVaultData = async (
  chainId: ChainId,
  cakeVaultAddress = cakeFlexibleSideVaultV2,
) => {
  try {
    const calls = ['getPricePerFullShare', 'totalShares'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const [[[sharePrice], [shares]], totalCakeInVault] = await Promise.all([
      // @ts-ignore fix chainId support
      multicallv2({
        abi: cakeVaultAbi,
        calls,
        chainId,
        options: { requireSuccess: false },
      }),
      cakeContract.balanceOf(cakeVaultAddress),
    ])

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: new BigNumber(totalCakeInVault.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalCakeInVault: null,
    }
  }
}

export const fetchVaultFees = async (chainId: ChainId, cakeVaultAddress = cakeVaultV2) => {
  try {
    const calls = ['performanceFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: cakeVaultAddress,
      name: method,
    }))

    const [[performanceFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(
      { abi: cakeVaultAbi, calls },
      // @ts-ignore fix chainId support
      chainId,
    )

    return {
      performanceFee: performanceFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
