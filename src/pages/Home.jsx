import React from "react";
import { AppProvider, useAppContext } from "../ovelrays/context";
import { Sh } from "../ovelrays/share1";
import { Sh2 } from "../ovelrays/Share2";
import { Sh3 } from "../ovelrays/share3";
import { Sh4 } from "../ovelrays/share4";
import { Section2 } from "../sections/section2";
import { Section3 } from "../sections/section3";
import { Section1 } from "../sections/section1";
import { PiWalletBold } from "react-icons/pi";
import { LiaSlideshare } from "react-icons/lia";
import { Main } from "../sections/main";



export const Home = () => {
   const {
    modal,
    modal2,
    modal3,
    modal4,
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
        
        {modal  && <Sh  />}
        {modal2 && <Sh2 />}
        {modal3 && <Sh3 />}
        {modal4 && <Sh4 />}
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
