
import { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import useAuthStore from '../store/authStore'
import useUserProfileStore from '../store/userProfileStore'


const useGetFeedPosts = () => {
const [loading, setLoading] = useState(true)
const {posts, setPosts} = usePostStore()
const authUser = useAuthStore((state) => state.user)
const showToast = useShowToast()
const {setProfile} = useUserProfileStore()

useEffect(() => {
    const getFeedPosts = async () => {
        setLoading(true)
        if(authUser.following.length === 0) {
            setLoading(false)
            setPosts([])
            return;
        }
            const q = query(collection(db, 'posts'), where('createdBy', 'in', authUser.following))
        try {
            const querySnapshot = await getDocs(q)
            const feedPosts = []

            querySnapshot.forEach(doc => {
                feedPosts.push({id: doc.id, ...doc.data()})
            })

            feedPosts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(feedPosts)

        } catch (error) {
            showToast('Error', error.message, 'error')
        } finally {
            setLoading(false)
        }
    }
    if(authUser) getFeedPosts()
}, [authUser, setPosts, setProfile, showToast])

    return {loading, posts}

}

export default useGetFeedPosts