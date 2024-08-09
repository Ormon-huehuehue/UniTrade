"use client"

import Link from 'next/link';
import React from 'react'

import { motion } from 'framer-motion';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Navbar =  () => {



  return (
    <nav className = " py-4 px-5 flex justify-between font-montserrat">
        <div id="links" className = "text-xl flex gap-10 items-center">
            <Link href = "/" className = "font-amatic font-bold text-4xl" >Uni Trade</Link>
        
            <Link href = "/" className = "font-semibold  text-lg cursor-pointer hover:text-orange"> Home </Link>
            <Link href = "/" className = "font-semibold text-lg cursor-pointer  hover:text-orange"> Buy</Link>
            <Link href = "/" className = "font-semibold text-lg cursor-pointer hover:text-orange" > Sell </Link>
        </div>
        <div className ="flex items-center gap-10 font-montserrat ">
            <SignedIn>
                <UserButton showName/>
            </SignedIn>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
        </div>
    </nav>
  )
}

export default Navbar