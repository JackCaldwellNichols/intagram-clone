
import Create from "../Sidebar/Create"
import Home from "../Sidebar/Home"
import Notifications from "../Sidebar/Notifications"
import Profile from "../Sidebar/Profile"
import Search from "../Sidebar/Search"
import useLogout from "../../hooks/useLogout";
import { Flex, Tooltip, Button } from "@chakra-ui/react"
import { BiLogOut } from "react-icons/bi";
const BottomBarItems = () => {

  const {handleLogout, isLoggingOut} = useLogout()
  return (
    <Flex w={'100vw'} justifyContent={'space-evenly'}>
        <Home />
        <Search />
        <Notifications />
        <Create />
        <Profile />
        <Tooltip hasArrow label={"Logout"} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
            <Flex mt={'auto'} onClick={handleLogout}  alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
              <BiLogOut size={20}/>
              <Button display={{base: 'none', md: 'block'}} isLoading={isLoggingOut} variant={'ghost'} _hover={{bg: 'transparent'}}>Log Out</Button>
            </Flex>
        </Tooltip>
    </Flex>
  )
}

export default BottomBarItems