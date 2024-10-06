import React from 'react'
import DisplayShareNames from "../firestore/getSharename";
import DisplayShare from "../firestore/getShare";
import { useAppContext } from '../ovelrays/context';
import { useGetfriends } from '../firestore/useFriends';

export const Section3 = () => {
  const{setModal4} =useAppContext()
  const {friends}  =useGetfriends()
  return (
    <div className="bg-green-20 flex items-center justify-center flex-col gap-2 
      md:gap-2 md:flex-row md:justify-center
      lg:gap-24">
      
      <div className='bg-green-30 md:hidden w-[300px] mt-5 justify-start '>
      <p className=' font-palanquin font-bold text-black text-xl sm:text-2xl '>
      Share Status</p>
      </div>
      
      <div className="bg-green-60 flex flex-col items-center justify-start w-[280px] h-[200px]  
        sm:w-[300px] sm:h-[280px] 
        md:border-2 md:bg-white md:bg-opacity-20 md:rounded-2xl md:h-[300px] md:w-[350px] md:my-2 md:mx-1
        lg:h-[360px] lg:w-[550px] lg:my-3 lg:mx-2 ">
          
        <div className=" flex flex-row justify-center items-center gap-9 
          md:gap-12 md:my-2
          lg:gap-28">
          <h1 className="font-palanquin text-xl my-1 font-semibold text-black
           md:text-white md:text-2xl">
            Name & Spent
          </h1> 
          <span className="font-palanquin text-xl my-1 font-semibold text-black
            md:text-white md:text-2xl">
            Over / <span className="font-palanquin text-xl my-1 font-semibold text-red-500
            md:text-black md:text-opacity-90">
            Under</span>
          </span>                   
        </div>
        <DisplayShare/>
      </div>

      <div className='bg-green-30 md:hidden w-[300px] mt-5 justify-start'>
      <p className=' font-palanquin font-extrabold text-black text-xl sm:text-2xl'>
      Expenses</p>
      </div>

      <div className="bg-green-30 flex flex-col items-center justify-start w-[280px] h-[250px]
        sm:w-[300px] sm:h-[280px]
        md:border-2 md:bg-white md:bg-opacity-20 md:rounded-2xl md:h-[300px] md:w-[350px] md:my-2 md:mx-1
        lg:h-[360px] lg:w-[550px] lg:my-3 lg:mx-2"> 
        
        {friends.length>0 && (
        <div>
          <div className=" border-2 h-[60px] w-[300px] my-3 mx-2 rounded-2xl 
            flex justify-center items-center cursor-pointer bg-white bg-opacity-40 border-black
            hover:text-white hover:bg-black hover:border-white hover:bg-opacity-50  
            lg:h-[70px] lg:w-[500px] 
            max-md:hidden"
            onClick={() => setModal4(true)}>
            <h1 className="font-palanquin text-3xl font-medium">SHARE NAME +</h1>
          </div>
          <div className='bg-purple-40 flex justify-center items-start overflow-y-auto scrollbar-hide h-56 
          md:h-[200px] lg:h-[250px]'>
          
          <DisplayShareNames/>
          </div>
          {/* <div className="  
            flex justify-center items-start overflow-y-auto scrollbar-hide bg-white bg-opacity-40
            max-sm:my-2 max-sm:w-[350px] max-sm:h-[300px] max-sm:border-hidden
            max-md:my-4 max-md:w-[450px] max-md:h-[430px] max-md:border-hidden
            max-lg:w-[200px] 
            md:border-2 md:h-[200px] md:w-[300px] md:my-2 md:mx-2 md:rounded-2xl
            lg:h-[250px] lg:w-[500px]">
          </div> */}
        </div>
        )}
      </div>
      <div className="md:hidden">    
          <div  className="mx-2 flex justify-center items-center cursor-pointer   
                h-12 w-64 rounded-xl text-white bg-customBlue"
                onClick={() => setModal4(true)}
              >
                <h1 className="font-palanquin text-2xl font-medium"> SHARE NAME +</h1>
          </div>
          </div>

    </div>
  )
}
