import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UFCEloEngine from './components/UFCEloEngine';
import SalesWebApp from './components/SalesWebApp';
import Logo from './images/logo.png'; // Import the logo

function App() {
  const logoContainerStyle = {
    position: 'fixed',
    height: '20%', // Adjust the height to 20% of the viewport height
    margin: '1%',
  };

  const logoImageStyle = {
    height: '40%', // Adjust the height to 20% of the viewport height
    width: 'auto', // Maintain the aspect ratio
  };

  return (
    <Router>
      <div className="App">
        {/* Globally fixed logo */}
        <div style={logoContainerStyle}>
          <img src={Logo} alt="Logo" style={logoImageStyle} />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ufc-elo-engine" element={<UFCEloEngine />} />
          <Route path="/sales-web-app" element={<SalesWebApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
