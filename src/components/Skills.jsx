import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolio';
export default function Skills() {
  return <section id="skills" aria-labelledby="skills-heading" className="skills-section section-wrap text-center">
    <SectionHeading id="skills-heading">Skills</SectionHeading>
    <div className="skills-content mx-auto text-left">
      {skillGroups.map(group => <div className="skill-group" key={group.title}>
        <h3 className="mb-12 text-xl font-bold uppercase tracking-[.18em]">{group.title}:</h3>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
          {group.skills.map(skill => <li key={skill.name} className="skill-item flex flex-col items-center text-center">
            {skill.flag ? <span className="skill-flag flex items-center justify-center" role="img" aria-label={skill.name}>{skill.flag}</span> : <img src={`/icons/${skill.icon}.svg`} width="72" height="72" alt="" loading="lazy" />}
            <span className="mt-5 text-sm font-medium uppercase tracking-[.12em]">{skill.name}</span>
            {skill.level && <span className="mt-1 text-xs tracking-widest text-neutral-600">{skill.level}</span>}
          </li>)}
        </ul>
      </div>)}
    </div>
  </section>;
}
