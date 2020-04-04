/**
 * Contains all the projects. Each project has:
 * ID :int - Symbol() (might be used in the future, useless now),
 * btnUrl :string - URI of the project ('#' makes the project not accessible (only the card is visible)) 
 * name :string,
 * img :string,
 * desc :string - description for the card
 * date: date (full year)
 * extdesc :string - extended description for the project page (might contain html tags)
 * date :string
 * tags :array - available labels: personal, professional, university. Multiple lables may be present (alphabetically ordered)
 *
 */
const PROJECTS = [
  {
    id: Symbol(),
    name: 'Portfolio',
    img: '../projects/portfolio/img/cover.png',
    desc: 'Résumé and portfolio template, developed with Bootstrap and vanilla JS.',
    date: 2020,
    extdesc: '',
    btnUrl: '../projects/portfolio/index.html',
    tags: ['personal'],
  },
  {
    id: Symbol(),
    name: 'AIRsound',
    img: '../projects/airsound/img/cover.png',
    desc: 'Python/Kivy-based application to perform the tapping test on aircrafts.',
    date: 2019,
    extdesc: '',
    btnUrl: '../projects/airsound/index.html',
    tags: ['hack'],
  },
  {
    id: Symbol(),
    name: 'EITracker',
    img: '../projects/eitracker/img/cover.jpg',
    desc: 'AI-based self-driving car developed for the Innovathon Hackathon.',
    date: 2019,
    extdesc: '',
    btnUrl: '../projects/eitracker/index.html',
    tags: ['hack'],
  },
  /*{
    id: Symbol(),
    name: 'Hearthstone Deck Builder',
    img: '../projects/hearthstone/img/cover.png',
    desc: 'Small project to train on ReactJS, APIs, and Material Design Bootstrap.',
    date: 2019,
    extdesc: '',
    btnUrl: '#',
    tags: ['personal'],
  }*/,
  {
    id: Symbol(),
    name: 'Posti Day',
    img: '../projects/posti/img/cover.png',
    desc:
      'An exciting day with fun activities related to Posti and their services.',
    date: 2019,
    extdesc: '',
    btnUrl: '../projects/posti/index.html',
    tags: ['professional', 'university'],
  },
  {
    id: Symbol(),
    name: 'Elisa Viihde',
    img: '../projects/elisaviihde/img/cover.png',
    desc: 'Usability Evaluation of ElisaViihde, Elisa\'s streaming platform.',
    date: 2019,
    extdesc: '',
    btnUrl: '../projects/elisaviihde/index.html',
    tags: ['professional', 'university'],
  },
  /*{
    id: Symbol(),
    name: 'Heimdall',
    img: '../projects/heimdall/img/cover.png',
    desc: 'Startup idea developed for the Startup Experience Course in Aalto.',
    date: 2019,
    extdesc: '',
    btnUrl: '#',
    tags: ['university'],
  },
  {
    id: Symbol(),
    name: 'Namibia ID Application',
    img: '../projects/namibia-id/img/cover.png',
    desc: 'An application developed for the User Interface Construction Course in Aalto.',
    date: 2018,
    extdesc: '',
    btnUrl: '#',
    tags: ['university'],
  },
  {
    id: Symbol(),
    name: 'Nittykumpu Shopping Center',
    img: '/../projects/niittykumpu/img/cover.png',
    desc: 'Project of the User-Centered Methods Course in Aalto.',
    date: 2018,
    extdesc: '',
    btnUrl: '#',
    tags: ['university'],
  },*/
  {
    id: Symbol(),
    name: 'WinAnt',
    img: '../projects/winant/img/cover.png',
    desc: 'Cross-platform application developed at MonkeyCube S.R.L.',
    date: 2018,
    extdesc: '',
    btnUrl: '../projects/winant/index.html',
    tags: ['professional'],
  },/*
  {
    id: Symbol(),
    name: 'Auth0 Users',
    img: '../projects/auth0/img/cover.png',
    desc: 'NPM Package to retrieve users\' ids using Auth0 APIs, used in Homebrewlab.',
    date: 2017,
    extdesc: '',
    btnUrl: '#',
    tags: ['personal'],
  }*/,
  {
    id: Symbol(),
    name: 'HomebrewLab',
    img: '../projects/homebrewlab/img/cover.gif',
    desc: 'Open source web-app for professional and amateur homebrewers.',
    date: 2017,
    extdesc: '',
    btnUrl: '../projects/homebrewlab/index.html',
    tags: ['personal', 'university'],
  },
];

// const blocks the reassigning but still let other code to modify the object itself, so let's freeze it.
Object.freeze(PROJECTS);
for (const item of PROJECTS) {
  Object.freeze(item);
}
