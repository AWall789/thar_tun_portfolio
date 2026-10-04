import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const certificates = [
  {
    year: '2026',
    title: 'Level 5 Higher National Diploma in Computing',
    award: 'With Distinction',
    issuer: 'Pearson BTEC · YOUTH International College',
    preview: '/certificates/pearson-btec-preview.jpg',
    pdf: '/certificates/pearson-btec-diplomas.pdf#page=3',
  },
  {
    year: '2024',
    title: 'International Level 3 Diploma in IT',
    award: 'Double Distinction',
    issuer: 'Pearson BTEC · YOUTH International College',
    preview: '/certificates/level-3-diploma-preview.jpg',
    pdf: '/certificates/pearson-btec-diplomas.pdf#page=5',
  },
  {
    year: '2022',
    title: 'Level 3 Foundation – IT',
    award: 'Certificate of Completion',
    issuer: 'YOUTH International University',
    preview: '/certificates/level-3-foundation-preview.jpg',
    pdf: '/certificates/level-3-foundation-it.pdf',
  },
];

export default function CertificatesFolder() {
  const [isOpen, setIsOpen] = useState(false);

  return <div className={`certificate-folder ${isOpen ? 'is-open' : ''}`}>
    <button
      className="certificate-folder-trigger"
      type="button"
      aria-expanded={isOpen}
      aria-controls="certificate-folder-contents"
      onClick={() => setIsOpen(open => !open)}
    >
      <span className="folder-art" aria-hidden="true">
        <span className="folder-art-back" />
        <span className="folder-art-paper folder-art-paper-one" />
        <span className="folder-art-paper folder-art-paper-two" />
        <span className="folder-art-front" />
      </span>
      <span className="certificate-folder-copy">
        <span className="certificate-folder-eyebrow">Credentials / 2022–2026</span>
        <span className="certificate-folder-title">Certificates</span>
        <span className="certificate-folder-count">3 certificates · 2 original documents</span>
      </span>
      <span className="certificate-folder-action">{isOpen ? 'Close folder' : 'Open folder'} <span aria-hidden="true">{isOpen ? '−' : '+'}</span></span>
    </button>
    <div id="certificate-folder-contents" className="certificate-folder-panel" aria-hidden={!isOpen} inert={!isOpen}>
      <div className="certificate-folder-panel-inner">
        <div className="certificate-grid">
          {certificates.map(certificate => <article className="certificate-item" key={certificate.title}>
            <div className="certificate-preview">
              <img src={certificate.preview} alt={`Preview of ${certificate.title} certificate`} loading="lazy" />
            </div>
            <div className="certificate-item-body">
              <span className="certificate-year">{certificate.year} / {certificate.award}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title} PDF in a new tab`}>
                View certificate <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </article>)}
        </div>
      </div>
    </div>
  </div>;
}
