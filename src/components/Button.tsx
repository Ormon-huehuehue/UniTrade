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
         className = "bg-gray  rounded-md text-white font-bol font-amatic text-[6vw] px-[6vw] justify-center items-center"> {label}</motion.button>
    </Link>
   
  )
}

export default Button