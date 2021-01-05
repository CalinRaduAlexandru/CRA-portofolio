import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Welcome!',
  name: 'Călin Radu Alexandru',
  subtitle: 'Web Developer',
  cta: 'Contact me!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Passionate Junior Developer aspiring to the senior full-stack title.',
  paragraphTwo: 'Ready for challanges and outside of the box thinking.',
  paragraphThree: 'There are no problems, only functions!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'CrownFeel',
    info: 'Fully-fledged e-commerce platform',
    info2: 'With Autentification, Backend server, online payment',
    url: 'https://crownfeel.herokuapp.com/',
    repo: 'https://github.com/CalinRaduAlexandru/CrownFeel', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Quote-generator',
    info: '',
    info2: '',
    url: 'https://calinradualexandru.github.io/Quote-Generator/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Infinity-scroll',
    info: '',
    info2: '',
    url: 'https://calinradualexandru.github.io/Infinity-scroll/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
