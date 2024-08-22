"use client"

import React from 'react'
import { Redirect } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps{
    label : string,
    url : string
}

const Button = ({label, url} :ButtonProps) => {

  return (
   
    <Link href = {url}> 
         <motion.button 
         whileHover={{scale:1.1}}
         whileTap = {{scale:0.9}}
         className = "bg-gray  rounded-md text-white font-amatic lg:text-[6vw] text-[12vw] md:text-[6vw] lg:px-[6vw] px-[20vw] justify-center items-center"> {label}</motion.button>
    </Link>
   
  )
}

export default Button