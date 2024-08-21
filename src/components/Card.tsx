import React from 'react'

const Card = ({content} : {content :string}) => {
  return (
    <div className = "bg-white p-5 w-[40vh] font-white rounded-xl xl:text-8xl md:text-6xl mr-4 pt-5 gap-8 flex flex-col">
        <div  className ="font-white rounded-xl border-[5px] p-5">
            {content}
        </div>
    </div>
  )
}

export default Card