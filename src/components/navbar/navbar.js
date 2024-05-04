import "./navbar.css";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });
  
  return (
    
    <><div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div><div id="navbar" className=" sticky-top" style={{ background: "#2C2C2C" }}>
        <div className="container mt-20 sticky-top">
          <div className="row">
            <div className="headline-center">
              <span>FITMORE</span>
            </div>
            <div className="headline-left">
              <span>ABOUT US</span>
            </div>
            <div className="headline-left">
              <span>EXERCISE</span>
            </div>
            <div className="headline-left">
              <span>PRICES</span>
            </div>

            <div className="col-3">
              <div className="contact-me">
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  <span>LOGIN</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "0", opacity: "1", color: "white" }} />
      </div></>
  );
}

export default Navbar;
