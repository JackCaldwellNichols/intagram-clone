import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"


const ProfileHeader = () => {
  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: 'column', sm: 'row'}}>
        <AvatarGroup size={{base: 'xl', md: '2xl'}}  mx={'auto'} justifySelf={'center'} alignSelf={'center'}>
            <Avatar 
                src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                name="Jack" 
                alt='Profile Image' 
                />
        </AvatarGroup>
        <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
            <Flex w={'full'} direction={{base: 'column', sm: 'row'}} gap={4} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'}>
                <Text fontSize={{base: 'sm', md: 'lg'}}>Jack</Text>
                <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                    <Button bg={'white'} color={'black'} _hover={{bg: 'whiteAlpha.800'}} size={{base:'xs', md: 'sm'}}>
                        Edit Profile
                    </Button>
                </Flex>
            </Flex>
            <Flex alignItems={'center'} gap={{base:2, sm: 4}}>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                        4   
                    </Text>
                    Posts
                </Text>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                        90   
                    </Text>
                    Followers
                </Text>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                        65   
                    </Text>
                    Following
                </Text>
            </Flex>
        </VStack>
    </Flex>
  )
}

export default ProfileHeader