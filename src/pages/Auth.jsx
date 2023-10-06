import React, { useState } from 'react'
import "../styles/pages/Auth.scss"
import {FcGoogle} from "react-icons/fc"

const Auth = () => {
  const [signUp, setSignup] = useState(true);
  const [authData, setAuthData] = useState ({email:"", password:""})

  const onChangeFunc = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value })
  }
  const authFunc = async() => {
    if (signUp) {
      
    } else {
      
    }
  }
  return (
    <div className='auth'>
      <div className='auth__container'>
        <h2 className='auth__container__h2'>{signUp ? "Register" : "Login"}</h2>
        <input placeholder='Email' value={authData.email} onChange={onChangeFunc} name='email' type='email' />
        <input placeholder='Password' value={authData.password} onChange={onChangeFunc} name='password' type='password' />
        <div  className='auth__container__login'>{signUp ? "Register" : "Login"}</div>
        <p onClick={() => setSignup(!signUp)} className='auth__container__register'>{signUp ? "Daha önceden kayıt oldunuz mu?" : "Kayıt olmak mı istiyorsunuz?"}</p>
        <div className='auth__container__line'></div>
        <div onClick={authFunc} className='auth__container__google'><FcGoogle style={{ position: 'absolute',
      top: '25%',
      left: '15px',
      width:"25px",
      height:"25px"}} />Google ile Giriş Yap</div>

      </div>
    </div>
  )
}

export default Auth