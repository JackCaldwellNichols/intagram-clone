import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";

const PostFooter = ({username, isProfilePage}) => {
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(3)

const handleLike = () => {
    if(liked){
        setLiked(false)
        setLikesCount(likesCount - 1)
    }else{
        setLiked(true)
        setLikesCount(likesCount + 1)
    }
}

  return (
    <Box mb={10} mt={'auto'}>
        <Flex alignItems={'center'} gap={2} w={'full'} pt={0} mb={2} mt={4}>
            <Box onClick={handleLike} cursor={'pointer'} fontSize={18} >
                {!liked ? (<IoMdHeartEmpty />) : (<IoMdHeart color="red"/>)}
            </Box>
            <Box cursor={'pointer'} fontSize={18}>
                <FaRegComment />
            </Box>
        </Flex>
        <Text fontWeight={600} fontSize={'sm'}>{likesCount} likes</Text>
        {!isProfilePage && (
        <>
        <Text fontSize={'sm'} fontWeight={700}>
            {username}{" "}
            <Text as='span' color={'gray'}>All right Insta!</Text>
        </Text>
        <Text fontSize={'sm'} color={'gray'}>
            See all comments
        </Text>
        </>
        )}
        <Flex align={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
            <InputGroup>
                <Input variant={'flushed'} placeholder="Add comment..." fontSize={14}/>
                <InputRightElement>
                    <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color: 'white'}} bg={'transparent'}>Post</Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
    </Box>
  )
}

export default PostFooter