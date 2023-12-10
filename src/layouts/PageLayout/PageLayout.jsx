import { Flex, Box, Spinner} from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/BottomBar/BottomBar'


const PageLayout = ({children}) => {
  const {pathname} = useLocation()
  const [user, loading] = useAuthState(auth);
  
  const canRenderSideBar =  pathname !== '/auth' && user;
  const canRenderBottomBar =  pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loading && pathname !== 'auth' 
  const checkingIfUserIsAuthenticated = !user && loading
  if(checkingIfUserIsAuthenticated) return <PageLayoutSpinner />

  return (
    <Flex flexDir={canRenderNavbar ? 'column' : 'row'}>
        {canRenderSideBar ? (
      <Box display={{base: 'none', md: 'block'}}>
        <Sidebar />    
      </Box>
        ) : null}
        {canRenderBottomBar ? (
      <Box h={{base: '70px', md: null}} display={{base: 'flex', md: 'none'}}>
        <BottomBar />    
      </Box>
        ) : null}
      {canRenderNavbar ? (
        <Navbar />
      ) : (
        null
      )}
      <Box flex={1} w={{base: 'calc(100% - 70px', md:'calc(100% - 240px'}} mx={4}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout


const PageLayoutSpinner = () => {
  return (
    <Flex flexDir={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'xl'}/>
    </Flex>
  )
}