import { useState } from 'react';
import { selectedProjects } from '../data/portfolio';

const filters = ['All', 'Web & Apps', 'IoT', 'Data & AI', 'Cloud'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All'
    ? selectedProjects
    : selectedProjects.filter(project => project.group === activeFilter);

  return <section id="projects" aria-labelledby="projects-heading" className="projects-section">
    <div className="projects-inner mx-auto">
      <div className="projects-heading-row">
        <div>
          <p className="section-kicker">02 / Selected work</p>
          <h2 id="projects-heading" className="projects-title">Projects</h2>
        </div>
        <p>A selection of systems, applications, and research across the areas I’ve worked in.</p>
      </div>
      <div className="projects-filters" role="group" aria-label="Filter projects by area">
        {filters.map(filter => <button key={filter} type="button" aria-pressed={activeFilter === filter} className={activeFilter === filter ? 'is-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
      </div>
      <p className="sr-only" aria-live="polite">{visibleProjects.length} projects shown</p>
      <div className="showcase-grid">
        {visibleProjects.map(project => <article key={project.id} className="showcase-card">
          <div className="showcase-card-top"><span>{String(project.number).padStart(2, '0')}</span><span>{project.group}</span></div>
          <div className="showcase-card-content">
            <p className="showcase-area">{project.area}</p>
            <h3>{project.title}</h3>
            <p className="showcase-description">{project.description}</p>
          </div>
          <ul className="showcase-tags" aria-label="Technologies and skills">
            {project.technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        </article>)}
      </div>
    </div>
  </section>;
}
