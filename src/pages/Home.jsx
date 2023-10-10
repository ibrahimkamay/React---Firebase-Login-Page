import React from 'react'
import "../styles/pages/Home.scss"

const Home = ({users}) => {
  return (
    <div className='users'>
      <div className='wrap'>
      <h2>Welcome!  </h2>
  
      <span>👋🏼 {users?.email}</span></div>
      </div>
  )
}

export default Home