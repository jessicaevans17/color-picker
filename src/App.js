import React, { Component } from "react"
import ChangeColorsWithHooks from "./components/ChangeColorsWithHooks.jsx"

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Color Picker</h1>
        </nav>
        <ChangeColorsWithHooks />
      </div>
    )
  }
}

export default App
