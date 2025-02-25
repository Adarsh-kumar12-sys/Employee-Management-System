import React, { useState } from 'react'
import backgroundImage from '../../assets/tuazh6q8.png';

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div 
      className='relative flex flex-col h-screen w-screen items-center justify-center bg-cover bg-center'
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '121%', // Increase this value for more zoom
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
         <h1 className='text-3xl font-bold text-center mb-6 text-emerald-200'>
          Employee Management System
        </h1>
        <div className='border-2 rounded-xl border-emerald-200 p-20'>
            
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-200 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-200 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password' />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-200 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login