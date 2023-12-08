import { useEffect, useState } from "react"
import useShowToast from '../hooks/useShowToast'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../firebase/firebase'
import useUserProfileStore from "../store/userProfileStore"


const useGetUserProfileByUsername = (username) => {
const [loading, setLoading] = useState(true)
const showToast = useShowToast()
const {userProfile, setUserProfile} = useUserProfileStore()
  
    useEffect(() => {
        setLoading(true)
        const getUserProfile = async () => {
            try {
                const q = query(collection(db, 'users'),where('username', '==', username))
                const querySnapshot = await getDocs(q)

                if(querySnapshot.empty) return setUserProfile(null)

                let userDocument;
                querySnapshot.forEach((doc) => {
                    userDocument = doc.data()
                });
                setUserProfile(userDocument)
            } catch (error) {
                showToast("Error", error.message, 'error')
            } finally {
                setLoading(false)
            }
        }
        getUserProfile()
    }, [setUserProfile, showToast, username])
    
    return {userProfile, loading}

}

export default useGetUserProfileByUsername