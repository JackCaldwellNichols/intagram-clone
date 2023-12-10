import { Avatar, Box, Button, Flex } from "@chakra-ui/react"
import {timeAgo} from '../../utils/timeAgo'
import { Link } from "react-router-dom"
import useFollowUser from '../../hooks/useFollowUser'


const PostHeader = ({post, creator}) => {

const {loading, isFollowing, handleFollowUser} = useFollowUser(post.createdBy)

  return (
   <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={2}>
        <Flex alignItems={'center'} gap={2}>
            <Link to={`/${creator?.username}`}>
               < Avatar src={creator?.profilePicURL} alt="user profile pic" size={'sm'}/>
            </Link>
            <Flex fontSize={'12px'} fontWeight={'bold'} gap={2}>
                <Link to={`/${creator?.username}`}>
                    {creator?.username}
                </Link>
                <Box color={'gray.500'}>· {timeAgo(post.createdAt)}</Box>
            </Flex>
        </Flex>
        <Box cursor={'pointer'}>
            <Button isLoading={loading} onClick={handleFollowUser} fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{color: 'white'}} transition={'0.2s ease-in-out'} bg={'transparent'}>
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        </Box>
   </Flex>
  )
}

export default PostHeader