import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver} from "@hookform/resolvers/yup"
import { useAppContext } from './context';
import React from "react";

export function Sh(){
    const { setModal } = useAppContext();



    return (
    <div className="fixed inset-0 h-full w-full flex justify-center items-center bg-black/50 z-auto" >
        
        <div className="bg-white border-2 border-black rounded-lg relative h-[550px] w-[290px]
        md:h-[550px] md:w-[550px] md:bg-white md:bg-opacity-90" >
            
            <div className="absolute top-0 right-2 text-2xl md:text-[32px] cursor-pointer" 
                onClick={()=>{
                setModal(false)
                }}> 
                &times; 
            </div>
             <Form/>
      </div>
      </div>
    )
}
export  const Form=()=>{
    const { setModal,setModal3, setFriends2,
        setName,setMoney,
        setBudget,setMoney2,
        members,setMembers
     } = useAppContext();

    const schema=yup.object().shape({
        trip:yup.string().required("Enter trip name"),
        budget:yup.number().typeError('Enter correct Budget')
        .required("Budget is required")
        .min(50,'must be greater than 50'),
        members:yup.number().typeError('Enter Total members')
        .positive().integer().min(2,'must be atleast two members').required()
        })

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })

    

    const handleform=async(e)=>{
        //e.preventDefault()
        console.log(e)
        setModal(false)
        setModal3(true)
        setFriends2(Array(Number(members)).fill(""))   
        setMoney(Array(Number(members)).fill(0))
        setMoney2(Array(Number(members)).fill(""))
    }   

    return(
        <div>
     
        <form onSubmit={handleSubmit(handleform)}
        className="flex justify-center flex-col items-center">

            <span className="inline-block break-words font-montserrat font-normal text-lg mt-16
            md:mt-12 md:text-xl">
                Enter Trip Name</span><br/>
            <input type="text" placeholder="Trip" {...register("trip")}
            className="border border-black p-1 font-montserrat capitalize h-9 w-48 rounded-md md:h-10"
            onChange={(e)=>setName(e.target.value)} /> 
            <span className="flex justify-center items-center text-red-500
             h-[5px] w-[200px] m-4 text-sm md:text-base ">
                {errors.trip?.message}</span> 

            <span className="inline-block break-words font-montserrat font-normal text-lg md:text-xl">
                Enter Total Budget</span>
                <span className="inline-block break-words font-montserrat font-normal text-xs md:text-sm">
                (For per Person)</span><br/>
            <input type="number" placeholder="₹" {...register("budget")} 
            className="border border-black p-1 font-montserrat h-9 w-48 rounded-md md:h-10"
            onChange={(e)=>setBudget(e.target.value)}/>
            <span className="flex justify-center text-center items-center text-red-500
             h-[5px] w-[200px] m-4 text-sm md:text-base">{errors.budget?.message}</span>

            <span className="inline-block break-words font-montserrat font-normal text-lg md:text-xl">
                Total Members</span><br/>
            <input type="number" placeholder="+" {...register("members")} 
            className="border border-black p-1 font-montserrat h-9 w-48 rounded-md md:h-10"
            onChange={(e) => {
                setMembers(e.target.value);
                
            }}/>
            <span className="flex justify-center text-center items-center text-red-500
             h-[5px] w-[200px] m-4 text-sm md:text-base">{errors.members?.message}</span>

            <input className="cursor-pointer rounded-lg text-center bg-customBlue text-white
            hover:bg-white hover:text-customBlue hover:border-2 hover:border-customBlue 
            text-xl font-normal m-3 h-10 w-28
            md:h-[48px] md:w-[130px] md:text-2xl md:border-2 md:border-black md:bg-white md:text-black 
            md:hover:border-white md:hover:bg-black md:hover:text-white" 
            type="submit" value="SUBMIT" />            
        </form>
    </div>
    )
}
