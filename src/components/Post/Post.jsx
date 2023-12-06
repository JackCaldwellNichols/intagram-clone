import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"


const Post = ({username, image, avatar}) => {
  return (
    <>
      <PostHeader avatar={avatar} username={username}/>
      <Box borderRadius={4} my={2} overflow={'hidden'}>
        <Image src={image}/>
      </Box>
      <PostFooter username={username}/>
    </>
  )
}

export default Post