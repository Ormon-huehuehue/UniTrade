import React from 'react'

const Card = ({content} : {content :string}) => {
  return (
    <div className = "bg-white p-5 sm:w-[60vw] w-[80vw] font-white rounded-xl  pt-5 gap-8 flex flex-col sm:text-[5vw] text-[10vw]">
        <div  className ="font-white rounded-xl border-[5px] p-5">
            {content}
        </div>
    </div>
  )
}

export default Card