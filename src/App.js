import React, { useContext } from "react"
import { Context } from "./Components/Context"
import QuestionContainer from "./Components/QuestionContainer"
import Controls from "./Components/Controls"

function App() {
    const { showQA, showControls, showResult, score } = useContext(Context)
    return (
        <div className="container">
            {showQA && <QuestionContainer/>}
            {showControls && <Controls/>}
            {showResult && <h1>You answered {score} of 10 Questions Correctly!</h1>}
        </div>
    )
}

export default App