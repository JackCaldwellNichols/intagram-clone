import { useEffect, useState } from "react"
import useShowToast from '../hooks/useShowToast'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../firebase/firebase'



const useGetUserProfileById = (userId) => {
const [loading, setLoading] = useState(true)
const showToast = useShowToast()
const [userProfile, setUserProfile] = useState(null)
  
    useEffect(() => {
        const getUserProfile = async () => {
            setLoading(true)
            setUserProfile(null)
            try {
               const userRef = await getDoc(doc(db, 'users', userId));
               if(userRef.exists()){
                setUserProfile(userRef.data())
               }
            } catch (error) {
                showToast("Error", error.message, 'error')
            } finally {
                setLoading(false)
            }
        }
        getUserProfile()
    }, [setUserProfile, showToast, userId])
    
    return {userProfile, loading, setUserProfile}

}

export default useGetUserProfileById