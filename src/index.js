import React from "react"
import ReactDOM from "react-dom"
import { ContextProvider } from "./Components/Context"
import App from "./App"
import "../src/styles.css"

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
)