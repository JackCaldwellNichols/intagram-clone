
import {
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import Comment from '../Comment/Comment'
import usePostComment from "../../hooks/usePostComment";
import { useRef, useEffect } from "react";

const CommentModal = ({ isOpen, onClose, post }) => {

const {handlePostComment, loading} = usePostComment()

const commentRef = useRef()

const commentsContainerRef = useRef()

useEffect(() => {
    const scrollToBottom = () => {
        commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight
    }
    if(isOpen){
        setTimeout(() => {
            scrollToBottom()
        }, 1000)
    }
}, [isOpen, post.comments.length])

const postPostComment = async (e) => {
    e.preventDefault()
    await handlePostComment(post.id, commentRef.current.value)
    commentRef.current.value = ''
}

	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
			<ModalOverlay />
			<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
				<ModalHeader>Comments</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Flex mb={4} gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"} ref={commentsContainerRef}>
                        {post.comments.map((comment, idx) => (
                            <Comment comment={comment} key={idx}/>
                        ))}
                    </Flex>
					<form style={{ marginTop: "2rem" }} onSubmit={postPostComment}>
						<Input placeholder='Comment' size={"sm"} ref={commentRef}/>
						<Flex w={"full"} justifyContent={"flex-end"}>
							<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={loading}>
								Post
							</Button>
						</Flex>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CommentModal;