import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth"
import { Navigate, useNavigate } from "react-router-dom"
import React from "react"
import { database, provider } from "./firebaseConfig"
import { useGetUserInfo } from "../firestore/getUseInfo"



export const auth=(results)=>{
  const authInfo={
    userID:results.user.uid,
    name:results.user.displayName ,
    profilephoto:results.user.photoURL,
    isAuth:true
  }
  localStorage.setItem("auth",JSON.stringify(authInfo))
}

export const Signup = () => {
  const nav=useNavigate()

  const withGoogle= async()=>{
    try{
    const result=await signInWithPopup(database,provider)
    
    if(result){
      console.log(result)
      nav('/home')
      auth(result)
    }
    } 
    catch(err){
      alert(err.code)
    }
  }
  const handleSubmit= (e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value

     signInWithEmailAndPassword(database,email,password).then(data=>{
      console.log(data,"authData")
      nav('/home')
      auth(data)
    }).catch(err=>{
      alert(err.code)
    })
    
  }
 
  
  return (
    <div className='md:bg-blue-300'>
        <div className='flex justify-center items-center
        w-full min-h-screen'>
        <img
        src='photo.jpeg'
        alt='ghj'
        width={964}
        height={612}
        className='object-contain 
        max-lg:hidden rounded-xl '
        />
        <div className='shadow-md absolute rounded-lg bg-black w-full max-md:min-h-screen
        flex flex-col justify-center items-center gap-6
        md:bg-white md:w-[474px] md:h-[515px]'>
                     
            <h1 className="font-montserrat text-[32px] leading-82 text-white 
            md:text-black md:text-[34px]"> SHARRY</h1>

            <form className='flex flex-col justify-center items-center gap-5 p-3'
            onSubmit={(e)=>handleSubmit(e)}>

            <input className='border-2 border-white 
            w-64 h-4 p-2 font-palanquin flex-1
            text-lg rounded-md 
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='Email' name='email' 
            />

            
            <input className='border-2 border-white 
            w-64 h-4 p-2 font-palanquin flex-1
            text-lg rounded-md
            md:border-black md:text-xl md:w-72 md:h-4'
            placeholder='Password' type="password" 
            name='password'/>

            <button className='rounded-lg cursor-pointer
            text-white text-center text-base h-10 w-32 
            border-2 border-white font-montserrat font-medium
            hover:border-black hover:bg-white hover:text-black
            md:border-black md:h-10 md:w-36
            md:text-lg md:text-black
            md:hover:border-white md:hover:bg-black md:hover:text-white'>
             LOGIN
             </button>
            
             </form>
            
             <p className="font-montserrat text-xs
            text-blue-600 leading-5 cursor-pointer
            md:text-sm" 
            onClick={()=>{nav('/forgot')}}>
            Forgot Password? </p>

            
            <p className="font-montserrat text-xs 
            text-white leading-5
            md:text-black md:text-sm">
            New User ?
            <span className='font-montserrat text-xs
            text-blue-600 leading-82 cursor-pointer
            md:text-sm'
            onClick={()=>{nav('/register')}}
            > Register Here</span></p>

            <p className="font-montserrat text-xs 
            text-white leading-5
            md:text-black md:text-sm">
            or</p>

            <button className='rounded-lg cursor-pointer
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
            </button>

        </div>
        

        </div>
        
    </div>
  )
}

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useGetUserInfo(); 

  if (!isAuth) {
    return <Navigate to="/signup" />  
  }
  return children;
};

export default ProtectedRoute;

export const ProtectedRoute2 = ({ children }) => {
  const { isAuth } = useGetUserInfo(); 

  if (isAuth) {
    return <Navigate to="/home" />  
  }
  return children;
};


