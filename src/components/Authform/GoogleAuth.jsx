import { Flex, Image, Text } from "@chakra-ui/react"
import google from '../../assets/google.png'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const GoogleAuth = ({prefix}) => {
  
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore(state => state.login)

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if(!newUser && error){
        showToast('Error', error.message, 'error')
        return;
      }
      if(newUser){
        const userDocument = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now()
      }
      await setDoc(doc(db, 'users', newUser.user.uid), userDocument);
      localStorage.setItem('user', JSON.stringify(userDocument))
      loginUser(userDocument)
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'} onClick={handleGoogleAuth}>
          <Image src={google} alt='Google Logo' w={5 }/>
          <Text mx={2} color={'blue.500'}>{prefix} with Google</Text>
      </Flex>
    </>
  )
}

export default GoogleAuth