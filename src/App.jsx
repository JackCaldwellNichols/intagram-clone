
import { Routes, Route, Navigate } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Auth from "./pages/Auth/Auth"
import PageLayout from "./layouts/PageLayout/PageLayout"
import Profile from "./pages/ProfilePage/Profile"
import { auth } from "./firebase/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const App = () => {

  const [authUser] = useAuthState(auth);

  return (
  <>
  <PageLayout>
    <Routes>
      <Route path="/" element={authUser ? <Homepage /> : <Navigate to='/auth' />}/>
      <Route path="/auth" element={!authUser ? <Auth /> : <Navigate to='/' />}/>
      <Route path="/:username" element={<Profile />}/>
    </Routes>
    </PageLayout>
  </>
  )
}

export default App
