import React, { useState } from 'react'
import "../styles/pages/Auth.scss"
import {FcGoogle} from "react-icons/fc"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const Auth = () => {
  const [signUp, setSignup] = useState(true);
  const [authData, setAuthData] = useState ({email:"", password:""})

  const onChangeFunc = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value })
  }
  const authFunc = async() => {
    if (signUp) {
      try {
        const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
      const user = data.user;
      if (user) {
        window.location = "/dashboard"
      }
      } catch (error) {
        toast.error(error.message)
      }
      
    }
     else {
      try {
        const data = await signInWithEmailAndPassword(auth, authData.email, authData.password);
      const user = data.user;
      if (user) {
        window.location = "/dashboard"
      }
      } catch (error) {
        toast.error(error.message)
      }
    }
  }
  const googleFunc = async() => {
    try {
      const data = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;
      if (user) {
        window.location = "/dashboard";
      }
      } catch (error) {
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(credential)
      }

  }
  return (
    <div className='auth'>
      <div className='auth__container'>
        <h2 className='auth__container__h2'>{signUp ? "Register" : "Login"}</h2>
        <input placeholder='Email' value={authData.email} onChange={onChangeFunc} name='email' type='email' />
        <input placeholder='Password' value={authData.password} onChange={onChangeFunc} name='password' type='password' />
        <div onClick={authFunc} className='auth__container__login'>{signUp ? "Register" : "Login"}</div>
        <p onClick={() => setSignup(!signUp)} className='auth__container__register'>{signUp ? "Daha önceden kayıt oldunuz mu?" : "Kayıt olmak mı istiyorsunuz?"}</p>
        <div className='auth__container__line'></div>
        <div onClick={googleFunc} className='auth__container__google'><FcGoogle style={{ position: 'absolute',
      top: '25%',
      left: '15px',
      width:"25px",
      height:"25px"}} />Google ile Giriş Yap</div>

      </div>
    </div>
  )
}

export default Auth