import { profile } from '../data/portfolio';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return <section id="home" className="hero relative overflow-hidden">
    <div className="hero-dark" aria-hidden="true" />
    <div className="hero-inner mx-auto relative h-full">
      <div className="hero-copy relative z-10">
        <p className="hero-greeting font-bold">Hi, I am</p>
        <h1 className="font-bold tracking-tight">{profile.name}</h1>
        <p className="hero-role font-semibold">{profile.role}</p>
        <SocialLinks />
      </div>
      <img className="hero-portrait" src="/images/portrait.png" alt="Tomasz Gajda, developer and designer" fetchPriority="high" />
    </div>
  </section>;
}
