
import React from 'react'
import PostData from '@/components/PostData';
import Navbar from '@/components/Navbar';
import SearchField from '@/components/SearchField';


const page = ({params} : {params : {post : number}}) => {

    const postId = params.post;

  return (
    <div className = "flex flex-col">
    <div className="h-screen object-fill flex flex-col">
      <div className=" top-0 left-0 w-full z-10">
          <Navbar/>
        <SearchField/>
      </div>
      {/* <div className = "justify-center">
      </div> */}
       
      <div className="my-5 border-2 flex flex-col gap-2 flex-wrap">
      <PostData postId = {postId}/>

      </div>

      
    </div>
  </div>
  
    
  
  )
}

export default page