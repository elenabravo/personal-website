import { toRem } from '~/styles'
import { getExperience } from '~/utils/helpers'
import { Container, Grid, Img, Text, Flex, Box } from '~/ui/primitives'
import heading from '~/assets/img/about-heading.svg'
import profileBw from '~/assets/img/profile-bw.jpg'
import bolt from '~/assets/img/bolt.svg'

const experience = getExperience()

const FirstRow = () => (
  <Grid templateColumns="12">
    <Img
      src={heading}
      alt="about"
      display="flex"
      gridColumn={{ xs: '12', lg: '2' }}
      gridColumnStart={{ lg: '3' }}
      maxHeight={60}
      marginTop={{ lg: 12 }}
      marginBottom={{ xs: 20, lg: 0 }}
      css={{ maxWidth: `${toRem(60)}` }}
    />
    <Text
      as="h1"
      display="inline"
      gridColumn={{ xs: '12', lg: '3' }}
      paddingBottom={{ xs: 80, lg: 20, xl: 0 }}
      marginTop={{ xs: 18, lg: 6 }}
      marginBottom={18}
      fontWeight="normal"
      fontSize="lg"
      lineHeight="relaxed"
    >
      Hi, I'm Noah Bravo, a multidisciplinary front-end developer and digital designer based in
      Madrid, Spain. With over {experience} years of experience working with all types of clients
      and projects, I thrive on bringing both the technical and visual aspects of digital products
      to life.
    </Text>
    <Flex
      className="profileContainer"
      align="center"
      justify="center"
      wrap="wrap"
      gridColumn={{ xs: '12', lg: '3' }}
      gridColumnStart={{ lg: '9' }}
      position="relative"
      width="100%"
    >
      <Box
        className="card"
        display={{ xs: 'hidden', xl: 'block' }}
        position="relative"
        width={280}
        height={420}
        zIndex="z20"
      >
        <Box className="cardImage" position="relative" width="100%" height="100%" overflow="hidden">
          <Box className="cardImageInner" width="100%" height="100%" overflow="hidden" />
        </Box>
      </Box>
      <Container
        className="profileLoading loadingImg"
        position={{ lg: 'absolute' }}
        top="0"
        left={{ lg: '-28%', xl: '3.5%', '2xl': 20 }}
        width={280}
        height={420}
        zIndex="z10"
        css={{ '&.hide .profileLoadingImg': { opacity: 0, visibility: 'hidden' } }}
      >
        <Img
          className="profileLoadingImg"
          src={profileBw}
          alt="Noah Bravo profile photo in black and white"
          opacity="100"
          visibility="visible"
          pointerEvents="none"
          css={{ userSelect: 'none' }}
        />
      </Container>
      <Img
        src={bolt}
        alt="bolt"
        className="bolt"
        position="absolute"
        top={{ xs: '50%', lg: '0' }}
        left={{ xs: '50%', lg: '0' }}
        width={150}
        zIndex="z30"
        transform={{
          xs: 'translate(-120%, -100%)',
          sm: 'translate(-140%, -70%)',
          lg: `translateY(-${toRem(160)}) translateX(-${toRem(100)})`,
          xl: `translateY(-${toRem(160)}) translateX(-${toRem(50)})`
        }}
        pointerEvents="none"
      />
    </Flex>
  </Grid>
)

export default FirstRow
