import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms'
import { ChainId } from '@pancakeswap/sdk'
// import PoolsBitgertPriceHelper from './pools/32520'
import PoolsCorePriceHelper from './pools/1116'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CORE:
      return PoolsCorePriceHelper
      // AINZICS TODO
    // case ChainId.BITGERT:
      // return PoolsBitgertPriceHelper
    default:
      return []
  }
}
