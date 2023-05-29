import { ChainId } from '@pancakeswap/sdk'

const chainName: Record<ChainId, string> = {
  [ChainId.CORE]: 'CORE',
  [ChainId.DOGE]: 'Doge',
  [ChainId.DOKEN]: 'Doken',
  [ChainId.FUSE]: 'Fuse',
  [ChainId.XDC]: 'XDC',
  [ChainId.BSC]: 'Binance',
  [ChainId.BITGERT]: 'Bitgert',
}

export default chainName
