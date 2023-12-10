import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import {IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { FaRegComment } from "react-icons/fa6";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentModal from "../CommentModal/CommentModal";

const PostFooter = ({ isProfilePage, post, creator}) => {
    const {likes, isLiked, loading, handleLikePost} = useLikePost(post)
    const { handlePostComment} = usePostComment()
    const [comment, setComment] = useState('')
    const authUser = useAuthStore((state) => state.user)
    const commentRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment('')
}

  return (
    <Box mb={10} mt={'auto'}>
        <Flex alignItems={'center'} gap={2} w={'full'} pt={0} mb={2} mt={4}>
            <Box  cursor={'pointer'} fontSize={18} onClick={handleLikePost}>
                 {!isLiked ? (<IoMdHeartEmpty />) : (<IoMdHeart color="red"/>)} 
            </Box>
            <Box cursor={'pointer'} fontSize={18} onClick={() => commentRef.current.focus()}>
                <FaRegComment />
            </Box>
        </Flex>
       
        <Text fontWeight={600} fontSize={'sm'}>{likes} likes</Text>
        {isProfilePage && (
            <Text fontSize={12} color={'grey'}>Posted {timeAgo(post.createdAt)}</Text>
        )}
        {!isProfilePage && (
        <>
        <Text fontSize={'sm'} fontWeight={700}>
            {creator?.username}{" "}
            <Text as='span' color={'gray'}>{post.caption}</Text>
        </Text>
        {post.comments.length > 0 && (
        <Text fontSize={'sm'} color={'gray'} cursor={'pointer'} onClick={onOpen}>
            See all {post.comments.length} comment(s)
        </Text>
        )}
        {isOpen ? <CommentModal isOpen={isOpen} onClose={onClose} post={post}/> : null}
        </>
        )}
        {authUser  && (
        <Flex align={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
            <InputGroup>
                <Input ref={commentRef} variant={'flushed'} placeholder="Add comment..." fontSize={14} onChange={(e) => setComment(e.target.value)} value={comment}/>
                <InputRightElement>
                    <Button isLoading={loading} onClick={handleSubmitComment} fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color: 'white'}} bg={'transparent'}>
                        Post
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Flex>
        )}
    </Box>
  )
}

export default PostFooter