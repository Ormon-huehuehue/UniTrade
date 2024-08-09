"use client";
import React, { useState } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEdgeStore } from '../lib/edgestore';

import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

import { Textarea } from "@/components/ui/textarea"


export function SignupForm() {

  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();



    const [isLoading, setIsLoading] = useState(false);

    const {user} = useUser();
    const userId = user?.id;


  const handleSubmit = async (formdata : FormData) => {
    setIsLoading(true);


    if(!userId){
        console.log("User not logged in");
        return;
    }

    const title = formdata.get("title");
    const description = formdata.get("description");
    const price = formdata.get("price");
    // get the fileURL from edge api
    


    
    if(!title || !price){
      console.log("Please fill in all the details");
      return;
    }
    
    console.log("title", title)
    console.log("Description: ", description);
    console.log("Price: ", price);


    if(file){
      const res = await edgestore.publicFiles.upload({
        file,
      })
  
      const size = res.size;
      console.log("size : ",size);
      const url = res.url;
      console.log("url : ", url);
      
      const response = await axios.post("/api/post",{
          title,
          description,
          price,
          userId,
          url
      })

      console.log(response);
      console.log("Form submitted");
      setIsLoading(false);
      return
    }
    else{
      setIsLoading(false)
      throw new Error("No file selected");

    }
  }

  



  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        DETAILS
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Fill in the details of the post you want to create
      </p>

      <form className="my-8" action={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
          <LabelInputContainer>
            <Label htmlFor="firstname"> Title <span className = "text-red-600">*</span></Label>
            <Input id="title" placeholder="Title" type="text" name="title"/>
          </LabelInputContainer>
        </div>
        <Label>Description </Label>
        <Textarea className ="mb-5" name="description"/>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="price">Price<span className = "text-red-600">*</span></Label>
          <Input id="price" placeholder="Rs" type="text" name="price"/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="picture">Upload Picture<span className = "text-red-600">*</span></Label>
            <input id="picture" type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0])}}
            />
        </LabelInputContainer>

        <div className = "flex justify-center">

        {!isLoading? <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          >
          Create Post &rarr;
          <BottomGradient />
        </button> : <button className = "flex justify-center text-center bg-gray rounded-md w-1/2 h-[40px] text-white items-center font-montserrat text-lg"> Creating Post ...</button>
        }
        </div>
        
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
