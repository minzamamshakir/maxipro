import { SUPPORT_FARMS } from '@pancakeswap/farms'
import { chains, ChainId } from '@maxiproswap/constants'

export { SUPPORT_FARMS }

//  AINZICS TODO
export const SUPPORT_ONLY_CORE = [ChainId.CORE]

export const SUPPORT_SWAP = chains.filter((chain) => chain.features.includes('swap')).map((chain) => chain.id)
export const SUPPORT_STAKING = chains.filter((chain) => chain.features.includes('staking')).map((chain) => chain.id)
export const SUPPORT_INFO = chains.filter((chain) => chain.features.includes('info')).map((chain) => chain.id)
export const SUPPORT_BRIDGE = chains.filter((chain) => chain.features.includes('bridge')).map((chain) => chain.id)
export const SUPPORT_LOCKS = chains.filter((chain) => chain.features.includes('locks')).map((chain) => chain.id)
export const SUPPORT_ZAP = []
