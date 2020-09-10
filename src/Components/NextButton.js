import React, {useContext} from "react"
import {Context} from "./Context"

function NextButton() {
    const {quizStarted, nextQuestion} = useContext(Context)
    const hideOrDisplay = quizStarted === true ? "control-button button" : "control-button button hide"

    function handleClick() {
        //load the next question
        nextQuestion()
        //change the background color back to normal
    }
    
    return (
        <button className={hideOrDisplay} id="next-button" onClick={handleClick}>Next</button>
    )
}

export default NextButton