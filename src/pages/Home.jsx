import React from "react";
import { AppProvider, useAppContext } from "../ovelrays/context";
import { Section2 } from "../sections/section2";
import { Section3 } from "../sections/section3";
import { Section1 } from "../sections/section1";
import { PiWalletBold } from "react-icons/pi";
import { LiaSlideshare } from "react-icons/lia";
import { Main } from "../sections/main";



export const Home = () => {
   const {
    showThirdSection,
    setShowThirdSection
  } = useAppContext();

  
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center
    opacity-80 bgblack
    sm:bgblack sm:w-full
    md:bg-none md:bg-black md:bg-cover md:bg-center
    lg:bg-[url('DALL·E1.jpeg')] lg:w-full"
    >

        <section className={`bg-yellow-60 bg-opacity-50 h-[50vh] w-full
        md:h-[230px] md:[750px]
        lg:h-[250px] lg:w-[1400px]
        
        ${!showThirdSection ? 'max-md:block' : 'max-md:hidden'}`}>
          <Section1/>
        </section>
       
        <section  className={`bg-yellow-20 h-[50vh] w-full
        md:h-[80px] md:w-[750px]
        lg:h-[90px] lg:w-[1400px]
        ${!showThirdSection ? 'max-md:block' : 'max-md:hidden'}`}>
          <Section2/>
        </section>

        <section className={`bg-yellow-10
        w-full max-md:min-h-screen
        md:h-[310px] md:w-[750px]
        lg:h-[389px] lg:w-[1400px] 
        ${showThirdSection ? 'max-md:block' : 'max-md:hidden'}`}>
          <Section3/>
        </section>

        <div className="flex  bgblack flex-row justify-center gap-28 absolute bottom-0 left-40 right-40 
          sm:left-20 sm:right-20 
          md:hidden">

            <div className="">
            <LiaSlideshare className={`w-8 h-8 sm:w-9 sm:h-9 
            ${showThirdSection ? '' : 'text-customBlue'}`} 
             onClick={() => setShowThirdSection(false)}/>
            </div>

            <div className="">
            <PiWalletBold className={`w-8 h-8 sm:w-9 sm:h-9 
            ${!showThirdSection ? '' : 'text-customBlue'}`} 
             onClick={() => setShowThirdSection(true)}/>
            </div>
            
        </div>
      </div>
  );
};


export default function AppWrapper() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
