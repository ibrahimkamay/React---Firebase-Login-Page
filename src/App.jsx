
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
   <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="dashboard" element={<Home/>}/>
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
