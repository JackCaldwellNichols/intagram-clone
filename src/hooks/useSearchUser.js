import { useState } from "react"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"


const useSearchUser = () => {
const [loading, setLoading] = useState(false)
const [searchedUser, setSearchedUser] = useState(null)  
const showToast = useShowToast()

const getUserProfile = async (username) => {
    setLoading(true)
    setSearchedUser(null)
    try {
        const q = query(collection(db, 'users'), where('username', '==', username))
        
        const querySnapshot = await getDocs(q)

        if(querySnapshot.empty) return showToast('Error', 'No user found', 'error')

        querySnapshot.forEach((doc) => {
            setSearchedUser(doc.data())
        })
    } catch (error) {
        showToast('Error', error.message, 'error')
        setSearchedUser(null)
        setLoading(false)
    } finally {
        setLoading(false)
    }
}
return { searchedUser, loading, getUserProfile, setSearchedUser }
}

export default useSearchUser