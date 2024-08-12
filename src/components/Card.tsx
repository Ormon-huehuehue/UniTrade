import React from 'react'

const Card = ({content} : {content :string}) => {
  return (
    <div className = "bg-white p-5 w- font-white rounded-xl text-8xl mr-4 pt-5 gap-8 flex flex-col">
        <div  className ="font-white rounded-xl border-[5px] p-5">
            {content}
        </div>
    </div>
  )
}

export default Card