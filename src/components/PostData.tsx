"use client"

import axios from 'axios'
import Error from 'next/error'
import { useEffect, useState } from 'react'
import React from 'react'
import { activeProps } from './ExpandableCard'

const PostData = ({ postId }: { postId: number }) => {
  const [post, setPost] = useState(null as activeProps | null)

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
     
      {/* Add more post details as needed */}
    </div>
  )
}

export default PostData