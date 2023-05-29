import { Text, Link } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('Are the Swap contracts audited?'),
    description: [t('The Swap uses the unmodified, audited and battle tested Uniswap V2 smart contracts. One could argue that the UniswapV2 contracts are the most tested smart contracts in the whole DeFi space.')],
  },
  {
    title: t('How is the Bridge secured?'),
    description: [
      t(
        'The MAXL bridge builds on top of the industry leading ChainBridge codebase. This codebase has multiple audits and is used in many huge bridges like the Dogechain bridge or Meter passport',
      ),
    ],
  },
  {
    title: t('How much reward will I get for providing liquidity?'),
    description: [
      t(
        '5/6 (83%) of the trading fees are distributed by the dex smart contract to all liquidity providers. Also there are Farming pools to receive additional ICE tokens and some tokens like SCORE even generate rewards through securing the Blockchain',
      ),
    ],
  },
  {
    title: t('Which Chains are supported?'),
    description: [
      <Text as="p" color="textSubtle" fontSize="16px">
        Currently we are supporting CORE, Binance smart chain (BSC), XDC, Bitgert (Brise), Dogechain, Doken, Fuse and
        soon Shardeum blockchains. For an always up to date list please take a look at our{' '}
        <Link
          display="inline-flex"
          color="text"
          title="MAXL Swap Wiki"
          href="https://wiki.ainzics.com/introduction/ice"
        >
          Wiki
        </Link>
        .
      </Text>,
    ],
  },
  {
    title: t('What is the address of the MAXL token?'),
    description: [
      t('MAXL is a multi chain token and therefore available on and bridgable between multiple blockchains:'),
      t('0xc0E49f8C615d3d4c245970F6Dc528E4A47d62nd CORE'),
      <Text as="p" color="textSubtle" fontSize="16px">
        An up to date list of all MAXL addresses for all supported chains can be found on our{' '}
        <Link
          display="inline-flex"
          color="text"
          title="MAXLSwap Wiki"
          external
          href="https://wiki.ainzics.com/intro/ice"
        >
          Wiki
        </Link>
      </Text>,
    ],
  },
  {
    title: t('what are the Router and Factory addresses?'),
    description: [
      t('The router and factory addresses are the same on every supported chain:'),
      t('Factory: 0x9E6d21E759A7A288b80eef94E4737D313D31c13f'),
      t('Router02: 0xBb5e1777A331ED93E07cF043363e48d320eb96c4'),
    ],
  },
]
export default config
