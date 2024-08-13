"use client"

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { activeProps } from '@/components/ExpandableCard'
import PostCards from '@/components/PostCards'


const page = () => {

  const [search, setSearch] = useState("")

  const [posts, setPosts] = useState([] as activeProps[])

 

  function onChangeHandler(){
    console.log("Search bar changin")
  }

  function onSubmitHandler(){
    console.log("Search bar submitting")
  }

  return (
    
  <div className = "flex flex-col">
    <div className="h-screen object-fill flex flex-col">
      <div className=" top-0 left-0 w-full z-10">
          <Navbar/>
          <PlaceholdersAndVanishInput onChange={onChangeHandler} onSubmit={onSubmitHandler}
          placeholders={["Search", "Books"]}
          />
          
      </div>
       
      <div className="my-5 border-2 flex flex-col gap-2">
      <div className = "flex mt-2 p-2">
      <span className = "w-full">
        <PostCards/>
        

      </span>
      </div>
      </div>

      
    </div>
  </div>
  )
}

export default page