import React from "react";
import bracelets from "../../assets/bracelets.png"
import necklaces from "../../assets/necklaces.png"
import "./styles.scss"

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${bracelets})`
          }}
        >
          <a>Bracelets</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${necklaces})`
          }}
        >
          <a>Gemstone Jewlery</a>
        </div>
      </div>
    </div>
  )
}

export default Directory