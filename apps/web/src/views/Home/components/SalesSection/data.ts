import { TranslateFunction } from '@pancakeswap/localization'
import { SalesSectionProps } from '.'
import iceConeA from '../../../../../public/images/home/trade/trades.png'
// import iceConeB from '../../../../../public/images/home/trade/iceconea.png'
import bridgeA from '../../../../../public/images/home/bridge/bridge_a.png'
import bridgeB from '../../../../../public/images/home/bridge/bridge_b.png'
import earnIce from '../../../../../public/images/home/earn/ice.png'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything anywhere, hassle free'),
  bodyText: t(
      'MAXL SWAP lets everyone trade any token on multiple chains. ' +
      'A intuitive UI lets both new and experienced DeFi users easily interact with the MAXL Swap smart contracts. ' +
      'As the first DEX implementing route splitting, the best possible output with the lowest slippage can be archived. '
  ),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: '/swap',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [
      { src: iceConeA, alt: '' },
      // { src: iceConeB, alt: '' },
    ],
  },
})

export const bridgeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Bridge securely between many chains'),
  bodyText: t(
    'MAXL Swap allows direct bridging between many chains. ' +
      'A novel approach of a second (redundant) security layer will make the MAXL Bridge even more secure ' +
      'than the audited and battle tested code it is built on top of. ' +
      'All bridge reserves are transparent on chain and can be verified any time. ' +
      'Due to its universal implementation even universal message parsing and NFTs will be supported by the Bridge.',
  ),
  reverse: true,
  primaryButton: {
    to: 'https://bridge.ainzics.com',
    text: 'Bridge Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.AINZICS.com/get-started/bridge',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [
      { src: bridgeA, alt: '' },
      { src: bridgeB, alt: '' },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn, receive ICE tokens when providing liquidity.'),
  bodyText: t('Thanks to liquidity farming pools, you can receive ICE tokens when you provide liquidity.'),
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: t('Farms'),
    external: false,
  },
  secondaryButton: {
    to: 'https://wiki.icecreamswap.com/get-started/pool',
    text: t('Learn'),
    external: true,
  },
  images: {
    attributes: [{ src: earnIce, alt: '' }],
  },
})
