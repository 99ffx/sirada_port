import React from "react";
import "../screen/home.css";
import myPic from "../assests/1.png";
import htmlLogo from "../assests/html.png";
import cssLogo from "../assests/css.png";
import jsLogo from "../assests/js.png";
import tsLogo from "../assests/ts.png";
import figma from "../assests/figma.png";
import angular from "../assests/angular.png";
import git from "../assests/git.png";
import github from "../assests/github.png";
import materialUI from "../assests/matUI.png";
import nodeJs from "../assests/node.png";
import reactJs from "../assests/react.png";
import scss from "../assests/sass.png";
import postman from "../assests/postman.png";
function Home() {
  return (
    <div>
      {/* <div className="circle">
        <svg height="1072" width="1072">
          <circle
            cx="10"
            cy="45%"
            r="50%"
            fill="none"
            stroke="#899CA4"
            style={{
              mixBlendMode: "soft-light",
              strokeWidth: "40px",
              opacity: '10%'
            }}
          />
        </svg>
        </div> */}
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
        <a href="./Sirada_CV.pdf" download>
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
          <img src={myPic} width="284px" height="383px" alt="" />
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
              <br />
            </span>
            <p
              style={{
                fontSize: "36px",
                lineHeight: "112%",
                fontWeight: "400",
              }}
            >
              v
            </p>
            <span
              style={{
                fontSize: "18px",
              }}
            >
              scroll down <br />
              to
              <br />
              know me more !
            </span>
          </div>
        </div>
      </div>
      <div className="aboutMe container">
      {/* <div className="circle2">
        <svg height="1072" width="1072">
          <circle
            cx="10%"
            cy="610px"
            r="40%"
            fill="none"
            stroke="#899CA4"
            style={{
              mixBlendMode: "soft-light",
              strokeWidth: "40px",
              opacity: '10%',
      
            }}
          />
        </svg>
        </div> */}
        <div className="aboutMe-wrapper">
          <div className="aboutMe-headline1">ABOUT</div>
          <div className="aboutMe-headline2">ME</div>
        </div>
        <div className="aboutme-context">
          <span style={{ color: "#FFF", fontSize: "30px", padding: "27px" }}>
            Self-Motivated
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="8" fill="#29A19C" />
          </svg>
          <span style={{ color: "#96f18e", fontSize: "30px", padding: "27px" }}>
            Skilled
            <span className="ms-3" style={{ color: "#FFF " }}>
              Collaborator
            </span>
          </span>
          <br />
          <span style={{ color: "#96f18e", fontSize: "30px", padding: "27px" }}>
            Rapid
            <span className="ms-3" style={{ color: "#FFF " }}>
              and
            </span>{" "}
            Adaptive
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="8" fill="#29A19C" />
          </svg>
          <span style={{ color: "#FFF", fontSize: "30px", padding: "27px" }}>
            Possess
            <span className="ms-3" style={{ color: "#96f18e " }}>
              Positive
            </span>{" "}
            Attitude
          </span>
          <br />
          <span style={{ color: "#FFF", fontSize: "30px", padding: "27px" }}>
            Eager to
            <span className="ms-3" style={{ color: "#96f18e " }}>
              Learn
            </span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="8" fill="#29A19C" />
          </svg>
          <span style={{ color: "#FFF", fontSize: "30px", padding: "27px" }}>
            Solution
            <span className="ms-3" style={{ color: "#96f18e " }}>
              Oriented Professional
            </span>
          </span>
          <br />
          <span style={{ color: "#FFF", fontSize: "30px", padding: "27px" }}>
            Effective
            <span className="ms-3" style={{ color: "#96f18e " }}>
              Cross-Functional
            </span>{" "}
            Communicator
          </span>
        </div>
      </div>
      <div className="techstack container">
        <div className="techstack-headline">
          <span>TECH</span>
          <span style={{ color: "#29A19C" }}>/</span>
          <span>STACK</span>
        </div>
        <div className="tech-box">
          <button
            class="btn"
            style={{ color: "#96F18E", fontSize: "30px", padding: "19px 45px" }}
          >
            HTML
          </button>
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            CSS
          </button>
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            SCSS
          </button>
          <button
            class="btn"
            style={{ color: "#96F18E", fontSize: "30px", padding: "19px 45px" }}
          >
            Node.js
          </button>
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            Figma
          </button>
          <br />
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            Javascript
          </button>
          <button
            class="btn"
            style={{ color: "#29A19C", fontSize: "30px", padding: "19px 45px" }}
          >
            Typescript
          </button>
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            Ant Design
          </button>
          <br />
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            Material UI
          </button>
          <button
            class="btn"
            style={{ color: "#96F18E", fontSize: "30px", padding: "19px 45px" }}
          >
            State Management
          </button>
          <br />
          <button
            class="btn"
            style={{ color: "#29A19C", fontSize: "30px", padding: "19px 45px" }}
          >
            Bootstrap
          </button>
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            Angular
          </button>
          <br />
          <button
            class="btn"
            style={{ color: "#FFF", fontSize: "30px", padding: "19px 45px" }}
          >
            React Js
          </button>
        </div>
        <div className="tech-logo">
          <img src={htmlLogo} alt="" width="69px" height="69px" />
          <img src={cssLogo} alt="css logo" width="69px" height="69px" />
          <img src={jsLogo} alt="" width="69px" height="69px" />
          <img src={tsLogo} alt="" width="69px" height="69px" />
          <img src={scss} alt="" width="69px" height="69px" />
          <img src={angular} alt="" width="69px" height="69px" />
          <img src={reactJs} alt="" width="69px" height="69px" />
          <img src={nodeJs} alt="" width="69px" height="69px" />
          <img src={postman} alt="" width="69px" height="69px" />
          <img src={git} alt="" width="69px" height="69px" />
          <img src={github} alt="" width="69px" height="69px" />
          <img src={figma} alt="" width="66px" height="66px" />
          <img src={materialUI} alt="" width="69px" height="69px" />
          <i
            class="bi bi-bootstrap-fill"
            style={{ fontSize: "69px", color: "#6f42c1" }}
          ></i>
        </div>
      </div>
      <div className="connect container">
        <div className="headline-left">
          <div className="connect-headline">
            <span style={{ color: "#FFF" }}>Let'</span>
            <span style={{ color: "#29A19C" }}>s</span>
            <br />
            <div className="connect-sub" style={{ marginTop: "10px" }}>
              <span
                style={{
                  color: "#FFF",
                  fontSize: "120px",
                  letterSpacing: "-11.2px",
                }}
              >
                Co
              </span>
              <span
                style={{
                  color: "#FFF",
                  fontSize: "120px",
                  letterSpacing: "-11.2px",
                }}
              >
                nn
              </span>
              <span
                style={{
                  color: "#96F18E",
                  fontSize: "120px",
                  letterSpacing: "-11.2px",
                }}
              >
                ect
              </span>
            </div>
          </div>
          <span style={{ fontWeight: "400", marginTop: "27px" }}>
            Don’t be a stranger !
          </span>
          <br />
          <div className="getInTouch">
            <a href="./Sirada-CV-Euro.pdf" download>
              <button type="button" className="btn-download">
                <div
                  className="btn-context"
                  style={{
                    padding: "10px 13px",
                    display: "grid",
                    gridAutoFlow: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="download me-3"
                    style={{
                      color: "#5C6E75",
                      fontWeight: "500",
                      fontSize: "25px",
                    }}
                  >
                    Download
                  </span>
                  <span
                    className="cv"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "25px",
                    }}
                  >
                    CV
                  </span>
                  <i
                    className="bi bi-box-arrow-up-right"
                    style={{
                      marginLeft: "18px",
                      color: "#5C6E75",
                    }}
                  ></i>
                </div>
              </button>
            </a>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/sirada-kittipaisarnkul-068854224/"
                target="blank"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.4em", color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
        <form
          action="mailto:sirada.2635@gmail.com"
          method="GET"
          encType="application/x-www-form-urlencoded"
        >
          <div className="email-right" style={{ width: "380px" }}>
            <div class="input-group ">
              <input
                name="subject"
                type="text"
                class="form-control"
                placeholder="What’s the topic ?"
                onFocus={(e) => (e.target.placeholder = " ")}
                onBlur={(e) => (e.target.placeholder = "What’s the topic ?")}
              />
            </div>

            <div class="input-group " style={{ marginTop: "40px" }}>
              <input
                type="email"
                class="form-control"
                placeholder="What’s your Email ?"
                onFocus={(e) => (e.target.placeholder = " ")}
                onBlur={(e) => (e.target.placeholder = "What’s the Email ?")}
              />
            </div>

            <div class="input-group" style={{ marginTop: "40px" }}>
              <textarea
                name="body"
                className="form-control"
                placeholder="Type your message here ..."
                onFocus={(e) => (e.target.placeholder = " ")}
                onBlur={(e) =>
                  (e.target.placeholder = "Type your message here ...")
                }
                style={{ height: "200px", width: "180px" }}
              ></textarea>
            </div>
            <input className="btn-send" type="submit" value="Send"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
