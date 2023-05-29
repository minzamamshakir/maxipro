import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bitgertTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
  // {
  //   pid: 4,
  //   lpSymbol: 'ICE-USDTi LP',
  //   lpAddress: '0x460dc5054d0afb419832bcfb087fd0ba2e63e0ea',
  //   token: bitgertTokens.ice,
  //   quoteToken: bitgertTokens.usdti,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'ICE-USDCi LP',
  //   lpAddress: '0x2900998f5c306567a1218b93f7f9392baf19d303',
  //   token: bitgertTokens.usdci,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'ICE-BUSDi LP',
  //   lpAddress: '0x0255311aca863ee315e10228b3e34a9522f9c238',
  //   token: bitgertTokens.busdi,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 0,
  //   lpSymbol: 'ICE-Brise LP',
  //   lpAddress: '0x558077e98aeceeb1d616d18c144c15909d4ab744',
  //   token: bitgertTokens.wbrise,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'ICE-BNBi LP',
  //   lpAddress: '0xb9dbf33131e24ace33aa4effd21c2cf13ad14be5',
  //   token: bitgertTokens.bnbi,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'ICE-ETHi LP',
  //   lpAddress: '0x90f31e1f765c13c289d803dfaaf9bbc7b125c52e',
  //   token: bitgertTokens.ethi,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'ICE-DOGEi LP',
  //   lpAddress: '0x730031c324283748ed14ecf0b962bce32f49e561',
  //   token: bitgertTokens.dogei,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 28,
  //   lpSymbol: 'USDTi-USDCi LP',
  //   lpAddress: '0x57ad9889dc699b9188b98ebc9d3be585e8b7b3fb',
  //   token: bitgertTokens.usdci,
  //   quoteToken: bitgertTokens.usdti,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDTi-USDT LP',
  //   lpAddress: '0xaa6d5276158d80ac91be44246c575087d89a6f88',
  //   token: bitgertTokens.usdt,
  //   quoteToken: bitgertTokens.usdti,
  // },
  // {
  //   pid: 1,
  //   lpSymbol: 'Brise-USDTi LP',
  //   lpAddress: '0x8e7dd0d762f60942e0bd05b1114d6cedf4435a18',
  //   token: bitgertTokens.usdti,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'Brise-USDCi LP',
  //   lpAddress: '0x7b970fba17679054d4865b2c6181baf12080b6a3',
  //   token: bitgertTokens.usdci,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'Brise-BNBi LP',
  //   lpAddress: '0xd37e73b7337b89ccc52a182ad9130405dea731b1',
  //   token: bitgertTokens.bnbi,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'Brise-Ethi LP',
  //   lpAddress: '0x9c5452e5735e6958e975389531a01ff49478f186',
  //   token: bitgertTokens.ethi,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'ICE-LUNG LP',
  //   lpAddress: '0x0c33b96d6a2b52a29f5da6b7354f517310a47faa',
  //   token: bitgertTokens.lung,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'ICE-YPC LP',
  //   lpAddress: '0x2ab78b0fd9208392da7b12254f09a1ffe426cdba',
  //   token: bitgertTokens.ypc,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'ICE-$3DC LP',
  //   lpAddress: '0xdba683a94adbbf50f478c07d869d21cdbb34c2b4',
  //   token: bitgertTokens.$3dc,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'ICE-PRDS LP',
  //   lpAddress: '0xf6c1f903aca9225901a962b0a1a5459f76325621',
  //   token: bitgertTokens.prds,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 14,
  //   lpSymbol: 'ICE-$Tokyo LP',
  //   lpAddress: '0x3ccc43b2dbf756b366c542cf297cbf00194635a8',
  //   token: bitgertTokens.tokyo,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'ICE-ARCO LP',
  //   lpAddress: '0x27ec01b78b67d15e6292b0662d73a8fd6cf11385',
  //   token: bitgertTokens.arco,
  //   quoteToken: bitgertTokens.ice,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'Brise-LUNG LP',
  //   lpAddress: '0xf8a6198f9a657030970a9a79ab0ab46a2f8f843f',
  //   token: bitgertTokens.lung,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'Brise-BUSDi LP',
  //   lpAddress: '0x7755de7f448b64294704e46a8359a99075a5cc53',
  //   token: bitgertTokens.busdi,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'Brise-USDT LP',
  //   lpAddress: '0xe90b2cb2a5bd892755baa449afafbb047be24b5d',
  //   token: bitgertTokens.usdt,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'Brise-USDC LP',
  //   lpAddress: '0x0fb71428f3118bc9c86872cc19ad790a8163eb99',
  //   token: bitgertTokens.usdc,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'Brise-YPC LP',
  //   lpAddress: '0xea1274a5b97a0026eb23040d9c32e26753a81b0e',
  //   token: bitgertTokens.ypc,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'Brise-PRDS LP',
  //   lpAddress: '0x8123662dfc13d5461357dceb4149de196c0bae43',
  //   token: bitgertTokens.prds,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'Brise-$3DC LP',
  //   lpAddress: '0xf8617fb7aa7183fcd2f4d0acc06c965b738c9a81',
  //   token: bitgertTokens.$3dc,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'Brise-ARCO LP',
  //   lpAddress: '0x35a741244b60c40a6532033aa6c2856670d02cc6',
  //   token: bitgertTokens.arco,
  //   quoteToken: bitgertTokens.wbrise,
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'Brise-$Tokyo LP',
  //   lpAddress: '0xec271e09aae1f5174c813e6d81bf76d1b73ad9db',
  //   token: bitgertTokens.tokyo,
  //   quoteToken: bitgertTokens.wbrise,
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
