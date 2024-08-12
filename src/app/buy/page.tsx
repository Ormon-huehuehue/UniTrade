"use client"

import React, { Suspense, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { postsAtom } from '@/atoms'
import Navbar from '@/components/Navbar'
import { PostCardProps } from '@/components/PostCard'
import { ExpandableCardDemo } from '@/components/ExpandableCard'
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { activeProps } from '@/components/ExpandableCard'


const page = () => {

  const [search, setSearch] = useState("")

  const [posts, setPosts] = useState([] as activeProps[])

  useEffect(()=>{
    axios.get("/api/getposts").
    then((res)=>{
      setPosts(res.data)
    })
    .then(()=>{
      console.log("Posts", posts)
    })
  },[search])

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
      <span>
        <Suspense fallback={<div className = "text-black text-8xl font-amatic font-bold"> LOADING.....</div>}>
        <ExpandableCardDemo cards = {posts}/>
        </Suspense>

      </span>
      </div>
      </div>

      
    </div>
  </div>
  )
}

export default page