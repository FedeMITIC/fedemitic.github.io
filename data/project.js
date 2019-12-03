/**
 * Contains all the projects. Each project has:
 * ID :int - incremental, starting from 1,
 * btnUrl :string - URI of the project
 * name :string,
 * img :string,
 * desc :string - description for the card
 * extdesc :string - extended description for the project page (might contain html tags)
 * date :string
 * tags :array - available labels: personal, professional, university, wip. Multiple lables may be present (alphabetically ordered)
 *
 */
const PROJECTS = [
  {
    id: 1,
    name: 'Portfolio',
    img: '../projects/portfolio/img/cover.png',
    desc: 'Website for my Résumé and Portfolio; built with JS, jQuery and Bootstrap.',
    extdesc: '',
    btnUrl: '../projects/portfolio/index.html',
    tags: ['personal', 'wip'],
  },
  {
    id: 2,
    name: 'Hearthstone Deck Builder',
    img: '../projects/hearthstone/img/cover.png',
    desc: 'Small project to train on ReactJS, APIs, and Material Design Bootstrap.',
    extdesc: '',
    btnUrl: '../projects/hearthstone/index.html',
    tags: ['personal', 'wip'],
  },
  {
    id: 3,
    name: 'Posti Day',
    img: '../projects/posti/img/cover.png',
    desc:
      'An exciting day with fun activities related to Posti and their services.',
    extdesc: '',
    btnUrl: '../projects/posti/index.html',
    tags: ['professional', 'university'],
  },
  {
    id: 4,
    name: 'Elisa Viihde',
    img: '../projects/elisaviihde/img/cover.png',
    desc: 'Usability Evaluation of ElisaViihde, Elisa\'s streaming platform.',
    extdesc: '',
    btnUrl: '../projects/elisaviihde/index.html',
    tags: ['professional', 'university'],
  },
  {
    id: 5,
    name: 'Heimdall',
    img: '../projects/heimdall/img/cover.png',
    desc: 'Startup idea developed for the Startup Experience Course in Aalto.',
    extdesc: '',
    btnUrl: '../projects/heimdall/index.html',
    tags: ['university'],
  },
  {
    id: 6,
    name: 'Namibia ID Application',
    img: '../projects/namibia-id/img/cover.png',
    desc: 'An application developed for the UIC Course in Aalto.',
    extdesc: '',
    btnUrl: '../projects/namibia-id/index.html',
    tags: ['university'],
  },
  {
    id: 7,
    name: 'Nittykumpu Shopping Center',
    img: 'https://via.placeholder.com/150',
    desc: 'Project of the User-Centered Methods Course in Aalto.',
    extdesc: '',
    btnUrl: '../projects/nittykumpu/index.html',
    tags: ['university'],
  },
  {
    id: 8,
    name: 'WinAnt',
    img: '../projects/winant/img/cover.png',
    desc: 'Cross-platform application developed at MonkeyCube S.R.L.',
    extdesc: '',
    tags: ['professional'],
  },
  {
    id: 9,
    name: 'Auth0 Users',
    img: '../projects/auth0/img/cover.png',
    desc: 'NPM Package to retrieve users\'id using Auth0 APIs.',
    extdesc: '',
    tags: ['personal'],
  },
  {
    id: 10,
    name: 'HomebrewLab',
    img: '../projects/homebrewlab/img/cover.gif',
    desc: 'Free web-app for pro and amateur homebrewers.',
    extdesc: '',
    tags: ['personal', 'university'],
  },
];

// const blocks the reassigning but still let other code to modify the object itself, so let's freeze it (shallow freeze though)
Object.freeze(PROJECTS);
