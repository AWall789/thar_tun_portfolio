import { PencilRuler, CodeXml, Settings } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Divider from './Divider';
import { profile } from '../data/portfolio';
const services = [
  { title: 'Design', icon: PencilRuler, text: 'From an early idea to a polished interface, I design clear, thoughtful experiences around your needs and the people who use them.' },
  { title: 'Development', icon: CodeXml, text: 'I bring designs to life with responsive, accessible websites, built with care and attention to the smallest interaction.' },
  { title: 'Maintenance', icon: Settings, text: 'A great website keeps getting better. I help maintain, refine, and improve your site as your ideas and needs evolve.' },
];
export default function About() {
  return <section id="about" aria-labelledby="about-heading" className="about-section section-wrap text-center">
    <SectionHeading id="about-heading">About me</SectionHeading>
    <p className="section-description mx-auto">{profile.introduction}</p>
    <a className="bracket-button inline-block" href="#services">Explore</a>
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
