/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import React from 'react'
import './AboutMe.css'
import yo1 from './Imagenes/yoFinal.png'
import cable from './Imagenes/cable.png'
import ipod from './Imagenes/ipod.png'
import n1 from './Imagenes/nota2.png'
import n2 from './Imagenes/nota3.png'
import n3 from './Imagenes/nota4.png'
import n4 from './Imagenes/nota5.png'
import n5 from './Imagenes/nota6.png'
import git from './Imagenes/11.png'
import linkdin from './Imagenes/10.png'
import google from './Imagenes/12.png'

const AboutMe = () => {
  return (
    <div>
      <img className="dibujo2" src={yo1} />
      <p className="aboutMe">About Me</p>
      <div className="informacion">
        <img className="nota" src={n1} />
        <img className="nota2" src={n2} />
        <img className="nota3" src={n3} />
        <img className="nota4" src={n4} />
        <img className="nota5" src={n5} />
        <div className="infoC1" />
      </div>
      <img className="cable" src={cable} />
      <img className="mp3" src={ipod} />
      <div className="playlist">
        <iframe src="https://open.spotify.com/embed/track/47WtMNT8S9n3eqsCn076Bf" width="140" height="90" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
      </div>
      <div className="contact" />
      <p className="contactT1">Contact Me</p>
      <a href="https://github.com/srue1834">
        <img src={git} className="git" />
      </a>
      <a href="https://www.linkedin.com/in/sofia-rueda-712270179/">
        <img src={linkdin} className="linked" />
      </a>
      <a href="mailto:sofirued01@gmail.com">
        <img src={google} className="google" />
      </a>
    </div>
  )
}

export default AboutMe
