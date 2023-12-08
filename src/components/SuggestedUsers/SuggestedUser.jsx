import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useFollowUser from "../../hooks/useFollowUser"
import useAuthStore from "../../store/authStore"

const SuggestedUser = ({user, setSearchedUser}) => {
const {loading, isFollowing, handleFollowUser } = useFollowUser(user.uid)
const authUser = useAuthStore((state) => state.user)

const onFollowUser = async () => {
    await handleFollowUser();
    setSearchedUser({
        ...user,
        followers: isFollowing
            ? user.followers.filter((follower) => follower.uid !== authUser.uid)
            : [...user.followers, authUser],
    });

};

  return (
    <Flex justifyContent={'space-between'} w={'full'} alignItems={'center'}>
        <Flex alignItems={'center'} gap={2}>
            <Link to={`/${user?.username}`}>
                <Avatar src={user?.profilePicURL} name={user.fullName} size={'md'}/>
            </Link>
            <VStack spacing={2} alignItems={'flex-start'}>
                <Box fontSize={12} fontWeight={'bold'}>
                    {user?.username}
                </Box>
                <Box fontSize={11} color={'gray.500'} fontWeight={'bold'}>
                    {user.followers.length} follower(s) 
                </Box>
            </VStack>
        </Flex>
       {authUser.uid !== user.uid && (
       <Button 
            fontSize={13} 
            bg={'transparent'} 
            p={0} h={'max-content'} 
            fontWeight={'medium'} 
            color={'blue.400'} 
            cursor={'pointer'} 
            _hover={{color: 'white'}}
            onClick={onFollowUser}
            isLoading={loading}
        >
            {isFollowing ? "Unfollow" : "Follow"}
        </Button>
        )}
    </Flex>
  )
}

export default SuggestedUser