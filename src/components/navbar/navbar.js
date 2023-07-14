import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="container mt-20">
        <div className="row">
          <div className="col-9">
            <div className="headline-left">
              <span>s</span>
              <span style={{ color: "#96F18E", fontStyle: "italic" }}>i</span>
              <span>rada</span>
            </div>
          </div>
          <div className="col-3">
            <div className="contact-me">
              <button type="button" class="btn btn-outline-primary ps-17 pe-17"
              onClick={()=> window.location = 'mailto:sirada.2635@gmail.com'}>
                Contact Me
                <i class="bi bi-envelope ms-2"></i>
              </button>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/sirada-kittipaisarnkul-068854224/"
                target="blank"
              >
                <i
                  class="bi bi-linkedin"
                  style={{ fontSize: "2.6em", color: "#0e76a8" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr style={{marginTop:'0', opacity:'1', color:'white'}} />
    </>
  );
}

export default Navbar;
