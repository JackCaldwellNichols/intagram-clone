import { Button, Container, Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-2.png'

const Navbar = () => {
  return (
    <Container maxW={'container.lg'} my={4}>
        <Flex w={'full'} justifyContent={{base: 'center', sm: 'space-between'}} alignItems={'center'}>
            <Image h={20} src={logo} display={{base: 'none', sm: 'block'}} cursor={'pointer'}/>
            <Flex gap={4}>
                <Link to={'/auth'}>
                    <Button colorScheme={'blue'} size={'sm'}>
                        Log in
                    </Button>
                </Link>
                <Link to={'/auth'}>
                    <Button variant={'outline'} size={'sm'}>
                        Sign Up
                    </Button>
                </Link>
            </Flex>
        </Flex>
    </Container>
  )
}

export default Navbar