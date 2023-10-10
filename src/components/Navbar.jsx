import React from 'react'
import "../styles/components/Navbar.scss"
import {BiLogoFirebase} from "react-icons/bi"
import {HiOutlineLogout} from "react-icons/hi"
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

const Navbar = ({users}) => {
  const logoutFunc = async() => {
    toast.success("Çıkış işlemi gerçekleştiriliyor.")
    await signOut(auth);
    setTimeout(() => {
    window.location = "/"
      
    }, 3000);
  }
  return (
    <nav className="header">
        <div className="header__left"><BiLogoFirebase />Firebase</div>
        {users?.accessToken && <div onClick={logoutFunc} className="header__right"><HiOutlineLogout/> Logout</div>}

    </nav>
  )
}

export default Navbar