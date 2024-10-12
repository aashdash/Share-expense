import React from 'react'
import { useGetfriends } from "../firestore/useFriends";
import {  useStatus } from "../firestore/calci";
import { useAppContext } from '../ovelrays/context';


export const Section2 = () => {
    const { friends,calci } = useGetfriends();
    const { total,share1 } = calci
    const {setModal4} =useAppContext()
    const statu = useStatus()
  return (
    <div className='flex items-center justify-center flex-col
    md:flex-row 
    lg:gap-5'>
        
        <div className="bg-green-10 flex-col flex  justify-center items-start w-[280px] h-[60px] 
        md:bg-white md:bg-opacity-20 md:border-2 md:border-opacity-50 md:h-[65px] md:w-[300px] 
        md:my-3 md:mx-2 md:rounded-e-full md:rounded-s-full md:items-center md:p-0">
            <h1 className="font-palanquin  font-semibold text-lg
            md:text-xl md:text-white">
            BUDGET </h1>
            <div>
              {friends.map((friend) => {
                const { budget } = friend;
                return (
                <h1 className="font-palanquin  font-medium text-lg
            md:text-xl md:text-white">{budget}</h1>
              )})}
            </div>
          </div>

          <div className="flex-col flex  justify-center items-start w-[280px] h-[60px] 
          md:bg-white md:bg-opacity-20 md:border-2 md:border-opacity-50 md:h-[65px] md:w-[300px] 
          md:my-3 md:mx-2 md:rounded-e-full md:rounded-s-full md:items-center md:p-0">
          <h1 className="font-palanquin  font-semibold text-lg
            md:text-xl md:text-white">
            SHARE</h1>
          <h1 className={`font-palanquin  font-medium text-lg
            md:text-xl md:text-white
            ${share1 > 0 ? 'block' : 'hidden'}`}>{share1}</h1>
          </div>
          
          <div className="flex-col flex  justify-center items-start w-[280px] h-[60px]
          md:bg-white md:bg-opacity-20 md:border-2 md:border-opacity-50 md:h-[65px] md:w-[300px] 
          md:my-3 md:mx-2 md:rounded-e-full md:rounded-s-full md:items-center md:p-0">
          <h1 className="font-palanquin  font-semibold text-lg
            md:text-xl md:text-white">
            Total Spent</h1>
          <h1 className={`font-palanquin  font-medium text-lg
            md:text-xl md:text-white
            ${total > 0 ? 'block' : 'hidden'}`}>
            {total}</h1>
          </div>
          
          <div className="flex-col flex  justify-center items-start w-[280px] h-[60px]
          md:bg-white md:bg-opacity-20 md:border-2 md:border-opacity-50 md:h-[65px] md:w-[300px] 
          md:my-3 md:mx-2 md:rounded-e-full md:rounded-s-full md:items-center md:p-0">
            <div className=' flex flex-row   justify-center items-start gap-2'>
              <span className="font-palanquin  font-semibold text-lg
              md:text-xl md:text-white">Remaining </span> 
              <p className='md:hidden lg:block font-palanquin  font-semibold text-lg
              md:text-xl md:text-white'>Budget</p>
            </div>
            <h1 className={`font-palanquin  font-medium text-lg
            md:text-xl 
                ${statu === 0 ?  'hidden' :'' }
                ${statu < 0 ? 'text-orange-500'  : ''} 
              ${statu > 0 ? 'md:text-white ' : ''}`}>{ statu < 0 ? (statu*-1) : statu  }</h1>
          </div>

          <div className="md:hidden">    
          <div  className="my-1 mx-2 flex justify-center items-center cursor-pointer   
                h-12 w-64 rounded-xl text-white bg-customBlue"
                onClick={() => setModal4(true)}
              >
                <h1 className="font-palanquin text-2xl font-medium"> SHARE NAME +</h1>
          </div>
          </div>
    </div>
  )
}
