import React, { useState } from 'react';
import { useAppContext } from './context';
import { useAddFriends } from '../firestore/addFriends';

export const Sh3 = () => {
  const { setModal3,friends2, setFriends2,
    name,budget,members,setModal4,money
    } = useAppContext();
  const { addFriends} = useAddFriends();

  const [error, setError] = useState("");

  const add1 = async(index, value) => {
    const updatedTask = [...friends2];
    updatedTask[index] = value;
    setFriends2(updatedTask);
  };

  const add = async () => {
    let hasError = false;

    for (let i = 0; i < friends2.length; i++) {
      if (friends2[i].trim() === "") {
        hasError = true;
        break;
      }
    }

    if (hasError) {
      setError("Please enter name");
      return;
    }

    setError(""); 
    await addFriends({ name,budget,members,friends2,money });
    
    setModal3(false)
    setModal4(true)
    
  };

  return (
    <div className="fixed inset-0 h-full w-full flex justify-center items-center bg-black/50 z-auto">
      
      <div className="bg-white border-2 border-black rounded-lg relative 
        h-[550px] w-[290px] flex justify-center flex-col items-center
        md:h-[550px] md:w-[550px] md:bg-opacity-90">
        <div
          className="absolute top-0 right-2 text-2xl md:text-[32px] cursor-pointer"
          onClick={() => setModal3(false)}
        >
          &times;
        </div>

        <div className="bg-whit mt-10 mb-5 flex flex-col items-center text-center overflow-y-auto scrollbar-hide
        h-[400px] w-[200px]
        md:h-[430px] md:w-[450px]">
          {friends2.length > 0 && friends2.map((value, index) => (
            <div key={index} className="flex flex-col space-y5 gap-5 mb-2 bg-blue-20">
              <p className="bg-whit inline-block break-words font-montserrat font-normal text-lg
                md:text-xl">
                Enter name {index + 1}  
              </p>
              <div>
                <input
                  className="border border-black p-1 mb-2 font-montserrat capitalize h-9 w-48 rounded-md md:h-10"
                  type="text"
                  value={value}
                  onChange={(e) => add1(index, e.target.value)}
                />
                <div className='h-5 bg-blac flex justify-center items-center'>
                  {error && <h1 className='text-red-500 text-sm md:text-base'>{error}</h1>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="cursor-pointer border-2 rounded-lg bg-customBlue text-white text-center
            hover:bg-white hover:text-customBlue hover:border-2 hover:border-customBlue
            font-normal text-xl my-3 h-10 w-28
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
