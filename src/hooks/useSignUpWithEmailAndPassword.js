import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
const showToast = useShowToast()
const [
    createUserWithEmailAndPassword,
    ,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);


const loginUser = useAuthStore(state => state.login)



const signup = async (inputs) => {
    if(!inputs.email || !inputs.username || !inputs.password || !inputs.fullName ){
        showToast("Error", "Please complete all the fields", "error")
        return;
    }

    //check if username exists
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('username', '==', inputs.username))
    const querySnapshot = await getDocs(q)
    if(!querySnapshot.empty){
        return showToast('Error', "Username already taken", 'error')
    }

    try {
        const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
        if(!newUser && error){
            showToast("Error", error.message, "error")
            return;
        }
        if(newUser){
            const userDocument = {
                uid: newUser.user.uid,
                email: inputs.email,
                username: inputs.username,
                bio: "",
                profilePicURL: "",
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
        showToast("Error", error.message, "error")
    }
}

  return {
    loading, error, signup
  }
}

export default useSignUpWithEmailAndPassword