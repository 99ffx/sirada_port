import "./navbar.css";
import React from "react";

function Navbar() {
  return (
    <div id="navbar" className=" sticky-top" style={{backgroundColor: "#27323A"}}>
      <div className="container mt-20 sticky-top">
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
              <button
                type="button"
                className="btn ps-17 pe-17"
                onClick={() =>
                  (window.location = "mailto:sirada.2635@gmail.com")
                }
              >
                Contact Me
                <i className="bi bi-envelope ms-2"></i>
              </button>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/sirada-kittipaisarnkul-068854224/"
                target="blank"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "2.6em", color: "#0e76a8" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0", opacity: "1", color: "white" }} />
    </div>
  );
}

export default Navbar;
