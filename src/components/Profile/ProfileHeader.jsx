import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore"
import EditProfile from "./EditProfile"
import useFollowUser from "../../hooks/useFollowUser"



const ProfileHeader = () => {

const {userProfile} = useUserProfileStore()
const authUser = useAuthStore(state => state.user)
const { isOpen, onOpen, onClose } = useDisclosure()

const {isFollowing, loading, handleFollowUser} = useFollowUser(userProfile?.uid)

const ownProfileAndAuthenticated = authUser && authUser.username === userProfile.username
const visitingOtherProfile = authUser && authUser.username !== userProfile.username

  return (
    <Flex gap={{base: 4, sm: 10}} py={10} direction={{base: 'column', sm: 'row'}}>
        <AvatarGroup size={{base: 'xl', md: '2xl'}}  mx={'auto'} justifySelf={'center'} alignSelf={'center'}>
            <Avatar 
                src={userProfile?.profilePicURL} 
                alt='Profile Image' 
                />
        </AvatarGroup>
        <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
            <Flex w={'full'} direction={{base: 'column', sm: 'row'}} gap={4} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'}>
                <Text fontSize={{base: 'sm', md: 'lg'}}>{userProfile?.username}</Text>
                {ownProfileAndAuthenticated && (
                <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                    <Button onClick={onOpen} bg={'white'} color={'black'} _hover={{bg: 'whiteAlpha.800'}} size={{base:'xs', md: 'sm'}}>
                        Edit Profile
                    </Button>
                </Flex>
                )}
                {visitingOtherProfile && (
                <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                    <Button onClick={handleFollowUser} isLoading={loading} bg={'blue.500'} color={'white'} _hover={{bg: 'blue.600'}} size={{base:'xs', md: 'sm'}}>
                        {isFollowing ? 'Unfollow' : "Follow"}
                    </Button>
                </Flex>
                )}
            </Flex>
            <Flex alignItems={'center'} gap={{base:2, sm: 4}}>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                        {userProfile?.posts.length} 
                    </Text>
                    Posts
                </Text>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                    {userProfile?.followers.length} 
                    </Text>
                    Followers
                </Text>
                <Text fontSize={{base: 'xs', md: 'sm'}}>
                    <Text as={'span'} fontWeight={'bold'} mr={1}>
                    {userProfile?.following.length} 
                    </Text>
                    Following
                </Text>
            </Flex>
            <Flex alignItems={'center'} gap={4}>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                    {userProfile?.fullName} 
                </Text>
                <Text fontSize={'sm'} fontWeight={'bold'}>
                    {userProfile?.bio} 
                </Text>
            </Flex>
        </VStack>
        {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  )
}

export default ProfileHeader