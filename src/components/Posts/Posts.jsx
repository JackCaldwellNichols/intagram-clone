import {Text, Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import Post from '../Post/Post'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'




const Posts = () => {

const {loading, posts } = useGetFeedPosts()



  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {loading && 
        [0,1,2].map((_, idx) => {
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height='10px' width='200px'/>
                <Skeleton height='10px' width='200px'/>
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>Contents wrapped</Box>
            </Skeleton>
          </VStack>
        })
      
      }
      {!loading && posts.length > 0 &&
        posts.map((post) => (
          <Post post={post} key={post.id}/>
        ))
      }
      {!loading && posts.length === 0 && (
        <>
          <Text>
              No posts to show - start following other users to see some content!
          </Text>
        </>
        )}
    </Container>
  )
}

export default Posts