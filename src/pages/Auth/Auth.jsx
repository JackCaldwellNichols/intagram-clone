import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import image from '../../assets/auth.png'
import playstore from '../../assets/playstore.png'
import microsoft from '../../assets/microsoft.png'
import AuthForm from '../../components/Authform/AuthForm'
const Auth = () => {
  return (
   <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
    <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
        <Box display={{base:'none', md: 'block'}}>
            <Image src={image} alt='Phone Image'/>
        </Box>
        <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app.</Box>
            <Flex gap={5} justifyContent={'center'}>
                <Image src={playstore} h={10}/>   
                <Image src={microsoft} h={10}/>   
            </Flex>
        </VStack>
        </Flex>
    </Container>
   </Flex>
  )
}

export default Auth