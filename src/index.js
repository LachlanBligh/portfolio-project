import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage'; // Updated path for IntroPage

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define a default route to the IntroPage */}
        <Route path="/" element={<IntroPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
