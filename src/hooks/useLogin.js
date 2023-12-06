import useShowToast from "./useShowToast"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase";
import useAuthStore from "../store/authStore";
import { doc, getDoc } from "firebase/firestore";

const useLogin = () => {
    const [
        signInWithEmailAndPassword,
        ,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const showToast = useShowToast()

    const loginUser = useAuthStore((state) => state.login)

    const signin = async (inputs) => {
        if(!inputs.email ||  !inputs.password ){
            showToast("Error", "Please complete all the fields", "error")
            return;
        }
        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)
            if(userCred){
                const docRef = doc(db, 'users', userCred.user.uid)
                const docSnap = await getDoc(docRef)
              
                localStorage.setItem('user', JSON.stringify(docSnap.data()))
                loginUser(docSnap.data())
            }
        } catch (error) {
           
            showToast("Error", error.message, 'error')
        }
    }

  return {signin, loading, error}
}

export default useLogin