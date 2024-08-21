import React from 'react'

const Card = ({content} : {content :string}) => {
  return (
    <div className = "bg-white p-5 w-[60vw] font-white rounded-xl  mr-4 pt-5 gap-8 flex flex-col text-[5vw]">
        <div  className ="font-white rounded-xl border-[5px] p-5">
            {content}
        </div>
    </div>
  )
}

export default Card