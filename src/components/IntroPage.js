import React from "react";
import "./IntroPage.css";
import JSIcon from "../images/JS.png";
import PyIcon from "../images/py.png";
import SQLIcon from "../images/SQL.png";
import GitHubIcon from "../images/git.png";
import LinkedInIcon from "../images/link.png";
import backgroundImage from "../images/background.jpg"; // Import the image

function IntroPage() {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
  };

  return (
    <div style={pageStyle}>
      <div className="intro-container">
        {/* Left Section */}
        <div className="intro-left">
          <h1 className="intro-name">Lachlan Bligh</h1>
          <h2 className="intro-title">Full Stack Developer</h2>

          {/* Resume Button */}
          <div className="resume-card">
            <h3>Resume</h3>
            <p>Click below to download my resume:</p>
            <a href="/resume.docx" download className="resume-button">
              Download Resume
            </a>
          </div>


        </div>

        {/* Right Section */}
        <div className="intro-right">
          <p>
            I’m a passionate full stack developer specializing in building modern, elegant, and high-performing applications.
            My favourite work lies at the intersection of creativity and engineering, crafting exceptional experiences for the web.
          </p>
          <p>
            Currently, I’m exploring opportunities to contribute to exciting projects and collaborate with amazing teams worldwide.
            In my free time, I enjoy gaming, experimenting with new tech, and solving challenging problems.
          </p>

          {/* Language Experience Section */}
          <div className="language-experience">
            <div className="language-card">
              <img src={JSIcon} alt="JavaScript" />
              <h3>JavaScript</h3>
              <p>
                Experience building dynamic web applications, integrating APIs, and using frameworks like React and Node.js.
              </p>
            </div>
            <div className="language-card">
              <img src={PyIcon} alt="Python" />
              <h3>Python</h3>
              <p>
                Proficient in scripting, data analysis, and creating REST APIs with frameworks like Flask and Django.
              </p>
            </div>
            <div className="language-card">
              <img src={SQLIcon} alt="SQL" />
              <h3>SQL</h3>
              <p>
                Experienced in designing and querying databases with PostgreSQL, MySQL, and SQLite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
