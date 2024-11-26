import React from "react";
import "./IntroPage.css";

function IntroPage() {
  return (
    <div className="intro-container">
      {/* Left Section */}
      <div className="intro-left">
        <h1 className="intro-name">Lachlan Bligh</h1>
        <h2 className="intro-title">Full Stack Developer</h2>
        <ul className="intro-socials">
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="mailto:lachlanbligh03@gmail.com">Email</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="intro-right">
        <p>
          I’m a passionate full stack developer specializing in building modern, elegant, and high-performing applications. 
          My favorite work lies at the intersection of creativity and engineering, crafting exceptional experiences for the web.
        </p>
        <p>
          Currently, I’m exploring opportunities to contribute to exciting projects and collaborate with amazing teams worldwide. 
          In my free time, I enjoy gaming, experimenting with new tech, and solving challenging problems.
        </p>

        {/* Language Experience Section */}
        <div className="language-experience">
          <div className="language-card">
            <img src="/images/javascript.png" alt="JavaScript" />
            <h3>JavaScript</h3>
            <p>Experience building dynamic web applications, integrating APIs, and using frameworks like React and Node.js.</p>
          </div>
          <div className="language-card">
            <img src="/images/python.png" alt="Python" />
            <h3>Python</h3>
            <p>Proficient in scripting, data analysis, and creating REST APIs with frameworks like Flask and Django.</p>
          </div>
          <div className="language-card">
            <img src="/images/html.png" alt="HTML" />
            <h3>HTML</h3>
            <p>Skilled in crafting semantic and accessible web pages with modern HTML standards.</p>
          </div>
          <div className="language-card">
            <img src="/images/css.png" alt="CSS" />
            <h3>CSS</h3>
            <p>Experience in creating responsive, visually appealing designs with CSS and preprocessors like SASS.</p>
          </div>
          <div className="language-card">
            <img src="/images/sql.png" alt="SQL" />
            <h3>SQL</h3>
            <p>Experienced in designing and querying databases with PostgreSQL, MySQL, and SQLite.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
