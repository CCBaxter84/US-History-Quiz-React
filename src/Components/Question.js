import React, { useContext } from "react"
import { Context } from "./Context"

function Question() {
    const { questionIndex, questions } = useContext(Context)
    return (
        <h2 id="question">{questions[questionIndex].question}</h2>
    )
}

export default Question