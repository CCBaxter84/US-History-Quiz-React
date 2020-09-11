import React, { useContext } from "react"
import { Context } from "./Context"

function StartButton() {
    const { quizStarted, startQuiz } = useContext(Context)
    const displayOrHide = quizStarted === false ? "control-button button" : "control-button button hide"

    function handleClick() {
        startQuiz()
    }

    return (
        <button className={displayOrHide} id="start-button" onClick={handleClick}>Start</button>
    )
}

export default StartButton