import { PencilRuler, CodeXml, RefreshCw } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Divider from './Divider';
import { profile } from '../data/portfolio';
const services = [
  { title: 'Design', icon: PencilRuler, text: 'I start by turning ideas into simple, practical interfaces. I focus on clean layouts, intuitive navigation, and experiences that feel natural to use.' },
  { title: 'Development', icon: CodeXml, text: 'This is where ideas become real. I build responsive full-stack applications, connecting polished frontends with reliable backend systems, APIs, and databases.' },
  { title: 'Improvement', icon: RefreshCw, text: 'I’m always looking for ways to make things better — whether that means improving performance, fixing problems, adding new features, or learning a better way to build.' },
];
export default function About() {
  return <section id="about" aria-labelledby="about-heading" className="about-section section-wrap text-center">
    <SectionHeading id="about-heading">About me</SectionHeading>
    <p className="section-description mx-auto">{profile.introduction}</p>
    <a className="bracket-button inline-block" href="#projects">Explore</a>
    <Divider />
    <div id="services" className="services-grid mx-auto grid text-left md:grid-cols-2">
      {services.map(({ title, icon: Icon, text }) => <article key={title} className="service relative">
        <Icon className="service-icon absolute" size={58} strokeWidth={1.2} aria-hidden="true" />
        <h3 className="relative mb-5 text-lg font-bold uppercase tracking-[.2em]">{title}</h3>
        <p className="relative text-sm leading-relaxed text-neutral-600">{text}</p>
      </article>)}
    </div>
    <Divider />
  </section>;
}
