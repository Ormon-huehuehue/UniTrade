import React from 'react'

const QuestionComponent = ({question, answer} : { question : string, answer : string}) => {
  return (
    <div className = "bg-white p-5 sm:w-[60vw] w-[80vw] md:w-[20rem] lg:w-[25rem] font-white rounded-xl gap-2 flex flex-col lg:text-[1vw] md:text-[11px] text-[5vw] opacity-90 md:h-[30vw] sm:h-[48vw] h-auto lg:h-[20vw]">
        <div  className ="font-white rounded-xl bworder-[5px] p-5 font-bold">
            {question}
        </div>
        <div  className ="font-white rounded-xl border-[5px] p-5">
            {answer}
        </div>
    </div>
  )
}

export default QuestionComponent