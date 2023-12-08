/* eslint-disable react/jsx-no-undef */
import { Box, Flex, Tooltip, Button } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants/constants"



import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";

import SidebarItems from "./SidebarItems";

const Sidebar = () => {

const {handleLogout, isLoggingOut} = useLogout()

  return (
    <Box h={'100vh'} borderRight={'1px solid'} borderColor={'whiteAlpha.300'} position={'sticky'} top={0} left={0} py={8} px={{base: 2, md: 4}}>
      <Flex flexDirection={'column'} gap={10} w='full' height={'full'}>
          <ChakraLink to={'/'} as={ReactRouterLink} pl={2} display={{base: 'none', md: 'block'}} cursor='pointer'>
            <InstagramLogo />
          </ChakraLink>
          <ChakraLink to={'/'} as={ReactRouterLink} borderRadius={6} pl={2} display={{base: 'block', md: 'none'}} cursor='pointer' _hover={{bg: 'whiteAlpha.300'}} w={{base: 10}} p={2}>
            <InstagramMobileLogo />
          </ChakraLink>
          <Flex direction={'column'} gap={5} cursor={'pointer'}>
           <SidebarItems />
          </Flex>
          <Tooltip hasArrow label={"Logout"} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
            <Flex mt={'auto'} onClick={handleLogout}  alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
              <BiLogOut size={20}/>
              <Button display={{base: 'none', md: 'block'}} isLoading={isLoggingOut} variant={'ghost'} _hover={{bg: 'transparent'}}>Log Out</Button>
            </Flex>
          </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar