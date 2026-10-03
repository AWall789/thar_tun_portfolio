import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { projects } from '../data/portfolio';
export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const visible = projects.filter(project => filter === 'All' || project.category === filter);
  useEffect(() => {
    if (!selected) return;
    dialog.current.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);
  function close() { dialog.current.close(); setSelected(null); }
  return <section id="portfolio" aria-labelledby="portfolio-heading" className="portfolio-section bg-[#1b1b1b] text-white">
    <div className="portfolio-banner"><h2 id="portfolio-heading" className="sr-only">Portfolio</h2></div>
    <div className="portfolio-filters mx-auto flex justify-center" aria-label="Filter projects">
      {['All', 'Coded', 'Designed'].map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`filter-button ${filter === item ? 'active' : ''}`}>{item}</button>)}
    </div>
    <p className="sr-only" aria-live="polite">{visible.length} projects shown</p>
    <div className="project-grid grid sm:grid-cols-2 lg:grid-cols-3">
      {visible.map(project => <button key={project.id} type="button" className={`project-card relative overflow-hidden text-center ${project.featured ? 'featured' : ''}`} onClick={() => setSelected(project)} aria-label={`View ${project.name} project details`}>
        <img src={project.image} alt={project.alt} loading="lazy" width="640" height="401" />
        <span className="project-overlay absolute inset-0 flex flex-col items-center justify-center p-6">
          <span className="text-xs font-medium tracking-wider">{project.category.toLowerCase()} · concept project</span>
          <span className="my-3 text-3xl font-bold tracking-[.1em]">{project.name}</span>
          <span className="max-w-xs text-xs leading-relaxed">{project.tagline}</span>
          <span className="bracket-button mt-6">View project</span>
        </span>
      </button>)}
    </div>
    <p className="py-5 text-center text-sm font-semibold">And many more to come!</p>
    <dialog ref={dialog} onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) close(); }} className="project-dialog" aria-labelledby="project-title">
      {selected && <article>
        <button autoFocus className="dialog-close" type="button" aria-label="Close project details" onClick={close}><X size={24} /></button>
        <img className="w-full" src={selected.image} alt={selected.alt} />
        <div className="p-7 sm:p-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">{selected.category} · Concept project</p>
          <h3 id="project-title" className="mb-4 text-3xl font-bold">{selected.name}</h3>
          <p className="leading-relaxed text-neutral-600">{selected.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{selected.tags.map(tag => <span key={tag} className="border border-neutral-300 px-3 py-1 text-xs">{tag}</span>)}</div>
          {selected.url && <a href={selected.url} target="_blank" rel="noreferrer" className="bracket-button mt-8 inline-block">Visit project</a>}
        </div>
      </article>}
    </dialog>
  </section>;
}
