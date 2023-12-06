import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

import useLogout from "../../hooks/useLogout"
import useAuthStore from "../../store/authStore"


const SuggestedHeader = () => {
const authUser = useAuthStore(state => state.user)


const {handleLogout, loading} = useLogout()

  return (
    <Flex alignItems={'center'} w={'full'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={2}>
          <Link to={`/${authUser?.username}`}>
            <Avatar size={'lg'} src={authUser?.profilePicURL}/>
          </Link>
            <Text fontSize={12} fontWeight={'bold'}>
              {authUser?.username}
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