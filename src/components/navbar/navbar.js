import "./navbar.css";
import React from "react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  // const isDestopOrMobile = useMediaQuery({ query: '(min-width: 1224px)'})
  // const isBigScreen = useMediaQuery({query: '(min-width: 1824px)'})
  // const isTableOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });

  // const isTabletDevice = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1024px)",
  // });

  // const isDesktop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 1201px )",
  // });

  return (
    <div
      id="navbar"
      className=" sticky-top"
      style={{ backgroundColor: "#27323A" }}
    >
      <div className="container mt-20 sticky-top">
        <div className="row">
          {isMobileDevice ? (
            <div className="headline-center">
              <span>s</span>
              <span style={{ color: "#96F18E", fontStyle: "italic" }}>i</span>
              <span>rada</span>
            </div>
          ) : (
            <div className="col-9">
              <div className="headline-left">
                <span>s</span>
                <span style={{ color: "#96F18E", fontStyle: "italic" }}>i</span>
                <span>rada</span>
              </div>
            </div>
          )}

          <div className="col-3">
            {!isMobileDevice && (
              <div className="contact-me">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    (window.location = "mailto:sirada.2635@gmail.com")
                  }
                >
                  Contact Me
                  <i className="bi bi-envelope"></i>
                </button>
                <button
                  type="button"
                  className="btn"
                  href="https://www.linkedin.com/in/sirada-kittipaisarnkul-068854224/"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "1.8em", color: "white" }}
                  ></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "0", opacity: "1", color: "white", marginBottom: "0" }} />
    </div>
  );
}

export default Navbar;