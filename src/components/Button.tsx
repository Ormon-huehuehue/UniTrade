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
         className = "bg-gray w-[20rem] rounded-md text-white font-bol font-amatic text-[5rem] justify-center items-center"> {label}</motion.button>
    </Link>
   
  )
}

export default Button