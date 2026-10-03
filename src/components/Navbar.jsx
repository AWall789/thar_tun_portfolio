import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-30">
    <nav aria-label="Main navigation" className="nav-shell mx-auto flex items-center justify-between">
      <a href="#home" aria-label="Back to home" className="brand">{profile.initials}<span /></a>
      <button className="mobile-menu md:hidden" type="button" aria-expanded={open} aria-controls="navigation-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div id="navigation-links" className={`${open ? 'flex' : 'hidden'} nav-links md:flex`}>
        <a href="#about" onClick={() => setOpen(false)}>About me</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
        <a className="contact-pill" href="#contact" onClick={() => setOpen(false)}>Contact me</a>
      </div>
    </nav>
  </header>;
}
