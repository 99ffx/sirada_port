import { React, useState } from "react";
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
import TypeIt from "typeit-react";
import { useMediaQuery } from "react-responsive";
import emailjs from "emailjs-com";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isIg = window.navigator.userAgent.includes("Instagram");
  
  

  const confidential = () => {
    return alert("Unfortunately you have no access, please contact me directly for more details.");
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eygtxuq",
        "template_izcgpd6",
        e.target,
        "VOID9sQGOv3Z2OEfz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Done :)");
        },
        (error) => {
          console.log(error.text);
          alert("There's error going on :(. Please try again later");
        }
      );
  }
  return (
    <div>
      <div className="headline-sub container">
        <div className="headline container">
          <span style={{ color: "#5C6E75" }}>S</span>
          <span style={{ color: "#5C6E75" }}>i</span>
          <span style={{ color: "#29A19C" }}>R</span>
          <span style={{ color: "#5C6E75" }}>A</span>
          <span style={{ color: "#29A19C" }}>D</span>
          <span style={{ color: "#5C6E75" }}>A</span>
        </div>
        <span className="portfolio">PORTFOLiO</span>
        <span className="ux">Medical Imaging and Web Development</span>
        <div>
          {isIg ? (
            <button type="button" className="btn" onClick={confidential}>
              <div className="btn-context">
                <span className="download me-3">Download</span>
                <span className="cv">CV</span>
                <i className="bi bi-box-arrow-up-right"></i>
              </div>
            </button>
          ) : (
            <a href="/Sirada_CV.pdf" download>
              <button type="button" className="btn">
                <div className="btn-context">
                  <span className="download me-3">Download</span>
                  <span className="cv">CV</span>
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </button>
            </a>
          )}
        </div>
      </div>
      <hr style={{ marginTop: "70px", opacity: "1", color: "white" }} />
      <div className="breif container" style={{ marginTop: "51px" }}>
        <div className="breif-headline">
          <span className="hello">HEY, I’M </span>
          <span className="sirada">SiRADA</span>
        </div>

        <div className="breif-context container">
         <div className="explaination">
            I am a{" "}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Front End Developer and AI enthusiast{" "}
            </span>
            with experience in building web applications using Angular, React, and modern frameworks. My industry background includes working in Agile corporate environments, collaborating with cross-functional teams, and delivering intuitive, user-focused solutions. I enjoy combining creativity, design, and technology to develop scalable applications that enhance user experience and efficiency.
          </div> 
          <img src={myPic} alt="" />
          <div className="explaination">
            Alongside this, I hold a Master’s in 
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
             {" "} Medical Imaging and Applications{" "}
            </span>
            
             (Erasmus Mundus, Europe), where I specialized in applying AI and deep learning to medical image analysis. Through international study and research, I gained experience working in multicultural teams, strengthened my communication skills, and learned to solve problems across disciplines. I am proactive, detail-oriented, and passionate about continuous learning, ensuring I stay at the forefront of both front-end innovation and AI development.
            </div>
        </div>

        <div className="motto">
          <i className="bi1 bi-asterisk"></i>
          <i className="bi2 bi-asterisk"></i>
          <TypeIt
            as={"h3"}
            options={{
              strings: [
                ". . . I am a Dedicated and Adaptable Team Player",
                "who is always eager to take on new challenges ",
                "and embrace continuous growth. . .",
              ],
              speed: 70,
              loop: true,
              waitUntilVisible: true,
            }}
          />

          <p id="mottoTypeIt"></p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr style={{ marginTop: "70px", opacity: "1", color: "white" }} />

      <div className="aboutMe container">
        <div className="aboutMe-wrapper">
          <div className="aboutMe-headline1">ABOUT</div>
          <div className="aboutMe-headline2">ME</div>
        </div>

        <div className="aboutme-context">
          <span className="item1">
            <i className="bi bi-person-heart" style={{ color: "#96f18e" }}></i>
            <br />
            Self-Motivated
          </span>
          <span className="item2">
            <i
              className="bi bi-arrow-left-right"
              style={{ color: "#96f18e" }}
            ></i>
            <br />
            Rapid and Adaptive
          </span>
          <span className="item3">
            <i
              className="bi bi-plus-circle-fill"
              style={{ color: "#96f18e" }}
            ></i>
            <br />
            Possess Positive Attitude
          </span>
          <span className="item4">
            <i className="bi bi-book-fill" style={{ color: "#96f18e" }}></i>
            <br />
            Eager to Learn
          </span>
          <span className="item5">
            <i className="bi bi-award-fill" style={{ color: "#96f18e" }}></i>
            <br />
            Solution Oriented Professional
          </span>
          <span className="item6">
            <i
              className="bi bi-chat-square-quote-fill"
              style={{ color: "#96f18e" }}
            ></i>
            <br />
            Effective Cross Functional Communicator
          </span>
        </div>
      </div>
      <div className="techstack container">
        <div className="techstack-headline">
          <span>TECH</span>
          <span style={{ color: "#29A19C" }}>/</span>
          <span>STACK</span>
        </div>
        {isMobile && (
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
              className="bi bi-bootstrap-fill"
              style={{ fontSize: "69px", color: "#6f42c1" }}
            ></i>
          </div>
        )}
        {!isMobile && (
          <div className="tech-box">
            <button className="btn">HTML</button>
            <button className="btn">CSS</button>
            <button className="btn">SCSS</button>
            <button className="btn">Node.js</button>
            <button className="btn">Figma</button>
            <button className="btn">Javascript</button>
            <button className="btn">Typescript</button>
            <button className="btn">Ant Design</button>
            <button className="btn">Material UI</button>
            <button className="btn">State Management</button>
            <button className="btn">Bootstrap</button>
            <button className="btn">Angular</button>
            <button className="btn">React Js</button>
          </div>
        )}
        {!isMobile && (
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
          </div>
        )}
      </div>

      {/* <div className="projects container">
        <div className="projects-headline">
        <span>WORKS</span>
          <span style={{ color: "#29A19C" }}>/</span>
          <span>PROJECTS</span>
        </div>

      </div> */}

      <div className="connect container">
        <div className="headline-left">
          <div className="connect-headline">
            <span style={{ color: "#FFF" }}>Let'</span>
            <span style={{ color: "#96f18e" }}>s</span>
            <br />
            <div className="connect-sub" style={{  }}>
              <span style={{ color: "#FFF" }}>Co</span>
              <span style={{ color: "#FFF" }}>n</span>
              <span>nect</span>
            </div>
          </div>
          <span style={{ fontWeight: "400", color:"#27323a" }}>
            Don’t be a stranger !
          </span>
          <br />
          <div className="getInTouch">
            {isIg ? (
              <button type="button" className="btn-download-connect" onClick={confidential}>
                <div className="btn-context-connect">
                  <span className="download me-3">Download</span>
                  <span className="cv">CV</span>
                  <i
                    className="bi bi-box-arrow-up-right"
                    style={{
                      marginLeft: "18px",
                      color: "#5C6E75",
                    }}
                  ></i>
                </div>
              </button>
            ) : (
              <a href="./Sirada_CV.pdf" download>
                <button type="button" className="btn-download-connect">
                  <div className="btn-context-connect">
                    <span className="download me-3">Download</span>
                    <span className="cv">CV</span>
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
            )}
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
        <form onSubmit={sendEmail} id="myForm">
          <div className="email-right">
            <div className="input-group ">
              <input
                name="subject"
                type="text"
                className="form-control"
                placeholder="What’s the topic ?"
                onFocus={(e) => (e.target.placeholder = " ")}
                onBlur={(e) => (e.target.placeholder = "What’s the topic ?")}
              />
            </div>

            <div className="input-group ">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="What’s your Email ?"
                onFocus={(e) => (e.target.placeholder = " ")}
                onBlur={(e) => (e.target.placeholder = "What’s the Email ?")}
              />
            </div>

            <div className="input-group">
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
