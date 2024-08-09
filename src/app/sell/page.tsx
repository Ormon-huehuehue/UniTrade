import React from 'react';
import Navbar from '@/components/Navbar';
import { ContainerScroll } from '@/components/aceternityUi/container-scroll-animation';
import Button from '@/components/Button';
import { SignupForm } from '@/components/SignupForm';

const page = () => {
  return (
    <div className="h-screen object-fill flex flex-col">
    <div className=" top-0 left-0 w-full z-10">
        <Navbar/>
    </div>
    <div className="top-0 left-0 max-w-full ml-5 mr-5">
      <div className ="relative ">
        <ContainerScroll titleComponent= {<h6 className="text-[100px] font-bold font-amatic">Create Post</h6>}>
          <SignupForm/>
        </ContainerScroll>
      </div>
        

      


     {/* other components */}
    </div>
  </div>
  )
}

export default page