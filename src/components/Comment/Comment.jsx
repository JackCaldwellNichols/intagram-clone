import { Avatar, Flex, Text } from "@chakra-ui/react"
import useGetUserProfileById from "../../hooks/useGetUserProfileById"
import { Link } from "react-router-dom"
import { timeAgo } from "../../utils/timeAgo"

const Comment = ({comment}) => {

 const {userProfile} = useGetUserProfileById(comment.createdBy)


  return (
    <Flex gap={4} mt={2}>
        <Link to={`/${userProfile?.username}`}>
            <Avatar  src={userProfile?.profilePicURL} size={'sm'}/>
        </Link>
        <Flex direction={'column'}>
            <Flex gap={2} alignItems={'center'} flexFlow={'wrap'}>
                <Link to={`/${userProfile?.username}`}>
                    <Text fontWeight={'bold'} fontSize={12}>
                        {userProfile?.username}
                    </Text>
                </Link>
                <Text fontSize={14}>
                    {comment.comment}
                </Text>
            </Flex>
            <Flex gap={2} >
                <Text color={'grey'} fontSize={12}>
                    {timeAgo(comment.createdAt)}
                </Text>
            </Flex>
 
        </Flex>
    </Flex>
  )
}

export default Comment