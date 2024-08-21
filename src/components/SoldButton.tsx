"use client"

import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const SoldButton = ({postId, sold} : {postId : number, sold : boolean}) => {


    const [soldStatus, setSoldStatus] = useState(sold)


    const onClickHandler = async () => {
        console.log("PostId", postId)
        const response = await axios.put("/api/updatepoststatus", {
            postId: postId,
            sold: soldStatus
        })

        setSoldStatus(!soldStatus)

        console.log(response.data)
    }


  return (
    <div>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap = {{scale:0.9}}
        className = "bg-gray text-white rounded-md p-5 m-5 "
         onClick = {()=>onClickHandler()}>
            {!soldStatus? "Mark as sold" : "Mark as unsold"}
        </motion.button>
    </div>
  )
}

export default SoldButton