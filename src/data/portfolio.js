// Personalize your portfolio here. Add remaining social URLs when ready.
export const profile = {
  name: "Thar Tun",
  initials: "TT",
  role: "Full-Stack Developer",
  email: "nicholaskhoon@gmail.com",
  github: "https://github.com/AWall789",
  instagram:
    "https://www.instagram.com/thartun.khoon?stkn=MTVyMnRoeW54N3p3Zg%3D%3D&utm_source=qr",
  introduction:
    "I turn ideas into complete digital experiences. As a Full-Stack Developer, I build modern, responsive applications from intuitive interfaces to reliable backend systems. I focus on clean design, thoughtful code, and seamless functionality to create products that look great, feel natural, and work beautifully.",
};

export const skillGroups = [
  {
    title: "Using now",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    title: "Learning",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "TypeScript", icon: "typescript" },
    ],
  },
  {
    title: "Other skills",
    skills: [
      { name: "English", flag: "🇬🇧", level: "C1 / C2" },
      { name: "Chinese", flag: "🇨🇳", level: "HSK 1" },
      { name: "C++", icon: "cplusplus" },
      { name: "C", icon: "c" },
    ],
  },
];

export const selectedProjects = [
  {
    id: "jo-jo-food-ordering",
    number: 1,
    group: "Web & Apps",
    area: "Full-Stack Web Development",
    title: "Jo Jo Local Restaurant",
    description:
      "An online food ordering system built with a responsive frontend and a PHP and MySQL backend.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: "smart-mailbox",
    number: 2,
    group: "IoT",
    area: "IoT / Embedded Systems",
    title: "Smart Mailbox System",
    description:
      "A sensor-driven mailbox system combining detection, alerts, and physical access controls.",
    technologies: [
      "ESP8266 / ESP32",
      "Arduino",
      "IR & ultrasonic sensors",
      "Servo",
      "LCD",
    ],
  },
  {
    id: "people-counter",
    number: 3,
    group: "IoT",
    area: "IoT",
    title: "People Counter System",
    description:
      "An ESP8266 and IR-sensor people counter connected to ThingSpeak for monitoring.",
    technologies: ["ESP8266", "IR sensors", "Arduino", "ThingSpeak"],
  },
  {
    id: "dems",
    number: 4,
    group: "Web & Apps",
    area: "Database Development",
    title: "Digital Education Management System",
    description:
      "A desktop education management system built around a normalized MySQL database and CRUD workflows.",
    technologies: ["Python", "Tkinter", "MySQL", "ERD", "CRUD"],
  },
  {
    id: "grs-performance",
    number: 5,
    group: "Data & AI",
    area: "Data Science / Business Intelligence",
    title: "Regional & Branch Performance Monitoring",
    description:
      "Analysis and dashboards for regional and branch performance using Python and Power BI.",
    technologies: ["Python", "Pandas", "NumPy", "Power BI", "DAX"],
  },
  {
    id: "hemoglobin",
    number: 6,
    group: "Data & AI",
    area: "Machine Learning",
    title: "Hemoglobin Prediction",
    description:
      "A linear regression project exploring hemoglobin prediction with Python and Scikit-learn.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Linear Regression"],
  },
  {
    id: "healthcare-clustering",
    number: 7,
    group: "Data & AI",
    area: "Machine Learning",
    title: "Healthcare Patient Clustering",
    description:
      "Exploratory patient grouping using K-Means and PCA to examine patterns in healthcare data.",
    technologies: ["Python", "K-Means", "PCA", "Scikit-learn"],
  },
  {
    id: "mcs-cloud",
    number: 8,
    group: "Cloud",
    area: "Cloud Computing",
    title: "MCS Cloud Platform Development",
    description:
      "A cloud platform project using AWS services for compute, storage, databases, load balancing, and monitoring.",
    technologies: ["AWS EC2", "RDS", "S3", "ALB", "CloudWatch", "VPC & IAM"],
  },
  {
    id: "cloud-security",
    number: 9,
    group: "Cloud",
    area: "Cloud / Cybersecurity",
    title: "Cloud Security & Migration",
    description:
      "A secure migration project covering access control, encryption, Zero Trust, and monitoring on AWS.",
    technologies: ["AWS", "IAM", "Encryption", "Zero Trust", "CloudWatch"],
  },
];
