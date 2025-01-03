import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

import UFCImage from '../images/ufc.jpg';
import Salesapp from '../images/salesapp.jpg';

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'UFC Elo Engine',
      category: 'Personal',
      image: UFCImage,
      link: '/ufc-elo-engine',
      blurb: 'A comprehensive Elo rating engine for UFC fighters.',
      details: ['Web scraping', 'Data Processing', 'Data visualization'],
    },
    {
      id: 2,
      title: 'Sales Web App',
      category: 'Work',
      image: Salesapp,
      link: '/sales-web-app',
      blurb: 'Node.js app streamlining sales with APIs, teamwork, and management.',
      details: ['API Integration with third-party services', 'Development of essential sales tools', 'Team collaboration for large-scale projects'],
    },
  
  ];

  const filters = ['Work', 'Personal'];

  return (
    <section className="projects-page">
      <div className="projects-filters">
        <button
          key="All"
          className={`filter-button ${selectedFilter === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedFilter('All')}
        >
          All
        </button>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {projects
          .filter((project) => selectedFilter === 'All' || project.category === selectedFilter)
          .map((project) => (
            <div key={project.id} className="project-card">
              <Link to={project.link} className="project-link">
                <div className="project-inner">
                  <div className="project-front">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <p className="project-title">{project.title}</p>
                  </div>
                  <div className="project-back">
                    <p>{project.blurb}</p>
                    <ul>
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProjectsPage;