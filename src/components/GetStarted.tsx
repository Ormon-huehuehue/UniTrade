"use client"
import WordPullUp from './magicui/word-pull-up'

import React from 'react'

const GetStarted = () => {
  return (
    <section className = "flex flex-col bg-yellow px-5 pb-10">
    <div className="flex justify-center mt-[2vw] z-50 font-amatic mx-5 font-bold ">
        <WordPullUp
          className="ml-5 font-bold tracking-[-0.02em] text-black dark:text-white justify-start"
          words="GET  STARTED"
        />
    </div>

    <div className="py-[3vw] z-5 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-20 font-montserrat ">
        <h4>
            
        </h4>
    
    </div>

  </section>
  )
}

export default GetStarted