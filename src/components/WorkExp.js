// src/components/WorkExp.js
import React from 'react';
import './WorkExp.css';

function WorkExp() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Sigrist Design',
      dates: 'April 2023 – Present',
      responsibilities: [
        'Developed and tested web applications using React and Node.js.',
        'Collaborated with the design team to create responsive UI components.',
        'Debugged and resolved software issues.'
      ],
    },
    {
      title: 'Customer Service Assistant',
      company: 'Various Retail Roles',
      dates: '2018 – 2022',
      responsibilities: [
        'Provided excellent customer service and resolved customer queries.',
        'Managed inventory and restocked items as needed.',
        'Handled transactions and maintained accurate cash registers.'
      ],
    },
  ];

  return (
    <div className="WorkExp">
      <h1 className="WorkExp-title">Work Experience</h1>
      <div className="WorkExp-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`WorkExp-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="WorkExp-timeline-icon" />
            <div className="WorkExp-timeline-content">
              <h2>{exp.title}</h2>
              <p>{exp.company}</p>
              <p>{exp.dates}</p>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExp;