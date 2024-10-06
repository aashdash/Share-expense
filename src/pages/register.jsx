import { useNavigate } from "react-router-dom"
import { database, provider } from "./firebaseConfig"
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import React from "react"
import { auth } from "./SignUp"

export const Register = () => {
  const nav=useNavigate()

  const withGoogle= async()=>{
    const result=await signInWithPopup(database,provider)
    nav('/home')
    auth(result)
    console.log(result)
  }

  const handleSubmit=(e
  )=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
  
  createUserWithEmailAndPassword(database,email,password).then(data=>{
    console.log(data,"auth")
    auth(data)
    nav('/home')
  }).catch(error=>{
    alert(error.code)
  })
  }
  return (
    <div className='md:bg-blue-300 '>
      <div className='flex justify-center items-center
        w-full min-h-screen  '>
        <img
        src='photo.jpeg'
        alt='ghj'
        width={964}
        height={612}
        className='object-contain 
        max-lg:hidden rounded-xl '
        />
        <div className='shadow-md absolute rounded-lg bg-black w-full max-md:min-h-screen
        flex flex-col justify-center items-center gap-4
        md:bg-white md:w-[474px] md:h-[515px] '>
            
            <h1 className="font-montserrat text-3xl leading-82 text-white 
            md:text-black md:text-[34px]"> SHARRY</h1>

          <form className='flex flex-col justify-center items-center gap-5 p-3'
          onSubmit={(e)=>handleSubmit(e)}>

            <input className='border-2 border-white 
            w-64 h-4 p-2 font-palanquin flex-1
            text-lg rounded-md
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='UR Name'/>

            <input className='border-2 border-white 
            w-64 h-4 p-2 font-palanquin flex-1
            text-lg rounded-md
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='Email'
            name="email"/>

            
            <input className='border-2 border-white 
            w-64 h-4 p-2 font-palanquin flex-1
            text-lg rounded-md
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='Password'
            name="password" type="password"/>

            <button className='rounded-lg cursor-pointer
            text-white text-center text-base h-10 w-48 
            border-2 border-white font-montserrat font-medium
            hover:border-black hover:bg-white hover:text-black
            md:border-black md:h-10 md:w-60
            md:text-lg md:text-black
            md:hover:border-white md:hover:bg-black md:hover:text-white'>
            CREATE ACCOUNT
            </button>
            </form>

            <p className="font-montserrat text-xs 
            text-white leading-5
            md:text-black md:text-sm">
            Already a User ?
            <span className='font-montserrat 
            text-sm text-blue-600
             max-sm:text-blue-600 
            max-sm:text-[13px] cursor-pointer 
            max-sm:leading-82'
            onClick={()=>{nav('/')}}
            > Login</span></p>

            <p className="font-montserrat text-xs 
            text-white leading-5
            md:text-black md:text-sm">
            or</p>

            <div className='rounded-lg cursor-pointer
            text-white text-center text-sm h-10 w-48 
            border-2 border-white font-montserrat font-medium
            flex justify-center items-center 
            hover:border-black hover:bg-white hover:text-black
            md:border-black md:h-11 md:w-52
            md:text-base md:text-black
            md:hover:border-white md:hover:bg-black md:hover:text-white'
            onClick={withGoogle}>
              Sign Up with
                <img 
                src='Google_Icons-09-512.jpeg'
                alt='dfhf'
                height={30}
                width={44}/>
            </div>

        </div>
        </div>
    </div>
  )
}
