// src/components/ProjectsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

import UFCImage from '../images/ufc.jpg';
import HCEImage from '../images/HCE.png';
import TheBalconyImage from '../images/TheBalcony.png';
import TheRideImage from '../images/TheRide.png';

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    { id: 1, title: 'UFC Elo Engine', category: 'Personal', image: UFCImage, link: '/ufc-elo-engine' },
    { id: 2, title: 'HCE', category: 'Music', image: HCEImage },
    { id: 3, title: 'The Balcony', category: 'Music', image: TheBalconyImage },
    { id: 4, title: 'The Ride', category: 'Music', image: TheRideImage },
  ];

  const filters = ['Work', 'Personal'];

  return (
    <section className="projects-page">
      <div className="projects-filters">
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
              {project.link ? (
                <Link to={project.link}>
                  <img src={project.image} alt={project.title} className="project-image" />
                  <p className="project-title">{project.title}</p>
                </Link>
              ) : (
                <>
                  <img src={project.image} alt={project.title} className="project-image" />
                  <p className="project-title">{project.title}</p>
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
