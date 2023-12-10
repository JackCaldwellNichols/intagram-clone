import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import useGetProfileById from '../../hooks/useGetUserProfileById'
 
const Post = ({post}) => {

const {userProfile} = useGetProfileById(post.createdBy)

  return (
    <>
      <PostHeader post={post} creator={userProfile}/>
      <Box borderRadius={4} my={2} overflow={'hidden'}>
        <Image src={post.imageURL}/>
      </Box>
      <PostFooter post={post} creator ={userProfile}/>
    </>
  )
}

export default Post