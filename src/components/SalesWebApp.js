import React from 'react';
import './SalesWebApp.css';

function SalesWebApp() {
  return (
    <section className="sales-web-app">
      <h1>Sales Web App</h1>
      <div className="content-container">
        <div className="highlights-section">
          <div className="key-highlights">
            <h2>Features</h2>
            <ul>
              <li>API Integration with third-party services</li>
              <li>Development of essential sales tools</li>
              <li>Team collaboration for large-scale projects</li>
            </ul>
          </div>

          <div className="key-highlights">
            <h2>Components Used</h2>
            <ul>
              <li>Node.js</li>
              <li>Google Cloud Platform</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

        <div className="text-section">
          <p>
            The Sales Web App, is a Node.js and Google Cloud-based application
            designed to streamline sales processes with critical tools. This project was a significant
            learning experience, teaching valuable skills in API integration, teamwork, and large-scale project management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SalesWebApp;
