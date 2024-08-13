"use client"
import { useState, useEffect, Suspense } from 'react'
import React from 'react'
import { activeProps } from './ExpandableCard'
import axios from 'axios'
import { ExpandableCardDemo } from '@/components/ExpandableCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PostCards = () => {

const [posts, setPosts] = useState([] as activeProps[])
useEffect(()=>{
    axios.get("/api/getposts").
    then((res)=>{
      setPosts(res.data)
    })
    .then(()=>{
      console.log("Posts", posts)
    })
  },[])

  return (
    <div>
        <Suspense fallback={<Skeleton count={5}/>}>
        <ExpandableCardDemo cards = {posts}/>
        </Suspense>
    </div>
  )
}

export default PostCards