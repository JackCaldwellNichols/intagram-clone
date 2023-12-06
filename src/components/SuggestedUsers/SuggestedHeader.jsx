import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore"


const SuggestedHeader = () => {
const {authUser} = useAuthStore(state => state.user)


const {handleLogout, loading} = useLogout()

  return (
    <Flex alignItems={'center'} w={'full'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar name='Jack' size={'lg'} src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Text fontSize={12} fontWeight={'bold'}>
            {authUser.username}
            </Text>
        </Flex>
        <Button 
            size={'sm'}
            background={'transparent'}
            _hover={{background: 'transparent'}}
            fontSize={14}
            fontWeight={'medium'}
            color={'blue.400'}
            cursor={'pointer'}
            onClick={handleLogout}
            isLoading={loading}
        >
            Logout
        </Button>

    </Flex>
  )
}

export default SuggestedHeader