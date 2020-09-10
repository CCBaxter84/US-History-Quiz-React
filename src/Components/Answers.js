import React, { useContext, useEffect } from "react"
import { Context } from "./Context"

function Answers() {
    const { questions, questionIndex, incrementScore, clicked, selectedAnswer } = useContext(Context)
    const answers = questions[questionIndex].answers.map(item => (
        <button 
            key={questions[questionIndex].answers.indexOf(item)} 
            className="button answer-button" 
            value={item.correct}>
            {item.text}
        </button>
    ))
    let answerButtons

    useEffect(() => {
        answerButtons = Array.from(document.getElementsByClassName("answer-button"))
        !clicked && answerButtons.forEach(button => {
            button.addEventListener("click", checkAnswer)
        })
    }, [clicked])

    function checkAnswer(event) {
        selectedAnswer()
        answerButtons.forEach(button => {
            button.removeEventListener("click", checkAnswer)
        })
        const {value} = event.target
        if (value === "true") {
            incrementScore()
            document.body.classList.add('correct')
            event.target.classList.add('correct')
        } else {
            document.body.classList.add('wrong')
            event.target.classList.add('wrong')
        }
    }

    return (
        <div className="button-grid">
            {answers}
        </div>
    )
}

export default Answers