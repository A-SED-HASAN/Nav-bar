import React, { useState, useRef, useEffect } from 'react'
import { HiBars2 } from 'react-icons/hi2'
import { links, social } from './data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect()
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight.height}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h3>A-SED-HASAN</h3>
          <button
            className='nav-toggle'
            onClick={() => {
              setShowLinks(!showLinks)
            }}>
            <HiBars2 />
          </button>
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
