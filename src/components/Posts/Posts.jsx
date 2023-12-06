import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import Post from '../Post/Post'
import { useEffect, useState } from 'react'



const Posts = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <Container maxW={'container.sm'} py={10}>
      {loading && 
        [0,1,2,3].map((_, idx) => {
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height={'10px'} w={'200px'}/>
                <Skeleton height={'10px'} w={'200px'}/>
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}></Box>
            </Skeleton>
          </VStack>
        })
      
      }
      {!loading && 
       <Post 
        username='Jack' 
        image='https://images.pexels.com/photos/19154096/pexels-photo-19154096/free-photo-of-safari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        avatar='https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
        
      } 

    </Container>
  )
}

export default Posts