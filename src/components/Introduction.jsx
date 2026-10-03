import { useState } from 'react';

export default function Introduction() {
  const [expanded, setExpanded] = useState(false);
  return <section className="introduction relative overflow-hidden bg-[#1d1d1d] text-white">
    <span aria-hidden="true" className="intro-watermark">IT</span>
    <div className="relative z-10 max-w-5xl">
      <h2 className="mb-5 text-xl font-bold tracking-[.2em]">IT BERRIES</h2>
      <p className="max-w-4xl text-sm leading-relaxed text-neutral-300">A little curiosity. A lot of creativity. I bring design and development together to turn complex ideas into simple, engaging experiences. From the first sketch to the final line of code, I care about the details that make a website feel right.</p>
      {expanded && <p id="intro-more" className="mt-4 max-w-4xl text-sm leading-relaxed text-neutral-300">My approach starts with understanding the people who will use a product. I combine responsive layouts, accessible interfaces, and thoughtful interactions to create experiences that work across devices.</p>}
      <button type="button" className="bracket-button mt-6" aria-expanded={expanded} aria-controls="intro-more" onClick={() => setExpanded(!expanded)}>{expanded ? 'Read less' : 'Read more'}</button>
    </div>
  </section>;
}
