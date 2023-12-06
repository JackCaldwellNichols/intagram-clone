import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
            <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.500'}} cursor={'pointer'}>
                See all
            </Text>
        </Flex>
        <SuggestedUser name='John Doe' followers={134} avatar={'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
       
        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        &copy; Built by  <Link href="https://www.jackcaldwellnichols.com/" fontSize={14} target="_blank" color={'blue.500'}>Jack Caldwell-Nichols</Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers