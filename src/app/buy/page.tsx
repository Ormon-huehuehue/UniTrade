import React from 'react'
import Navbar from '@/components/Navbar'

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'
import { activeProps } from '@/components/ExpandableCard'
import PostCards from '@/components/PostCards'
import SearchField from '@/components/SearchField'


const page = () => {

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
        <div className = "flex mt-2 p-2 flex-wrap max-w-screen">
          <span className = " flex-wrap">
            <PostCards/>
          </span>
        </div>
      </div>

      
    </div>
  </div>
  )
}

export default page