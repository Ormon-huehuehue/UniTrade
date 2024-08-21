import React from 'react'
import { ExpandableCardDemo } from './ExpandableCard'

export interface PostCardProps{
    title : string,
    price : string,
    image : string,
    description:string,
    
}

const PostCard = ({title, price, image} : PostCardProps) => {




  return (
    <div className = "flex flex-col w-2/5 h-2/5 justify-center items-center border-2 rounded-xl">
        <img src = {image}/>
        <h1>{title}</h1>
        <h2>{price}</h2>
    </div>
  )
}

export default PostCard