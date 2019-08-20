import React, { Component } from "react"

class ChangeColors extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: "50%",
    lightness: "50%"
  }

  changeHue = event => {
    console.log(event.target.value)
    this.setState({
      hue: event.target.value
    })
  }

  changeSaturation = event => {
    console.log(`${event.target.value.toString()}%`)
    this.setState({
      saturation: `${event.target.value.toString()}%`
    })
  }

  changeLightness = event => {
    console.log(event.target.value)
    this.setState({
      lightness: `${event.target.value.toString()}%`
    })
  }

  randomColor = event => {
    console.log("button is working!")
    this.setState({
      hue: Math.floor(Math.random() * 360)
    })
  }
  render() {
    return (
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
            max="360"
            defaultValue={this.state.hue}
            className="hue"
            onChange={this.changeHue}
          />
          <section className="display-type">Hue</section>
          <input
            type="range"
            defaultValue={this.state.saturation}
            className="saturation"
            onChange={this.changeSaturation}
          />
          <section className="display-type">Saturation</section>
          <input
            type="range"
            defaultValue={this.state.lightness}
            className="lightness"
            onChange={this.changeLightness}
          />
          <section className="display-type">Lightness</section>
          <h2
            style={{
              color: `hsl(${this.state.hue},${this.state.saturation} ,${
                this.state.lightness
              } )`
            }}
          >{`hsl (${this.state.hue}, ${this.state.saturation}, ${
            this.state.lightness
          })`}</h2>
          <button onClick={this.randomColor}>Random Color</button>
        </section>
      </main>
    )
  }
}

export default ChangeColors
