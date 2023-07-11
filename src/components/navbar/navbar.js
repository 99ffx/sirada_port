import "./navbar.css"
import React from 'react'

function Navbar() {
  return (
    <div className="navbar-wrap">
      <div className="headline-left">
        <span>s</span>
        <span style={{ color: '#96F18E', fontStyle: 'italic' }}>i</span>
        <span>rada</span>
      </div>

      <div className="contact-me">
        <button>
          Contact Me
        </button>
      </div>
    </div>


  )
}

export default Navbar

