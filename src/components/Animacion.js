/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Principal.css'
import reactL from './Imagenes/reactLogo.png'
import webpackL from './Imagenes/webpackLogo.png'
import babelL from './Imagenes/babelLogo.png'
import eslintL from './Imagenes/eslintLogo.png'
import unityL from './Imagenes/unityLogo.png'
import psL from './Imagenes/pslogo.png'
import photoL from './Imagenes/photoLogo.png'

// import mongoL from './Imagenes/mongodb-logo.png'
import mongoL2 from './Imagenes/mongoLogo.png'
import nodeL from './Imagenes/nodeLogo.png'
import expressL from './Imagenes/expressLogo.png'

import yo2 from './Imagenes/dibujos2.gif'

const Animacion = () => (
  <div>
    <div>
      <p className="titulo">Sofia</p>
      <p className="titulo2">Rueda</p>
      <div className="datosC1">
        <div className="proyecto1">
          <div className="titulosP1">1. Imitación de Webtoon</div>
          <img className="rl" src={reactL} />
          <img className="wl" src={webpackL} />
          <img className="bl" src={babelL} />
          <img className="esl" src={eslintL} />
        </div>
        <div className="proyecto2">
          <div className="titulosP2">2. Quitting (demo 1)</div>
          <img className="logo1" src={unityL} />
          <img className="logo2" src={psL} />

        </div>
        <div className="proyecto3">
          <div className="titulosP3">3. My Neighbors are Moles</div>
          <img className="logo1" src={unityL} />
          <img className="logo2" src={psL} />

        </div>
        <div className="proyecto4">
          <div className="titulosP2">4. Quitting (demo 2)</div>
          <img className="logo1" src={unityL} />
          <img className="logo3" src={photoL} />

        </div>
        <div className="proyecto5">
          <div className="titulosP3">5. Musicorum MP3</div>
          <img className="logo4" src={mongoL2} />
          <img className="logo2" src={nodeL} />
          <img className="logo1" src={expressL} />
        </div>
      </div>
      <img className="dibujo1" src={yo2} />
    </div>
    <div className="fondo2"></div>
  </div>
)

export default Animacion
