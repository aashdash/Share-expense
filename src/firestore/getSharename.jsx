import React,{useState} from "react";
import { useGetfriends } from "./useFriends"; 


const DisplayShareNames = () => {
  const { friends } = useGetfriends();
  const [openDropdown, setOpenDropdown] = useState(null);
 
  const shareNames = friends.filter((friend) => friend.sharename);
  const friends5 = friends.filter((friend)=> friend.money)

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id); 
  };

  return (
  <div className="space-y-2 my-0 bg-blue-00 flex flex-col items-center justify-start "> 
  {shareNames.length > 0 ? (
    shareNames.map((share) => (
    <div key={share.id} className="bg-slate-0 h-auto flex flex-col items-center w-[250px]  
    md:space-y-4 md:border-2 md:w-[300px] md:bg-white md:bg-opacity-60 md:rounded-2xl
    lg:w-[500px] "> 

      
        <div className="flex flex-row items-center justify-start w-full gap-16 bg-red-40
        md:justify-center md:gap-20 
        lg:gap-48">
          <div className="h-10 w-40 bg-green-30 justify-start items-center flex pl-5">
            <h2 className="font-semibold font-montserrat my-3 uppercase text-lg md:text-xl lg:text-2xl">{share.sharename}</h2>
          </div>
          <div className="bg-violet-20 h-10 justify-center items-center flex cursor-pointer"
          onClick={() => toggleDropdown(share.id)}>
            <img
            src="drop.jpeg"
            alt='rhs'
            className={`h-7 w-7 transition-transform duration-0 
            md:h-8 md:w-8  
            ${  openDropdown === share.id ? 'rotate-180' : 'rotate-0'}`}/>
          </div>
        </div>

      {openDropdown === share.id && (
        <div className="space-y-1 h-auto bg-green-30 w-[180px] md:space-y-2 lg:w-60">
          {friends5.map((fri) => (
          fri.friends2.map((frie, index) => (
          <div key={index} className="bg-red-30 flex flex-col justify-center items-start h-10 
          md:h-16"> 

            <div className="h-10 w-36  bg-yellow-30  flex justify-start items-center
            md:w-48">    
            <h1 className="text-lg font-medium font-montserrat capitalize md:text-xl">
            {frie}</h1>
            </div>

            {share.money2 && share.money2.length > 0 && index < share.money2.length 
            ? (<h3 className="text-lg font-montserrat font-normal md:text-opacity-80 md:text-xl">
              ₹{ share.money2[index]}</h3> ) 
            : (<h3 className="text-lg font-semibold">N/A</h3> )}
          </div>
          ))
          ))}
        </div>
         )}
    </div>
    ))) 
    : (<p className="text-red-500">No Share Names found.</p>)}
  </div>
  );
};

export default DisplayShareNames;
