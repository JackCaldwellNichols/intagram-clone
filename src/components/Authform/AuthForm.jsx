import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import logo from '../../assets/logo-2.png'
import { useState } from "react"

import Login from "./Login"
import SignUp from "./SignUp"
import GoogleAuth from "./GoogleAuth"



const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true) 
  return (
    <>
    <Box border={'1px solid grey'} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            <Image src={logo} alt="Logo" h={24} cursor={'pointer'}/>
            {isLogin ? <Login /> : <SignUp />}
            <Flex alignItems={'center'} justifyContent={'center'} w={'full'} my={4} gap={1}>
                <Box flex={2} h={'1px'} bg={'gray.400'}/>
                <Text mx={1} color={'white'}>OR</Text>
                <Box flex={2} h={'1px'} bg={'gray.400'}/>
            </Flex>
           <GoogleAuth />
        </VStack>
    </Box>
    <Box border={'1px solid gray'} borderRadius={4} padding={5} >
        <Flex alignItems={'center'}>
            <Box mx={2} fontSize={14}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Box>
            <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
                {isLogin ? "Sign Up" : "Login"}
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default AuthForm