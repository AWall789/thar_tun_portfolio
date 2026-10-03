export default function SectionHeading({ children, id }) {
  return <h2 id={id} className="section-heading inline-block border-[5px] border-black px-10 py-5 text-center text-xl font-bold uppercase tracking-[.35em]">{children}</h2>;
}
