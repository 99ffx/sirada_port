import React from "react";
import "../screen/home.css";

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
        <a href="../assests/Sirada-CV-Euro.pdf" download>
          <button type="button" className="btn">
            <div
              className="btn-context"
              style={{
                padding: "20px",
                display: "grid",
                gridAutoFlow: "column",
              }}
            >
              <span
                className="download me-3"
                style={{
                  color: "#5C6E75",
                  fontWeight: "500",
                  fontSize: "36px",
                }}
              >
                Download
              </span>
              <span
                className="cv"
                style={{ color: "black", fontWeight: "600", fontSize: "36px" }}
              >
                CV
              </span>
              <i
                className="bi bi-box-arrow-up-right"
                style={{
                  fontSize: "2.3em",
                  marginLeft: "18px",
                  color: "#5C6E75",
                }}
              ></i>
            </div>
          </button>
        </a>
      </div>
      <hr style={{ marginTop: "70px", opacity: "1", color: "white" }} />
      <div className="breif container" style={{ marginTop: "51px" }}>
        <div className="brief-headline">
          <span className="hello">HEY, I’M </span>
          <span className="sirada">SIRADA</span>
        </div>

        <div className="breif-context container">
          <img
            href="../assests/IMG_5205.JPG"
            width="362px"
            height="488px"
            alt=""
          />
          <div className="explaination">
            I am a{" "}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Front End Developer
            </span>{" "}
            from Thailand <br /> With the industry experiences. I have passion{" "}
            <br /> in Web Application {""}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Programming
            </span>{" "}
            and{" "}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Designing
            </span>
            .<br /> Moreover I’m keen on learning about Internet of Thing.
            <br />
            <span
              style={{
                fontSize: "36px",
                lineHeight: "112%",
                fontWeight: "800",
              }}
            >
              .<br />
              .
              <br />.
              <br /></span>
              <p  style={{
                fontSize: "36px",
                lineHeight: "112%",
                fontWeight: "400",
              }}>v</p>
            
            <span style={{
                fontSize: "26px",
              }}>
              scroll down <br />
              to
              <br />
              know me more !
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
