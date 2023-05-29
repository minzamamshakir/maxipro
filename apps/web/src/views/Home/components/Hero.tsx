import { Button, Flex, Heading, Link, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import hero from '../../../../public/images/home/hero-home.png'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  position: relative;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <style jsx global>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <BgWrapper>
        <InnerWrapper>
          <SlideSvgDark className="slide-svg-dark" width="100%" />
          <SlideSvgLight className="slide-svg-light" width="100%" />
        </InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems="center"
        justifyContent="center"
        mt={['50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading as="h1" scale="xxl" color="secondary" mb="24px">
            {t('Authorizing Lorem ipsum dolor sit amet')}
          </Heading>
          <Heading as="p" scale="md" mb="24px">
            Trade, Earn, Bridge {' '}
            {/* <Link href="/core" display="inline-flex">
              CORE
            </Link> */}
            on Core with our
            decentralized smart contracts.
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <NextLinkFromReactRouter to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <Flex
          minHeight={['292px', null, null, '100%']}
          width={['auto', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['12px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <Image
              sizes="(max-width: 768px) 95vw, 580px"
              src={hero}
              priority
              objectFit="fill"
              placeholder="blur"
              alt={t('IceCream Store')}
            />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
