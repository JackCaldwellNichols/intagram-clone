import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Tooltip, Box } from "@chakra-ui/react"
import { AiFillHome,  } from "react-icons/ai";
const Home = () => {
  return (
    <Tooltip hasArrow label={'Home'} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
    <ChakraLink cursor={'pointer'} display={'flex'} to={'/'} as={ReactRouterLink} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
      <AiFillHome size={20}/>
      <Box display={{base: 'none', md: 'block'}}>Home</Box>
    </ChakraLink>
  </Tooltip>
  )
}

export default Home