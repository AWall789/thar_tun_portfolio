import { AtSign, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function SocialLinks({ footer = false }) {
  const items = footer
    ? [{ icon: Github, label: 'GitHub', url: profile.github }, { icon: Linkedin, label: 'LinkedIn', url: profile.linkedin }, { icon: Instagram, label: 'Instagram', url: profile.instagram }, { icon: Mail, label: 'Email', url: profile.email && `mailto:${profile.email}` }]
    : [{ icon: AtSign, label: 'Email', url: profile.email && `mailto:${profile.email}` }, { icon: Github, label: 'GitHub', url: profile.github }, { icon: Linkedin, label: 'LinkedIn', url: profile.linkedin }];
  return <div className={`flex items-center gap-5 ${footer ? 'footer-socials' : 'hero-socials'}`}>
    {items.map(({ icon: Icon, label, url }) => <a key={label} href={url || '#contact'} aria-label={url ? label : `${label} — contact me`} {...(url?.startsWith('https:') ? { target: '_blank', rel: 'noreferrer' } : {})}><Icon size={24} strokeWidth={2.2} /></a>)}
  </div>;
}
