/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Work.css'
// import yo from './Imagenes/yo.png'
// import yo2 from './Imagenes/yo4.png'
import v1 from './Videos/Proyecto5.gif'
import v2 from './Videos/Proyecto4.gif'
import v3 from './Videos/Proyecto1.gif'
import v4 from './Videos/Proyecto3.gif'
import v5 from './Videos/Proyecto2.gif'

const MyWork = () => (
  <div>
    <div>
      <div className="fondo" />
      <div className="carousel">
        <div className="slides">
          <input type="radio" name="btn" id="img1" />
          <input type="radio" name="btn" id="img2" />
          <input type="radio" name="btn" id="img3" />
          <input type="radio" name="btn" id="img4" />
          <input type="radio" name="btn" id="img5" />

          <div className="slide first">
            <img src={v1} />
          </div>
          <div className="slide second">
            <img src={v2} />
          </div>
          <div className="slide">
            <img src={v3} />
          </div>
          <div className="slide">
            <img src={v4} />
          </div>
          <div className="slide">
            <img src={v5} />
          </div>
        </div>
      </div>
      <div className="tv">
        <div className="navigation">
          <label for="img1" className="navbtn"></label>
          <label for="img2" className="navbtn"></label>
          <label for="img3" className="navbtn"></label>
          <label for="img4" className="navbtn"></label>
          <label for="img5" className="navbtn"></label>
        </div>
      </div>
    </div>
  </div>
)

export default MyWork
