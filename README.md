# React + Tailwind portfolio

A single-page recreation of the supplied portfolio reference, organized section by section.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Components

`src/App.jsx` puts the sections in page order. Each section has its own component in `src/components`: Navbar, Hero, Introduction, About, Skills, Portfolio, Contact, and Footer. Shared SectionHeading, Divider, and SocialLinks components keep styling consistent.

Edit `src/data/portfolio.js` to personalize the name, title, introduction, email, and social links. Project examples and skill groups are in the same file. Layout styles are in `src/index.css`, alongside Tailwind utilities in the components.

The contact form validates required fields. With an email configured, it opens the visitor's email application with the message filled in; it does not send mail from a server. With no email configured, it explains that the form is a demo. Social links without configured destinations lead to the contact section.

Sample projects are design examples, not claims of completed client work. Replace them with your own images, descriptions, and links.

## Reference asset credits

Design reference: Portfolio – Tomasz Gajda, Figma Community file 897605510384968096.
Matching sample imagery sourced from https://github.com/shiinedev/portfolio-web and its public demo https://portfolio-web-sand-kappa.vercel.app/ . An explicit reuse license was not provided in that repository; replace the sample portrait and project images with your own before public publication.
Skill icons: Devicon (https://github.com/devicons/devicon), MIT licensed; brand marks remain the property of their owners.
