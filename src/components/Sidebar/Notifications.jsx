
import { Link as ChakraLink } from '@chakra-ui/react'
import { Tooltip, Box } from "@chakra-ui/react"
import { MdNotifications } from "react-icons/md";
const Notifications = () => {
  return (
    <Tooltip hasArrow label={'Notifications'} placement="right"  ml={1} openDelay={500} display={{base: 'block', md: 'none'}}>
    <ChakraLink display={'flex'} alignItems={'center'} gap={4} _hover={{bg:'whiteAlpha.400'}} borderRadius={6} p={2} w={{base: 10, md: 'full'}} justifyContent={{base: 'center', md: 'flex-start'}}>
      <MdNotifications />
      <Box display={{base: 'none', md: 'block'}}>Notifications</Box>
    </ChakraLink>
  </Tooltip>
  )
}

export default Notifications