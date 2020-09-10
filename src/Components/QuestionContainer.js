import React from "react"
import Question from "./Question"
import Answers from "./Answers"

function QuestionContainer() {   
    return (
        <div id="question-container">
        <Question />
            <br></br>
        <Answers />
        </div>
    )
}

export default QuestionContainer