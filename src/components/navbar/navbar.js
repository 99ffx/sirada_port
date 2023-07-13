import "./navbar.css"
import React from 'react'

function Navbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="headline-left">
            <span>s</span>
            <span style={{ color: '#96F18E', fontStyle: 'italic' }}>i</span>
            <span>rada</span>
          </div>
        </div>
        <div className="col-2">
          <div className="contact-me">
            <button type="button" class="btn btn-outline-primary">Contact Me</button>
          </div>
        </div>
      </div>


    </div>


  )
}

export default Navbar

