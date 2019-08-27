import React from "react"
import { useState } from "react"

const ChangeColorsWithHooks = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState("50%")
  const [lightness, setLightness] = useState("50%")

  return (
    <main>
      <section className="color-display">
        <section
          className="color-display-box"
          style={{
            backgroundColor: `hsl(${hue},${saturation} ,${lightness} )`
          }}
        >
          <h2
            className="hsl-color"
            style={{ color: `hsl(${hue},${saturation} ,${lightness} )` }}
          >{`hsl (${hue}, ${saturation}, ${lightness})`}</h2>
        </section>
      </section>
      <section className="sliders">
        <input
          type="range"
          max="360"
          defaultValue={hue}
          onChange={e => {
            setHue(e.target.value)
          }}
        />
        <section className="display-type">Hue</section>
        <input
          type="range"
          defaultValue={saturation}
          onChange={e => {
            setSaturation(`${e.target.value.toString()}%`)
          }}
        />
        <section className="display-type">Saturation</section>
        <input
          type="range"
          defaultValue={lightness}
          onChange={e => {
            setLightness(`${e.target.value.toString()}%`)
          }}
        />
        <section className="display-type">Lightness</section>

        <button
          onClick={() => {
            setHue(Math.floor(Math.random() * 360))
          }}
        >
          Random Color
        </button>
      </section>
    </main>
  )
}

export default ChangeColorsWithHooks
