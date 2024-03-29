import { toRem } from '~/styles'
import { Img } from '~/ui/primitives'
import heading from '~/assets/img/heading.svg'

const Heading = () => (
  <Img
    src={heading}
    alt="Senior Front-end Developer"
    gridColumn={{ xs: '10', lg: '6' }}
    gridColumnStart={{ xs: '2', sm: '3', lg: '3' }}
    height={toRem(425)}
    maxWidth={{ sm: 'md' }}
    paddingY={{ xs: 50, sm: 0 }}
    pointerEvents="none"
  />
)

export default Heading
