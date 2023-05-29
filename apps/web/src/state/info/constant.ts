import { infoClientBITGERT, infoStableSwapClient } from '../../utils/graphql'
import {
  INFO_CLIENT_BITGERT,
  BLOCKS_CLIENT_BITGERT,
  INFO_CLIENT_XDC,
  INFO_CLIENT_CORE,
  BLOCKS_CLIENT_XDC,
  BLOCKS_CLIENT_CORE,
} from '../../config/constants/endpoints'
import { ChainId } from '@pancakeswap/sdk'
import { PCS_BITGERT_START, PCS_CORE_START, PCS_XDC_START } from '../../config/constants/info'
import { GraphQLClient } from 'graphql-request'

export type MultiChainName = 'CORE' | 'DOGECHAIN' | 'DOKEN' | 'FUSE' | 'XDC' | 'BSC' | 'BITGERT'

export const multiChainQueryMainToken = {
  BITGERT: 'BNB',
  XDC: 'BNB',
  CORE: 'BNB',
}

export const multiChainBlocksClient = {
  BITGERT: BLOCKS_CLIENT_BITGERT,
  XDC: BLOCKS_CLIENT_XDC,
  CORE: BLOCKS_CLIENT_CORE,
}

export const multiChainStartTime = {
  BITGERT: PCS_BITGERT_START,
  XDC: PCS_XDC_START,
  CORE: PCS_CORE_START,
}

// AINZICS TODO
export const multiChainId = {
  CORE: ChainId.CORE,
  // BITGERT: ChainId.BITGERT,
  XDC: ChainId.XDC,
}

// AINZICS TODO
export const multiChainPaths = {
  [ChainId.CORE]: '',
  // [ChainId.BITGERT]: '',
  [ChainId.XDC]: '',
}

// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  BITGERT: new GraphQLClient(INFO_CLIENT_BITGERT),
  XDC: new GraphQLClient(INFO_CLIENT_XDC),
  CORE: new GraphQLClient(INFO_CLIENT_CORE),
}

export const multiChainQueryEndPoint = {
  BITGERT: INFO_CLIENT_BITGERT,
  XDC: INFO_CLIENT_XDC,
  CORE: INFO_CLIENT_CORE,
}
// AINZICS TODO
export const multiChainScan = {
  CORE: 'CoreScan',
  // BITGERT: 'BriseScan',
  DOGECHAIN: 'DogeScan',
  DOKEN: 'DokenScan',
  FUSE: 'FuseScan',
  XDC: 'XDCScan',
}

// AINZICS TODO
export const multiChainTokenBlackList = {
  // BITGERT: [''],
  DOGECHAIN: [''],
  DOKEN: [''],
  FUSE: [''],
  XDC: [''],
  CORE: [''],
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
