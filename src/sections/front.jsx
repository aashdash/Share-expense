/* eslint-disable react-hooks/exhaustive-deps */
import { signOut } from "firebase/auth"; 
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useGetUserInfo } from "../firestore/getUseInfo";
import {useAuthState} from "react-firebase-hooks/auth"
import { database } from "../pages/firebaseConfig";
import { Sh } from "../ovelrays/share1";
import { useAppContext } from "../ovelrays/context";
import { Sh3 } from "../ovelrays/share3";
import { Sh4 } from "../ovelrays/share4";



export const Front = () => {

  const  {isAuth,name}=useGetUserInfo()
  const [user]=useAuthState(database)
  const nav = useNavigate();
  const {modal,modal3,modal4,setModal}=useAppContext()

  const handleSignOut = async () => {
    try {
      await signOut(database);
      localStorage.clear(); 
      nav("/"); 
    } catch (error) {
      console.error("Sign-out error: ", error);
    }
  };
  useEffect(() => {
  if (!isAuth) {
    handleSignOut();
  }
}, [isAuth,handleSignOut ]);


  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center
    opacity-80 bgblack
    sm:bgblack sm:w-full
    md:bg-none md:bg-black md:bg-cover md:bg-center
    lg:bg-[url('DALL·E1.jpeg')] lg:w-full"
    >
    <div className="bg-red-30 flex flex-col justify-center items-center gap-5 
    md:gap-8
    bg-opacity-50 h-[100vh] w-full
    md:h-[230px] md:w-[750px]
    lg:h-[600px] lg:w-[1000px]">
      

      <div className="md:hidden my-6">
        <h1 className="text-3xl font-bold font-palanquin ">SHARRY</h1>
        <div className="absolute top-2 right-2 mt-2 mr-2">
          <div className="hover:bg-black hover:text-orange-500 hover:border-white hover:border-2
          justify-center items-center cursor-pointer"
          onClick={handleSignOut}>
            <img
            src="log.jpeg"
            alt="gfsg"
            className="w-8 h-8 sm:h-9 sm:w-9 object-contain"/>
          </div>
        </div>
      </div>

      <div className="max-md:hidden" >   
          <h1 className="text-6xl lg:text-8xl text-white font-bold font-palanquin">SHARRY</h1>
        </div>
      
      <div className="bg-blac rounded-2xl flex flex-col justify-center items-center gap-5
        w-full h-[300px]  
        md:my-2 md:w-[400px] md:h-full md:gap-5 
        lg:h-[330px] lg:w-[320px] lg:my-4 lg:mx-3 ">

        

        {user?.photoURL &&
          <div className=" bg-red-100 rounded-full">
            <img
              src={user?.photoURL} 
              alt="fr.jpeg"
              className="w-32 h-32 md:h-44 md:w-44 rounded-full object-cover"
              onError={(e) => {
                e.target.src = "fr.jpeg"}}
            />
          </div>
        }
      
        <h1 className="text-lg font-medium font-palanquin md:text-xl md:text-white">{name}</h1>
          
        <div className="bg-orange-500 mx-4 rounded-e-full rounded-s-full 
          hover:bg-black hover:text-orange-500 hover:border-white hover:border-2
          flex items-center justify-center cursor-pointer
          h-[35px] w-[150px]
          lg:h-[50px] lg:w-[160px]
          max-md:hidden"
          onClick={handleSignOut}>
          <button className="font-palanquin text-xl ">Logout</button>
        </div>
        </div>
        <div className="flex items-center justify-center cursor-pointer
            h-12 w-44 rounded-lg text-white bg-customBlue    
            md:bg-white md:bg-opacity-30 md:border-2 md:border-black  md:rounded-2xl
            md:hover:text-white md:hover:bg-opacity-50 md:hover:bg-black  md:hover:border-white
            md:h-[60px] md:w-[300px]
            lg:h-16 lg:w-80"
            onClick={() => {
              setModal(true);
            }}    
            >
              <button className="font-palanquin font-semibold text-2xl md:text-3xl">TRIP +</button>
            </div>

      
    </div>
        {modal  && <Sh  />}
        {modal3 && <Sh3 />}
        {modal4 && <Sh4 />}
    </div>
  )
}
