import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import UFCEloEngine from './components/UFCEloEngine';
import SalesWebApp from './components/SalesWebApp';

function App() {
  return (
    <Router>
      {/* No basename needed */}
      <div className="App">
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
