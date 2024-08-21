"use client"

import Link from 'next/link';
import React from 'react'

import { motion } from 'framer-motion';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


const Navbar =  () => {



  return (
    <nav className = " py-4 px-5 flex justify-between font-amatic">
        <div id="links" className = "md:text-4xl xsm:text-2xl  flex gap-10 items-center">
            <Link href = "/" className = "font-amatic font-bold hover:text-white" >Uni Trade</Link>
            <Link href = "/buy" className = "font-bold  cursor-pointer  hover:text-white"> Buy</Link>
            <Link href = "/sell" className = "font-bold cursor-pointer hover:text-white" > Sell </Link>
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