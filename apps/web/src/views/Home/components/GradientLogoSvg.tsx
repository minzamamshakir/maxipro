import Image, { ImageProps } from 'next/image'
import ice from '../../../../public/images/maxipro.png'

const GradientLogo: React.FC<Omit<ImageProps, 'src' | 'alt'>> = (props) => {
  return <Image src={ice} alt="Maxi Protocol" {...props} />
}

export default GradientLogo
