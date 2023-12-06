import { Flex, Image, Text } from "@chakra-ui/react"
import google from '../../assets/google.png'

const GoogleAuth = () => {
  return (
    <>
     <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                <Image src={google} alt='Google Logo' w={5 }/>
                <Text mx={2} color={'blue.500'}>Log in with Google</Text>
            </Flex>
    </>
  )
}

export default GoogleAuth