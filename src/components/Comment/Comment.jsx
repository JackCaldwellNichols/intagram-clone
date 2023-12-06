import { Avatar, Flex, Text } from "@chakra-ui/react"


const Comment = ({text, createdAt, profilePic, username}) => {
  return (
    <Flex gap={4}>
        <Avatar name={username} src={profilePic} size={'sm'}/>
        <Flex direction={'column'}>
            <Flex gap={2} alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize={12}>{username}</Text>
                <Text fontSize={14} color={'gray.500'}>
                    {text}
                </Text>
            </Flex>
            <Flex gap={2}>
                <Text fontSize={12} color={'gray.500'}>
                    {createdAt}
                </Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Comment