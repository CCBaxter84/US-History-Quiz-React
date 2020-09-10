import React, { useState } from "react"
import questionBank from "../questionBank"
const Context = React.createContext()

function ContextProvider(props) {
    const [quizStarted, setQuizStarted] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questions, setQuestions] = useState(questionBank)
    const [score, setScore] = useState(0)
    const [showQA, setShowQA] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [clicked, setClicked] = useState(false)
    const [showResult, setShowResult] = useState(false)

    function startQuiz() {
        setQuizStarted(prev => !prev)
        setQuestions(prev => prev.sort(() => Math.random() - 0.5))
        setScore(0)
        setShowQA(true)
    }

    function selectedAnswer() {
        setClicked(true)
    }

    function nextQuestion() {
        const answerButtons = Array.from(document.getElementsByClassName("answer-button"))
        answerButtons.forEach(button => {
            button.classList.remove("correct")
            button.classList.remove("wrong")
        })
        document.body.classList.remove("wrong")
        document.body.classList.remove("correct")
        setClicked(false)
        if (questions[questionIndex + 1] === undefined) {
            endGame()
        } else {
            setQuestionIndex(prev => prev + 1)
        }
    }

    function endGame() {
        console.log("Game over")
        setShowQA(false)
        setShowControls(false)
        setShowResult(true)
    }

    function incrementScore() {
        setScore(prev => prev + 1)
    }
    
    return (
        <Context.Provider value={{quizStarted, startQuiz, questionIndex, nextQuestion, questions, score, incrementScore, showQA, showControls, showResult, clicked, selectedAnswer}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

