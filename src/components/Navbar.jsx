import React from 'react'
import "../styles/components/Navbar.scss"
import {BiLogoFirebase} from "react-icons/bi"
import {HiOutlineLogout} from "react-icons/hi"

const Navbar = () => {
  return (
    <nav className="header">
        <div className="header__left"><BiLogoFirebase />Firebase</div>
        <div className="header__right"><HiOutlineLogout/> Logout</div>

    </nav>
  )
}

export default Navbar