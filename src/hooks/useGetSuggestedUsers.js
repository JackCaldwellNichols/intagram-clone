import { useEffect, useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"


const useGetSuggestedUsers = () => {
const [loading, setLoading] = useState(true)
const [suggestedUsers, setSuggestedUsers] = useState([])
const authUser = useAuthStore((state) => state.user)
const showToast = useShowToast()

useEffect(() => {
    const getSuggestedUsers = async () => {
        setLoading(true)
        try {
            const usersRef = collection(db, 'users')
            const q = query(usersRef, where('uid', 'not-in', [authUser.uid, ...authUser.following]),
            orderBy('uid'),
            limit(3)
            )
            const querySnapshot = await getDocs(q)
            const users = []
            querySnapshot.forEach((doc) => {
                users.push({...doc.data(), id: doc.id })
            })
            setSuggestedUsers(users)

        } catch (error) {
            showToast("Error", error.message, 'error')
        } finally {
            setLoading(false)
        }
    }
    if(authUser) getSuggestedUsers()
}, [authUser, showToast])
    return {loading, suggestedUsers}
}

export default useGetSuggestedUsers