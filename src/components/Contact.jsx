import { useState } from 'react';
import SectionHeading from './SectionHeading';
import Divider from './Divider';
import { profile } from '../data/portfolio';
export default function Contact() {
  const [status, setStatus] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (!profile.email) {
      setStatus('This demo form is not connected yet. Please check back once contact details are available.');
      return;
    }
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\n\n${data.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('Your email app will open with your message. Please press Send there to finish.');
  }
  return <section id="contact" aria-labelledby="contact-heading" className="contact-section section-wrap text-center">
    <SectionHeading id="contact-heading">Contact</SectionHeading>
    <p className="section-description mx-auto">Have a project in mind, an idea to explore, or simply want to say hello? I’d love to hear from you.</p>
    <Divider />
    <form className="contact-form mx-auto text-left" onSubmit={handleSubmit}>
      <div className="contact-field"><label htmlFor="name">Enter your name<span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div>
      <div className="contact-field"><label htmlFor="email">Enter your email<span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div>
      <div className="contact-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} /></div>
      <div className="contact-field message-field"><label htmlFor="message">Your message<span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={5} required maxLength={5000} /></div>
      <div className="mt-10 text-center"><button type="submit" className="bracket-button px-12 py-3">Submit</button></div>
      <p className="mt-5 text-center text-xs text-neutral-500">* Required fields</p>
      <p role="status" className="mt-4 text-center text-sm leading-relaxed">{status}</p>
    </form>
  </section>;
}
