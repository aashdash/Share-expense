import { sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { database } from "./firebaseConfig"
import React from "react"


export const Forgot = () => {
  const nav=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const rest=e.target.email.value
    sendPasswordResetEmail(database,rest).then(data=>{
      alert("Check UR Email")
      nav('/home')
    }).catch(err=>{
      alert(err.code)
    })
  }

  return (
    <div className='md:bg-blue-300'>
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
        flex flex-col justify-center items-center gap-8
        md:bg-white md:w-[474px] md:h-[400px] '>

         <h1 className="font-montserrat text-[30px] leading-82 text-white 
            md:text-black md:text-[34px]"> SHARRY</h1>

        <h1 className="font-montserrat text-lg leading-82 text-white 
            md:text-black md:text-xl"> Forgot Password ?</h1>

            <form className='flex flex-col justify-center items-center gap-8 p-3'
            onSubmit={(e)=>handleSubmit(e)}>

            <input className='border-2 border-white 
            w-[250px] h-4 p-2 font-palanquin flex-1
            text-lg rounded-md
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='Enter UR Email'name="email"/>

            <div className='flex-row flex gap-6 md:gap-5'>
            <button className='rounded-lg cursor-pointer
            text-white text-center text-base h-10 w-28 
            border-2 border-white font-montserrat font-medium
            hover:border-black hover:bg-white hover:text-black
            md:border-black md:h-10 md:w-32
            md:text-lg md:text-black
            md:hover:border-white md:hover:bg-black md:hover:text-white'>
              RESET</button>
             
             <button className='rounded-lg cursor-pointer
            text-white text-center text-base h-10 w-28 
            border-2 border-white font-montserrat font-medium
            hover:border-black hover:bg-white hover:text-black
            md:border-black md:h-10 md:w-32
            md:text-lg md:text-black
            md:hover:border-white md:hover:bg-black md:hover:text-white'
            onClick={()=>{nav('/')}}>
             CANCEL</button>
            </div>   
            </form>

        </div>
        </div>
        
        
    </div>
    
    
  )
}
