import React, { Component } from "react"
import ChangeColor from "./components/ChangeColor"

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Color Picker</h1>
        </nav>
        <ChangeColor />
      </div>
    )
  }
}

export default App
