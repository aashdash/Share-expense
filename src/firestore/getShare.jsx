import React from "react";
import { useGetfriends } from "./useFriends"; 
import { useStake } from "./calci";

const DisplayShare=()=>{
    const { friends } = useGetfriends();
    const  share  = useStake()
    

    const friends5 = friends.filter((friend)=> friend.money)

    return(
        <div className="bg-green-70 overflow-y-auto scrollbar-hide space-y-1
        md:space-y-4 md:my-2 ">
            {friends5.map((fri) => (
          fri.friends2.map((frie, index) => (
            <div  key={index} className="bg-green-30 flex justify-start items-center w-[280px] h-[50px] gap-4 
            sm:w-[350px] sm:h-[70px] sm:gap-18
            md:space-y-3 md:bg-white md:bg-opacity-30 md:border-2 md:h-[70px] md:w-[300px]
            md:gap-44 md:rounded-2xl md:last:mb-40
            lg:h-[80px] lg:w-[500px]">
            
              <div className="bg-violet-00 flex flex-col justify-center items-start ml-12 
                md:my-2 md:ml-20">
                <div className="w-20 bg-yellow-00 flex justify-start items-start
                md:h-10 ">
                  <h1 className="capitalize font-montserrat font-medium text-wrap text-lg
                  md:text-2xl md:text-white">{frie}</h1>
                </div>
                <h3 className="capitalize font-montserrat font-normal text-wrap text-lg
                md:text-2xl md:text-white">
                ₹{fri.money[index]}</h3>
              </div>

              <div className="bg-red-00 w-28 flex flex-row items-center justify-center">
              <h3 className={`font-montserrat text-xl font-medium drop-shadow-lg text-black 
              md:text-2xl
                ${fri.money[index]-share < 0 ? 'text-red-500 md:text-black md:text-opacity-90 ': ''} 
                ${fri.money[index]-share > 0 ? 'text-black md:text-opacity-90 md:text-white' : ''}`}>
                   {fri.money[index] - share === 0 
                    ? (<p>-</p> ) 
                    :`${fri.money[index] - share < 0 ? '₹' : '₹'}
                      ${Math.abs(fri.money[index] - share)}`}
              </h3>  
              </div>
            </div>
            
          ))
        ))}
        </div>
    )
}
export default DisplayShare;
