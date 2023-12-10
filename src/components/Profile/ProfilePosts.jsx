import { Box, Flex, Grid, Skeleton, VStack, Text } from "@chakra-ui/react"
import ProfilePost from "./ProfilePost"

import useGetUserPosts from "../../hooks/useGetUserPosts"


const ProfilePosts = () => {

const {loading, posts} = useGetUserPosts()

const noPostsFound = !loading && posts.length === 0;
if(noPostsFound) return <NoPostsFound />

  return (
    <Grid templateColumns={{
      sm: 'repeat(1, 1fr)',
      md: 'repeat(3, 1fr)'
    }}
    gap={1}
    columnGap={1}>
      {loading && [0,1,2,3].map((_, idx) => (
        <VStack key={idx} alignItems={'flex-start'} gap={4}>
          <Skeleton w={'full'}>
            <Box h={'300px'}>Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {!loading && (
        <>
          {posts.map((post) => (
            <ProfilePost key={post.id} post={post}/>
          ))}
        </>
      )}

    </Grid>
  )
}

export default ProfilePosts


const NoPostsFound = () => (
  <Flex flexDir={'column'} textAlign={'center'} mx={'auto'} mt={10}>
    <Text fontSize={'2xl'}>No posts found</Text>
  </Flex>
)