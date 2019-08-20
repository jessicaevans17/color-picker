import React, { Component } from "react"

class App extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: `${Math.floor(Math.random() * 100)}%`,
    lightness: `${Math.floor(Math.random() * 100)}%`,
    hueInput: "",
    satInput: "",
    lightInput: ""
  }

  saveHueInput = event => {
    console.log(event.target.value)
    this.setState({
      hueInput: event.target.value,
      hue: this.state.hueInput
    })
  }

  saveSaturationInput = event => {
    console.log(`${event.target.value.toString()}%`)
    this.setState({
      satInput: `${event.target.value.toString()}%`,
      saturation: this.state.satInput
    })
  }

  saveLightnessInput = event => {
    console.log(event.target.value)
    this.setState({
      lightInput: `${event.target.value.toString()}%`,
      lightness: this.state.lightInput
    })
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Color Picker</h1>
        </nav>
        <main>
          <section className="color-display">
            <section
              className="color-display-box"
              style={{
                backgroundColor: `hsl(${this.state.hue},${
                  this.state.saturation
                } ,${this.state.lightness} )`
              }}
            >
              Color Displays Here
            </section>
          </section>
          <section className="sliders">
            <input
              type="range"
              min="1"
              max="360"
              defaultValue="180"
              className="hue"
              onChange={this.saveHueInput}
            />{" "}
            <span className="display-type">Hue</span>
            <input
              type="range"
              min="0%"
              max="100%"
              defaultValue="50%"
              className="saturation"
              onChange={this.saveSaturationInput}
            />{" "}
            <span className="display-type">Saturation</span>
            <input
              type="range"
              min="0%"
              max="100%"
              defaultValue="50%"
              className="lightness"
              onChange={this.saveLightnessInput}
            />{" "}
            <span className="display-type">Lightness</span>
          </section>
        </main>
      </div>
    )
  }
}

export default App
