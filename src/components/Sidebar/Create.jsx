

import { Tooltip, Box, Flex, Modal, ModalBody, ModalFooter, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, Input, Button, Textarea, useDisclosure, Image, CloseButton } from "@chakra-ui/react"
import { MdOutlineAddBox } from "react-icons/md";
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import usePreviewImage from '../../hooks/usePreviewImage'
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from '../../store/authStore'
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import { getDownloadURL, uploadString } from "firebase/storage";
import { ref } from "firebase/storage";



const Create = () => {

  const {isOpen, onClose, onOpen} = useDisclosure()
  const [caption, setCaption] = useState('')
  const {selectedFile, handleImgChange, setSelectedFile} = usePreviewImage()
  const imageRef = useRef()
  const {loading, handleCreatePost} = useCreatePost()
  const showToast = useShowToast()

  const handlePost = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      onClose()
      setSelectedFile(null)
      setCaption('')
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  
  return (
    <>
  <Tooltip hasArrow label={'Create'} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
      <Flex onClick={onOpen} display={'flex'}  alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
        <MdOutlineAddBox />
        <Box display={{base: 'none', md: 'block'}}>Create</Box>
      </Flex>
  </Tooltip>

    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
			<ModalOverlay />

      <ModalContent bg={"black"} border={"1px solid gray"}>
        <ModalHeader>Create Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Textarea placeholder='Post caption...' value={caption} onChange={(e) => setCaption(e.target.value)}/>

          <Input type='file' hidden ref={imageRef} onChange={handleImgChange}/>

          <BsFillImageFill
            style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
            size={16}
            onClick={() => imageRef.current.click()}
          />
          {selectedFile && (
            <Flex mt={5} w={'full'} position={'relative'} justifyContent={'center'}>
              <Image src={selectedFile} alt='Selected Image'/>
              <CloseButton position={'absolute'} top={2} right={2} onClick={() => setSelectedFile('')}/>
            </Flex>
          )}
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={handlePost} isLoading={loading}>Post</Button>
        </ModalFooter>
      </ModalContent>
    </Modal> 

  </>

  )
}

export default Create

function useCreatePost() {
  const showToast = useShowToast()
  const [loading, setLoading] = useState(false)
  const authUser = useAuthStore((state) => state.user)
  const createPost = usePostStore((state) => state.createPost)
  const addPost = useUserProfileStore((state) => state.addPost)
  const {pathname} = useLocation()

  const handleCreatePost = async (selectedFile, caption) => {
    if(!selectedFile) throw new Error('Please select an image')
    setLoading(true)
  const newPost = {
    caption:caption,
    likes: [],
    comments: [],
    createdAt: Date.now(),
    createdBy: authUser.uid
  }

  try {
    const postDocRef = await addDoc(collection(db, 'posts'), newPost)
    const userDocRef = doc(db, 'users', authUser.uid)
    const imageRef = ref(storage, `posts/${postDocRef.id}`)

    await updateDoc(userDocRef, {posts: arrayUnion(postDocRef.id)})
    await uploadString(imageRef, selectedFile, 'data_url')
    const downloadURL = await getDownloadURL(imageRef)
    await updateDoc(postDocRef, {imageURL: downloadURL})

    newPost.imageURL = downloadURL

    createPost({...newPost, id:postDocRef.id})
    addPost({...newPost, id:postDocRef.id})

    showToast('Success', 'Post created successfully', 'success')
  } catch (error) {
    showToast("Error", error.message, 'error')
  } finally {
    setLoading(false)
  }
}

return {loading, handleCreatePost}
}