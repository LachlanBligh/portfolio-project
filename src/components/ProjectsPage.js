// src/components/ProjectsPage.js
import React, { useState } from 'react';
import './ProjectsPage.css';

import GKMCImage from '../images/GKMC.png';
import HCEImage from '../images/HCE.png';
import TheBalconyImage from '../images/TheBalcony.png';
import TheRideImage from '../images/TheRide.png';
import AM from '../images/AM.png';

function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    { id: 1, title: 'GKMC', category: 'Music', image: GKMCImage },
    { id: 2, title: 'HCE', category: 'Music', image: HCEImage },
    { id: 3, title: 'The Balcony', category: 'Other', image: TheBalconyImage },
    { id: 4, title: 'The Ride', category: 'Other', image: TheRideImage },
    { id: 5, title: 'AM', category: 'Other', image: AM }, // Add more projects here
  ];

  const filters = ['All', 'Music', 'Other'];

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
              <img src={project.image} alt={project.title} className="project-image" />
              <p className="project-title">{project.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
