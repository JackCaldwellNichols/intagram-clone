import { doc, updateDoc } from "firebase/firestore";
import {db, storage } from '../firebase/firebase'
import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import useUserProfileStore from "../store/userProfileStore";

const useSubmitEditProfile =  () => {


    const [loading, setLoading] = useState(false)
    const authUser = useAuthStore(state => state.user)
    const setAuthUser = useAuthStore(state => state.setUser)
    const setUserProfile = useUserProfileStore(state => state.setUserProfile)
    const showToast = useShowToast()

    const handleEditProfile = async (inputs, selectedFile) => {
        if(loading || !authUser) return;
        setLoading(true)

        const storageRef = ref(storage, `profilePics/${authUser.uid}`)
        const userDocRef = doc(db, 'users', authUser.uid)
        let URL =''
        try {
            if(selectedFile){
                await uploadString(storageRef, selectedFile, 'data_url')
                URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`))
            }
            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePicURL: URL || authUser.profilePicURL
            }

            await updateDoc(userDocRef, updatedUser)
            localStorage.setItem('user', JSON.stringify(updatedUser))
            setAuthUser(updatedUser)
            setUserProfile(updatedUser)
            showToast("Success", "Profile Updated Successfully", 'success')
            setLoading(false)
        } catch (error) {
            showToast("Error",error.message, 'error')
            setLoading(false)
        }
    }

    return {handleEditProfile, loading}
}

export default useSubmitEditProfile