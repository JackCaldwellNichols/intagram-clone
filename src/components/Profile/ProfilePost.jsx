import { Button, Flex, GridItem, Text, Image, useDisclosure, Modal, ModalOverlay, ModalBody, ModalContent, Avatar, Divider, VStack } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai";
import {FaComment} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from "../Comment/Comment";
import PostFooter from "../Post/PostFooter";
import { useState } from "react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useShowToast from "../../hooks/useShowToast";
import { deleteObject, ref } from "firebase/storage";
import { db, storage } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import usePostStore from "../../store/postStore";
import Caption from "../Post/Caption";

const ProfilePost = ({post}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const userProfile = useUserProfileStore((state) => state.userProfile)
  const removePost = useUserProfileStore((state) => state.removePost)
  const authUser = useAuthStore((state) => state.user)
  const isUserPost = authUser?.username === userProfile.username
  const deletePost = usePostStore((state) => state.deletePost)
  const showToast = useShowToast()
  const [isDeleting, setIsDeleting] = useState(false)


  const handleDeletePost =  async () => {
    if(!window.confirm("Are you sure you want to delete this post?")) return;
    if(isDeleting) return;
    try {
      setIsDeleting(true)
      const imageRef = ref(storage, `posts/${post.id}`);
      await deleteObject(imageRef)
      const userRef = doc(db, 'users', authUser.uid)
      await deleteDoc(doc(db, 'posts', post.id))
      await updateDoc(userRef, {
        posts: arrayRemove(post.id)
      })

      deletePost(post.id)
      removePost(post.id)
      showToast("Success", "Post removed", 'success')
    } catch (error) {
     showToast('Error', error.message, 'error') 
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <GridItem
        cursor={'pointer'} 
        borderRadius={4} 
        overflow={'hidden'} 
        border={'1px solid'} 
        borderColor={'whiteAlpha.300'} 
        position={'relative'}
        aspectRatio={1/1}
        onClick={onOpen}
        >
          <Flex 
            opacity={0} 
            _hover={{opacity: 1}} 
            position={'absolute'} 
            top={0} left={0}
            bottom={0} 
            right={0} 
            bg={'blackAlpha.700'} 
            transition={'all 0.3s ease'} 
            justifyContent={'center'}
          >
            <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
              <Flex alignItems={'center'}>
                  <AiFillHeart size={20}/>
                  <Text ml={2} fontWeight={'bold'}>{post.likes.length}</Text>
              </Flex>
              <Flex alignItems={'center'}>
                <FaComment />
                <Text ml={2} fontWeight={'bold'}>{post.comments.length}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Image src={post.imageURL} w={'100%'} h={'100%'} style={{objectFit:'cover'}}/>
        
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base: '3xl', md: '5xl'}}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody bg={'black'} pb={5}>
              <Flex gap={4} w={{base: '90%', md: 'full'}} mx={'auto'} maxH={'90vh'} minH={'50vh'}>
                <Flex justifyContent={'center'} alignItems={'center'} borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5}>
                  <Image src={post.imageURL}/>
                </Flex>
                <Flex flex={1} flexDirection={'column'} px={10} display={{base: 'none', md: 'flex'}}>
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={4}>
                      <Avatar src={userProfile.profilePicURL} size={'sm'} name='Jack'/>
                      <Text fontWeight={'bold'} fontSize={12}>
                        {userProfile.username}
                      </Text>
                    </Flex>
                   {isUserPost && ( 
                    <Button isLoading={isDeleting} bg={'transparent'} _hover={{bg: 'whiteAlpha.300', color: 'red.600'}} borderRadius={4} p={1}>
                      <MdDelete size={20} cursor='pointer' onClick={handleDeletePost}/>
                    </Button>
                    )
                    }
                  </Flex>
                  <Divider my={4} bg={'gray.500'}/>
                  {post.caption && <Caption post= {post}/>}
                  <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                    {post.comments?.map((comment) => (
                      <Comment comment={comment} key={comment.id}/>
                    ))}

                  </VStack>
                  <Divider my={4} bg={'gray.800'}/> 
                  <PostFooter isProfilePage={true} post={post}/>
                 </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost