import { Box, Flex, GridItem, Text, Image, useDisclosure, Modal, ModalOverlay, ModalBody, ModalContent, ModalHeader, ModalCloseButton, Avatar, Divider, VStack } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai";
import {FaComment} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import Comment from "../Comment/Comment";
import PostFooter from "../Post/PostFooter";

const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                  <Text ml={2} fontWeight={'bold'}>7</Text>
              </Flex>
              <Flex alignItems={'center'}>
                <FaComment />
                <Text ml={2} fontWeight={'bold'}>8</Text>
              </Flex>
            </Flex>
          </Flex>
          <Image src={img} w={'100%'} h={'100%'} style={{objectFit:'cover'}}/>
        
      </GridItem>
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base: '3xl', md: '5xl'}}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody bg={'black'} pb={5}>
              <Flex gap={4} w={{base: '90%', md: 'full'}} mx={'auto'}>
                <Box borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5}>
                  <Image src={img}/>
                </Box>
                <Flex flex={1} flexDirection={'column'} px={10} display={{base: 'none', md: 'flex'}}>
                  <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={4}>
                      <Avatar src="" size={'sm'} name='Jack'/>
                      <Text fontWeight={'bold'} fontSize={12}>
                        Jack
                      </Text>
                    </Flex>
                    <Box _hover={{bg: 'whiteAlpha.300', color: 'red.600'}} borderRadius={4} p={1}>
                      <MdDelete size={20} cursor='pointer' />
                    </Box>
                  </Flex>
                  <Divider my={4} bg={'gray.500'}/>
                  <VStack w={'full'} alignItems={'start'} maxH={'350px'} overflowY={'auto'}>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Nice'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                    <Comment text={'Cool'}  createdAt='1 day ago' username='Jane Doe' profilePic='https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-gafas-de-sol.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                  </VStack>
                  <Divider my={4} bg={'gray.800'}/> 
                  <PostFooter isProfilePage={true}/>
                 </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost