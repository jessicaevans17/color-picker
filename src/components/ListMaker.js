import React, { Component } from "react"

class ListMaker extends Component {
  render() {
    return (
      <section class="sliders">
        <input
          type="range"
          max={this.props.max}
          defaultValue={this.props.defaultValue}
          className={this.props.name}
        />
      </section>
    )
  }
}
