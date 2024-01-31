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
import TypeIt from "typeit-react";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
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
        <a href="./Sirada_CV.pdf" download>
          <button type="button" className="btn">
            <div className="btn-context">
              <span className="download me-3">Download</span>
              <span className="cv">CV</span>
              <i className="bi bi-box-arrow-up-right"></i>
            </div>
          </button>
        </a>
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
              Front End Developer
            </span>{" "}
            from Thailand With the industry experiences. I have passion in Web
            Application {""}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Programming
            </span>{" "}
            and{" "}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Designing
            </span>
            . Currently on a thrilling journey pursuing a{" "}
            <span style={{ fontStyle: "italic", color: "#96f18e" }}>
              Master's Degree in Medical Imaging and Applications,
            </span>{" "}
            I'm driven by the vision of leveraging cutting-edge technology to
            elevate the standards of Computer-Aided Diagnosis.
          </div>
          <img src={myPic} alt="" />
          <div className="explaination">
            As a proactive and initiative-driven individual, I thrive on
            initiating and completing tasks ahead of schedule. My experience
            working and studying in multicultural settings has equipped me with
            strong communication skills and the ability resolve conflicts
            seamlessly. I bring a commitment to lifelong learning, ensuring I
            stay at the forefront of advancements in my field.
          </div>
        </div>

        <div className="motto">
          <i class="bi1 bi-asterisk"></i>
          <i class="bi2 bi-asterisk"></i>
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
          <span className="item1">
            <i class="bi bi-person-heart" style={{ color: "#96f18e" }}></i>
            <br />
            Self-Motivated
          </span>
          <span className="item2">
            <i class="bi bi-arrow-left-right" style={{ color: "#96f18e" }}></i>
            <br />
            Rapid and Adaptive
          </span>
          <span className="item3">
            <i class="bi bi-plus-circle-fill" style={{ color: "#96f18e" }}></i>
            <br />
            Possess Positive Attitude
          </span>
          <span className="item4">
            <i class="bi bi-book-fill" style={{ color: "#96f18e" }}></i>
            <br />
            Eager to Learn
          </span>
          <span className="item5">
            <i class="bi bi-award-fill" style={{ color: "#96f18e" }}></i>
            <br />
            Solution Oriented Professional
          </span>
          <span className="item6">
            <i
              class="bi bi-chat-square-quote-fill"
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
              class="bi bi-bootstrap-fill"
              style={{ fontSize: "69px", color: "#6f42c1" }}
            ></i>
          </div>
        )}
        {!isMobile && (
          <div className="tech-box">
            <button class="btn">HTML</button>
            <button class="btn">CSS</button>
            <button class="btn">SCSS</button>
            <button class="btn">Node.js</button>
            <button class="btn">Figma</button>
            <button class="btn">Javascript</button>
            <button class="btn">Typescript</button>
            <button class="btn">Ant Design</button>
            <button class="btn">Material UI</button>
            <button class="btn">State Management</button>
            <button class="btn">Bootstrap</button>
            <button class="btn">Angular</button>
            <button class="btn">React Js</button>
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
      <div className="connect container">
        <div className="headline-left">
          <div className="connect-headline">
            <span style={{ color: "#FFF" }}>Let'</span>
            <span style={{ color: "#29A19C" }}>s</span>
            <br />
            <div className="connect-sub" style={{ marginTop: "10px" }}>
              <span style={{ color: "#FFF" }}>Co</span>
              <span style={{ color: "#FFF" }}>n</span>
              <span>nect</span>
            </div>
          </div>
          <span style={{ fontWeight: "400", marginTop: "27px" }}>
            Don’t be a stranger !
          </span>
          <br />
          <div className="getInTouch">
            <a href="./Sirada_CV.pdf" download>
              <button type="button" className="btn-download">
                <div className="btn-context">
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
          <div className="email-right">
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
