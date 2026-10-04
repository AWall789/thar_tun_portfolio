import { useState } from "react";

export default function Introduction() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="introduction relative overflow-hidden bg-[#1d1d1d] text-white">
      <span aria-hidden="true" className="intro-watermark">
        IT
      </span>
      <div className="relative z-10 max-w-5xl">
        <h2 className="mb-5 text-xl font-bold tracking-[.2em]">
          BEYOND THE CODE
        </h2>
        <p className="max-w-4xl text-sm leading-relaxed text-neutral-300">
          A little curiosity. A lot of building. I bring frontend and backend
          development together to turn ideas into complete digital experiences.
          From crafting responsive interfaces to building the logic behind them,
          I care about clean code, thoughtful design, and the small details that
          make everything work seamlessly.
        </p>
        {expanded && (
          <p
            id="intro-more"
            className="mt-4 max-w-4xl text-sm leading-relaxed text-neutral-300"
          >
            My approach starts with understanding what a product needs to
            achieve and how people will use it. I combine responsive interfaces,
            reliable backend systems, APIs, databases, and thoughtful
            interactions to build applications that are intuitive, scalable, and
            made to work across devices.
          </p>
        )}
        <button
          type="button"
          className="bracket-button mt-6"
          aria-expanded={expanded}
          aria-controls="intro-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
}
