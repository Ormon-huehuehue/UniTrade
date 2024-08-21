"use client"

import axios from 'axios'
import Error from 'next/error'
import { useEffect, useState } from 'react'
import React from 'react'
import { activeProps } from './ExpandableCard'
import GetintouchButton from './getintouchButton'
import SoldButton from './SoldButton'
import SimpleButton from './SimpleButton'
import { motion } from 'framer-motion'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Button from './Button'



const PostData = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState(null as activeProps | null)

  async function onClickHandler(){
    console.log("Offered")
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get('/api/fetchpost', {
          headers: {
            'postId': postId.toString() // Convert number to string
          }
        })
        setPost(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPost()
  }, [postId])

  if (!post) return <div>Loading...</div>

  return (
    <div className = "flex mx-5 my-10">
      <div className = "flex flex-col">
        <img src = {post.image} className = "w-[300px]" />
        <p> Published by</p>
        <h1>{post.title}</h1>
        <p>{post.description}</p>


        {/* sold button to be added on the page where the seller gets to view the */}
        
        {/* <div >
          <SoldButton postId = {postId} sold ={post.sold}/>
        </div> */}

        <Drawer>
          <DrawerTrigger>
            <SimpleButton label = "BUY NOW">
            </SimpleButton>
            </DrawerTrigger>
          <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Offer a fair price </DrawerTitle>
            <DrawerDescription>Be mindful while offering the amount to the seller</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
          <div className = "flex justify-center">
            <motion.button
              whileHover={{scale:1.1}}
              whileTap = {{scale:0.9}}
              className = "bg-gray text-white rounded-md p-5 m-5 justify-center"
              onClick = {()=>onClickHandler()}>
              Submit
          </motion.button>
          </div>
            <DrawerClose>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      {/* Add more post details as needed */}
      </div>
    </div>
  )
}

export default PostData