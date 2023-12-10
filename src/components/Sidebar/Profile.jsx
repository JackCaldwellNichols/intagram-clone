import { Link as ReactRouterLink } from 'react-router-dom'
import { Avatar, Link as ChakraLink } from '@chakra-ui/react'
import { Tooltip, Box } from "@chakra-ui/react"
import useAuthStore from "../../store/authStore";

const Profile = () => {

const authUser = useAuthStore(state => state.user)

  return (
    <Tooltip hasArrow label={'Profile'} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
    <ChakraLink cursor={'pointer'}  display={'flex'} to={`/${authUser?.username}`} as={ReactRouterLink} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
      <Avatar src={authUser?.profilePicURL || null} size={'xs'}/>
      <Box display={{base: 'none', md: 'block'}}>Profile</Box>
    </ChakraLink>
  </Tooltip>
  )
}

export default Profile