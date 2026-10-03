import { ChevronsUp } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { profile } from '../data/portfolio';
export default function Footer() {
  return <footer className="flex flex-col items-center bg-[#1b1b1b] px-6 py-14 text-center text-white">
    <a href="#home" className="mb-8 flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[.15em]"><ChevronsUp size={24} />Back to top</a>
    <SocialLinks footer />
    <p className="mt-8 text-xs text-neutral-300"><strong>© {new Date().getFullYear()} {profile.name}.</strong> All rights reserved.</p>
  </footer>;
}
