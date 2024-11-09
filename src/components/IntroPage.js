// src/components/IntroPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './IntroPage.css';

function IntroPage() {
  return (
    <section className="intro-page" id="home">
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm Lachlan Bligh, a passionate Full Stack Developer.</p>
      <Link to="/projects" className="intro-page-link">
        <button className="cta-button">See My Projects</button>
      </Link>
    </section>
  );
}

export default IntroPage;
