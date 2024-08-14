
import React from 'react'
import PostData from '@/components/PostData';

const page = ({params} : {params : {post : number}}) => {

    const postId = params.post;


  return (
    <div>
      <PostData postId = {postId}/>
    </div>
  )
}

export default page