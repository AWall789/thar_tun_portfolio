import SectionHeading from './SectionHeading';
import CertificatesFolder from './CertificatesFolder';

export default function Education() {
  return <section id="education" aria-labelledby="education-heading" className="education-section light-sections">
    <div className="education-inner mx-auto">
      <div className="education-heading-block">
        <p className="section-kicker">01 / Education</p>
        <SectionHeading id="education-heading">Education</SectionHeading>
        <p className="education-lead">A foundation in computing, shaped by building and exploring real systems.</p>
      </div>
      <article className="education-card">
        <div className="education-card-top"><span>2026</span><span>HND · Level 5</span></div>
        <h3>HND Level 5 in Computing</h3>
        <p>YOUTH International College</p>
        <div className="education-card-rule" aria-hidden="true" />
        <p className="education-card-note">Software development · Data · Networks · Cloud</p>
      </article>
    </div>
    <CertificatesFolder />
  </section>;
}
