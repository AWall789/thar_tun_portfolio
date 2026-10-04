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

`src/App.jsx` puts the sections in page order. Each section has its own component in `src/components`: Navbar, Hero, Introduction, About, Skills, Education, Projects, Contact, and Footer. Shared SectionHeading, Divider, and SocialLinks components keep styling consistent.

Edit `src/data/portfolio.js` to personalize the name, title, introduction, email, social links, project showcase, and skill groups. Layout styles are in `src/index.css`, alongside Tailwind utilities in the components.

The contact form validates required fields. With an email configured, it opens the visitor's email application with the message filled in; it does not send mail from a server. With no email configured, it explains that the form is a demo. Social links without configured destinations lead to the contact section.

The education and project details were supplied by Thar Tun. The selected project cards have no demo or source links because none were provided for those specific projects.

## Reference asset credits

Design reference: Portfolio – Tomasz Gajda, Figma Community file 897605510384968096.
The hero portrait is Thar Tun's supplied image.
Skill icons: Devicon (https://github.com/devicons/devicon), MIT licensed; brand marks remain the property of their owners.
