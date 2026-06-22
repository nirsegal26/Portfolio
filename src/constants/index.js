const navLinks = [
  {
    name: "Work",
    link: "#counter",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Learning", imgPath: "/images/ideas.svg" },
  { text: "Designing", imgPath: "/images/pb.png" },
  { text: "Building", imgPath: "/images/designs.svg" },
  { text: "Coding", imgPath: "/images/code.svg" },
  { text: "Learning", imgPath: "/images/ideas.svg" },
  { text: "Designing", imgPath: "/images/pb.png" },
  { text: "Building", imgPath: "/images/designs.svg" },
  { text: "Coding", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 2, suffix: "", label: "Semesters Completed" },
    { value: 5, suffix: "", label: "Projects Built" },
    { value: 442, suffix: "+", label: "Users Reached" },
    { value: 476, suffix: "+", label: "Coffee Cups Consumed" },
];

const expCards = [
  {
    imgPath: "/images/kidandblu.png",
    logoPath: "/images/logo1.png",
    gifPath: "/images/kidandblu.gif",
    githubLink: "https://github.com/nirsegal26/Kid-And-Blu",
    title: "Kid & Blu",
    second_title: "2D adventure game",
    responsibilities: [
      "Developed a 2D action-adventure game using Godot 4.4.1.",
      "Advanced gameplay systems such as dynamic enemy AI, a level-up and XP progression system.",
      "Focusing on clean architecture and modular scene design.",
    ],
  },
  {
    second_title: "An interactive Pokédex web app",
    imgPath: "/images/poke-dexo.png",
    gifPath: "/images/poke-dexo.gif",
    githubLink: "https://github.com/nirsegal26/poke-dexo",
    logoPath: "/images/logo3.png",
    title: "PokéDexo",
    responsibilities: [
      "A dynamic and interactive web application that consumes a RESTful API to fetch and display detailed information.",
      "Designed a dynamic, visually engaging user interface",
      "Built with HTML, CSS, and JavaScript, powered by the official PokéAPI.",
    ],
  },
  {
    second_title: "Gamified Task Management & Productivity Platform",
    imgPath: "/images/quizit.png",
    gifPath: "/images/quizit.gif",
    githubLink: "https://github.com/nirsegal26/life-quest",
    logoPath: "/images/logo2.png",
    title: "Life Quest App",
    responsibilities: [
      "Developing a gamified productivity web application using React and Tailwind CSS that dynamically transforms daily to-do lists into interactive RPG encounters.",
      "Architecting an optimized, visually rich user interface featuring custom sprite-sheet frame-slicing and lazy-loaded parallax environments using Intersection Observers to ensure seamless performance.",
      "Currently focusing on building a robust state-machine for character animations and refining the interactive loot mechanics (XP and item drops) for an engaging user experience."
     ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "General" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Low Level" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/nirsegal26"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://linkedin.com/in/nirsegal26"
  },
];

export {
  words,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  navLinks,
  skills,
};