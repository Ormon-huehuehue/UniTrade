"use client"
import { useState } from 'react'

import React from 'react'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'

const SearchField = () => {

    const [search, setSearch] = useState("")



    function onChangeHandler(){
      console.log("Search bar changin")
    }
  
    function onSubmitHandler(){
      console.log("Search bar submitting")
    }

  return (
    <PlaceholdersAndVanishInput onChange={onChangeHandler} onSubmit={onSubmitHandler}
          placeholders={["Search", "Books"]}
    />
  )
}

export default SearchField