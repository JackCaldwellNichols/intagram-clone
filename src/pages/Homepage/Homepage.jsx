import { Box, Container, Flex } from "@chakra-ui/react"
import Posts from "../../components/Posts/Posts"
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers"


const Homepage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Posts />
        </Box>
        <Box flex={2} marginRight={20} display={{base: 'none', lg: 'block'}} maxW={'300px'}>
      <SuggestedUsers /> 
        </Box>
      </Flex>
    </Container>
  )
}

export default Homepage