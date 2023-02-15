import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  })

  return (
    <>
      <Navbar />
      <section className='section center'>
        <h2>width is : {width} Px🤌🏼</h2>
        <h2>height is : {height} px🤏🏼</h2>
      </section>
    </>
  )
}

export default App
