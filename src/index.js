/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Animacion from './components/Animacion'
import MyWork from './components/MyWork'
import AboutMe from './components/AboutMe'

const App = () => (
  <div>
    <Animacion />
    <MyWork />
    <AboutMe />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
