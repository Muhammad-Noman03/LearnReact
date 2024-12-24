import { useState, version } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <h1>vite + react {version}</h1>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
