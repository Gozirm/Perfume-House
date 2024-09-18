import React, { useEffect } from 'react'

const Login = () => {
  useEffect(()=>{
    document.title = "Login"
  })
  return (
    <>
    <main className='sign-in-container'>
        <h1>Login</h1>
    </main>
    </>
  )
}

export default Login