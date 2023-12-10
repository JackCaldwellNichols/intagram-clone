import { useEffect, useState } from "react"
import usePostStore from "../store/postStore"
import useUserProfileStore from "../store/userProfileStore"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"


const useGetUserPosts = () => {
    const [loading, setLoading] = useState(true)
    const {posts, setPosts} = usePostStore()
    const showToast = useShowToast()
    const userProfile = useUserProfileStore((state) => state.userProfile)

    useEffect(() => {
        const getPosts = async () => {
            if(!userProfile) return
            setLoading(true)
            setPosts([])
            try {
                const q = query(collection(db, 'posts'), where('createdBy', '==', userProfile.uid))
                const querySnapshot = await getDocs(q)
                const posts = []

                querySnapshot.forEach((doc) => {
                    posts.push({...doc.data(), id:doc.id})
                })

                posts.sort((a, b) => b.createdAt - a.createdAt)

                setPosts(posts)
                
            } catch (error) {
                showToast("Error", error.message, 'error')
                setPosts([])
            } finally {
                setLoading(false)
            }
        }
        getPosts()
    }, [setPosts, showToast, userProfile])

    return {loading, posts}
}

export default useGetUserPosts