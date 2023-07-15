import React from "react";
import "../screen/home.css";
import '../assests/sirada-pic.png'

function home() {
  return (
    <div>
      <div className="headline container">
        <span style={{ color: "#5C6E75" }}>S</span>
        <span style={{ color: "#5C6E75" }}>I</span>
        <span style={{ color: "#29A19C" }}>R</span>
        <span style={{ color: "#5C6E75" }}>A</span>
        <span style={{ color: "#29A19C" }}>D</span>
        <span style={{ color: "#5C6E75" }}>A</span>
      </div>
      <div className="headline-sub container">
        <span className="portfolio">PORTFOLIO</span>
        <span className="ux">UX/UI and Web Development</span>
        <a href='../assests/Sirada-CV-Euro.pdf' download > 
           <button type="button" className="btn">
          <div className="btn-context"
            style={{ padding: "20px", display: "grid", gridAutoFlow: "column" }}
          >
            <span
              className="download me-3"
              style={{ color: "#5C6E75", fontWeight: "500", fontSize: "36px" }}
            >
              Download
            </span>
            <span className="cv"
              style={{ color: "black", fontWeight: "600", fontSize: "36px" }}
            >
              CV
            </span>
            <i
              className="bi bi-box-arrow-up-right"
              style={{ fontSize: "2.3em", marginLeft: "18px", color:"#5C6E75" }}
            ></i>
          </div>
        </button>
        </a>
       
      </div>
      <hr style={{ marginTop: "70px", opacity: "1", color: "white" }} />
      <div className="breif container" style={{marginTop:'51px'}}>
        <div className="brief-headline">
          <span className="hello">HEY, I’M </span>
          <span className="sirada">SIRADA</span>
        </div>
        <img src="../assests/sirada-pic.png" width= '362px'height='488px' alt="" />
     
      </div>
    </div>
  );
}

export default home;
