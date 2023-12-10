import { useState } from "react"
import useShowToast from "./useShowToast"
import useAuthStore from "../store/authStore"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import usePostStore from "../store/postStore"


const usePostComment = () => {
 const [loading, setLoading] = useState(false)
 const showToast = useShowToast()
 const authUser = useAuthStore((state) => state.user)
 const addComment = usePostStore((state) => state.addComment)

const handlePostComment = async (postId, comment) => {
    if(loading) return;
    if(!authUser) return showToast("Error", "You must be logged in to comment", 'error')
    setLoading(true)
    const newComment = {
        comment: comment,
        createdBy: authUser.uid,
        postId: postId,
        createdAt: Date.now()
    }
    try {
        await updateDoc(doc(db, 'posts', postId), {
            comments: arrayUnion(newComment)
        })
        addComment(postId, newComment)
    } catch (error) {
        showToast("Error", error.message, 'error')
    } finally {
        setLoading(false)
    }
}
return {loading, handlePostComment}

}

export default usePostComment