import React, { useState } from 'react';
import { useAppContext } from './context';
import { useAddFriends } from '../firestore/addFriends';
import { useGetfriends } from '../firestore/useFriends';



export const Sh4 = () => {
  const { setModal4, money2, setMoney2,setModal5 } = useAppContext();
  const { addFriends2, updateFriendMoney } = useAddFriends();
  const { friends } = useGetfriends();


  const [error, setError] = useState("");
  const [sharename, setSharename] = useState("");
  const [error2, setError2] = useState("");

 
  const add1 = async (index, value) => {
    const updatedTask = [...money2];
    updatedTask[index] = Number(value);
    setMoney2(updatedTask);
  };

  const add = async () => {
    if (sharename === "") {
      setError2("Enter Share name");
      return;
    }

    let hasError = false;

    for (let i = 0; i < money2.length; i++) {
      if (money2[i] === "") {
        hasError = true;
        break;
      }
    }

    if (hasError) {
      setError("Please enter share amount");
      return;
    }
 
    setError("");
    setError2("");
    await setMoney2(new Array(money2.length).fill(""));
    setSharename("");
    setModal5(true)
    setModal4(false);
    await addFriends2({ sharename, money2 });
    //nav('/home')

    const friendsWithMembers = friends.filter(friend => friend.members);
    if (friendsWithMembers.length > 0) {
        for (const friend of friendsWithMembers) {
          const { money } = friend; 
          
          const updatedMoney = money.map((amt, index) => amt + (money2[index] || 0));
    
          await updateFriendMoney(friend.id, updatedMoney); 
        }
      } else {
        setError("No friends found with members field."); 
      }
      
  };
  const Bike=()=>{
    const friendsWithMembers = friends.filter(friend => friend.members);
     if (friendsWithMembers.length > 0) {
         for (const friend of friendsWithMembers) {
           const { friends2 } = friend; 
           return(
             <div>
         {friends2.map((value, index) => (
         <div key={index} className="flex flex-col gap-5 mb-2">
           <p className="inline-block break-words font-montserrat font-normal text-lg md:text-xl">
             Enter <span className='capitalize text-green-500'> {value}'s</span> share
           </p>
           <div>
            <input
              className="border border-black p-1 mb-2 font-montserrat h-9 w-48 rounded-md md:h-10"
              type="number"
              onChange={(e) => add1(index, e.target.value)}
            />
            <div className='h-5 bg-blac flex justify-center items-center'>
              {error && <h1 className="text-red-500 text-sm md:text-base">{error}</h1>}
            </div>
           </div>
         </div>
       ))}
             </div>
           )  
         
         }
       } 
 }

  return (
    
    <div className="fixed inset-0 h-full w-full flex justify-center items-center bg-black/50 z-auto">
      <div className="bg-white border-2 border-black rounded-lg relative 
        h-[550px] w-[290px] flex justify-center flex-col items-center
        md:h-[550px] md:w-[550px] md:bg-opacity-90">
        <div
          className="absolute top-0 right-2 text-2xl md:text-[32px] cursor-pointer"
          onClick={() => setModal4(false)}
        >
          &times;
        </div>
        <div className="bg-blac flex flex-col justify-center items-center gap-3 mt-8">
          <p className="inline-block break-words font-montserrat font-normal text-lg md:text-xl">
            Enter <span className="text-green-500"> Share </span> Name
          </p>
          <div>
            <input className="border border-black p-1 mb-2 font-montserrat h-9 w-48 rounded-md md:h-10"
              type="text"
              onChange={(e) => setSharename(e.target.value)}
            />
            <div className='h-5 flex justify-center items-center'>
              {error2 && <h1 className="text-red-500">{error2}</h1>}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center overflow-y-auto scrollbar-hide rounded-lg
         bg-customBlue bg-opacity-20 h-[350px] w-[250px] mt-3
         md:bg-white md:bg-opacity-90 md:h-[323px] md:w-[400px]">
        {Bike()}
        </div>

        <button
          className="cursor-pointer border-2 rounded-lg bg-customBlue text-white text-center
                    hover:bg-white hover:text-customBlue hover:border-2 hover:border-customBlue
                    font-normal text-xl m-3 h-10 w-28
                    md:h-[48px] md:w-[145px] md:text-2xl md:border-2 md:border-black md:bg-white md:text-black 
                    md:hover:border-white md:hover:bg-black md:hover:text-white"
          onClick={add}
        >
          CONFIRM
        </button>
      </div>
    </div>
  );
};
