import { useState } from 'react'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'

const useLikePost = (post) => {
    const [loading, setLoading] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const [likes, setLikes] = useState(post.likes.length)

    const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid))
    const showToast = useShowToast()

    const handleLikePost = async () => {
        if(loading) return;
        if(!authUser) showToast('Error', "You must be logged in!", 'error')
        setLoading(true)
    try {
        const postRef = await doc(db, 'posts', post.id)
        await updateDoc(postRef, {
            likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid)
        })

        setIsLiked(!isLiked)
        isLiked ? setLikes(likes - 1) : setLikes(likes + 1)
    } catch (error) {
        showToast('Error', error.message, 'error')
    } finally {
        setLoading(false)
    }
    }

    return {loading, isLiked, likes, handleLikePost}

}

export default useLikePost