import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: 'https://nodes.pancakeswap.com',
    skipFetchSetup: true,
  },
  56,
)

// export const bitgetProvider = new StaticJsonRpcProvider(
//     {
//         url: 'https://rpc.icecreamswap.com',
//         skipFetchSetup: true,
//     },
//     32520,
// )

// AINZICS TODO
export const coreProvider = new StaticJsonRpcProvider(
  {
    url: 'https://rpc.coredao.org',
    skipFetchSetup: true,
  },
  1116,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    skipFetchSetup: true,
  },
  5,
)
