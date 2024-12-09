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
      title: 'HCE',
      category: 'Music',
      image: HCEImage,
      blurb: 'A deep dive into the concept album HCE, exploring its themes and soundscapes.',
      details: ['Music analysis', 'Creative writing', 'Sound engineering'],
    },
    {
      id: 3,
      title: 'The Balcony',
      category: 'Music',
      image: TheBalconyImage,
      blurb: 'An analysis of the production techniques used in The Balcony.',
      details: ['Production techniques', 'Audio mixing', 'Critical analysis'],
    },
    {
      id: 4,
      title: 'The Ride',
      category: 'Music',
      image: TheRideImage,
      blurb: 'A review of The Ride album, focusing on its lyrical content and musical direction.',
      details: ['Lyrical analysis', 'Genre study', 'Musical direction'],
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
              <Link to={project.link}>
                <div className="project-inner">
                  <div className="project-front">
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
