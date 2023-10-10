
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"


function App() {
  const [users, setUsers] = useState("")

  useEffect(() => {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    setUsers(user)
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  }, [])
  return (
    <>
   <BrowserRouter>
    <Navbar users={users}/> 
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="dashboard" element={<Home users={users} />}/>
      </Routes>
    </BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="light"
/>
{/* Same as */}
<ToastContainer />
    </>
  )
}

export default App
