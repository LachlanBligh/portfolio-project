import React from 'react';
import './SalesWebApp.css';

function SalesWebApp() {
  return (
    <section className="sales-web-app">
      <h1></h1>
      <div className="content-container">
        <div className="highlights-section">
          <div className="key-highlights">
            <h2>Features</h2>
            <ul>
              <li>API Integration with third-party services</li>
              <li>Real-time sales quote generation with streamlined user workflows</li>
              <li>Dynamic product matching based on inventory and historical sales data</li>
              <li>Custom error logging for better debugging and troubleshooting</li>
              <li>Implementation of performance optimization techniques for high-volume data handling</li>
            </ul>
          </div>

          <div className="key-highlights">
            <h2>Components Used</h2>
            <ul>
              <li>Node.js and Express.js for backend logic and API development</li>
              <li>Google Cloud Platform for deployment and storage solutions</li>
              <li>Firestore for database management</li>
              <li>REST APIs for seamless integration with external tools</li>
              <li>React for front-end design and interactivity</li>
            </ul>
          </div>
        </div>

        <div className="text-section">
          <p>
            The Sales Web App is a powerful solution tailored for modern sales teams. Designed with scalability
            in mind, this application leverages Node.js and Google Cloud to create a robust platform that simplifies
            sales operations. Key features include real-time sales quote generation, dynamic product matching,
            and seamless integration with third-party tools.
          </p>
          <p>
            One of the highlights of this project was the implementation of custom error logging,
            which provided deeper insights into application performance and improved debugging efficiency.
            I also designed a data processing pipeline to handle large datasets efficiently, enabling the app
            to process thousands of sales quotes in seconds. This was instrumental in optimizing team workflows
            and reducing turnaround time for customers.
          </p>
        </div>

      </div>
    </section>
  );
}

export default SalesWebApp;
