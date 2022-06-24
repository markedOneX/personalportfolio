const dataProject = [
  {
    title: "My Website",
    description:
      "Designed and built a fully responsive static portfolio to showcase my work and promote my skills and expertise.",
    image: "https://i.imgur.com/Nue3Zwi.jpg",
    tags: ["NEXT.js", "SASS", "Figma"],
    visit: "./",
    id: 0,
  },
  {
    title: "Portfolio Template",
    description: "Fully responsive static landing page with pure HTML and CSS",
    image: "https://i.imgur.com/pFOkDX1.jpg",
    tags: ["HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/yLzRqyb",
    id: 1,
  },
  {
    title: "SSElectronics",
    description:
      "Fully dynamic responsive website integrated with backend and database",
    image: "https://i.imgur.com/A6wkTzO.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    visit: "https://sselectronics.herokuapp.com/",
    id: 15,
  },
  {
    title: "Crypto Tracker Dashboard",
    description:
      "Crypto tracker dashboard integrated with API from Coingecko.com",
    image: "https://i.imgur.com/s8IVA8S.jpg",
    tags: ["React", "Bootstrap", "Vite"],
    visit: "https://markedonex.github.io/Crypto-Dashboard/",
    id: 21,
  },

  {
    title: "U.S GDP",
    description:
      "Bar chart that showcase the performance of U.S GDP. Created with D3.js",
    image: "https://i.imgur.com/yJf5Qnx.jpg",
    tags: ["D3.js", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/VwrqVYo",
    id: 2,
  },
  {
    title: "Pomodoro Clock",
    description: "Get more productive in your work using pomodoro technique",
    image: "https://i.imgur.com/14CAOuK.jpg",
    tags: ["React", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/OJOZaYy",
    id: 14,
  },

  // {
  //   title: "Drum Pad Machine",
  //   description:
  //     "Plug in your headphones and click on the buttons to unleash the musician in you.",
  //   image: "https://i.imgur.com/TogZWOr.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/yLPvdQK",
  //   id: 11,
  // },
  {
    title: "Exercise Tracker Microservice",
    description:
      "Allows user to login and save their CRUD their fitness progress",
    image: "https://i.imgur.com/h9RhoOG.jpg",
    tags: ["Node.js", "HTML", "CSS"],
    visit: "https://replit.com/@vkronizer/FCC-Exercise-Tracker-Microservice",
    id: 20,
  },
  {
    title: "URL Shortner Microservice",
    description:
      "URL shortner takes user's input link and shortens it for quick use.",
    image: "https://i.imgur.com/wjAL4fE.jpg",
    tags: ["Node.js", "HTML", "CSS"],
    visit: "https://replit.com/@vkronizer/FCC-URL-Shortner",
    id: 18,
  },
  {
    title: "Timestamp Microservice",
    description: "Backend project that returns the current timestamp.",
    image: "https://i.imgur.com/q8lSh7o.jpg",
    tags: ["Node.js", "HTML", "CSS"],
    visit: "https://replit.com/@vkronizer/FCC-Timestamp-Microservice",
    id: 16,
  },
  {
    title: "Request Header Parser Microservice",
    description: "Backend project that returns user's system information",
    image: "https://i.imgur.com/jM2URQZ.jpg",
    tags: ["Node.js", "HTML", "CSS"],
    visit:
      "https://replit.com/@vkronizer/FCC-Request-Header-Parser-Microservice",
    id: 17,
  },
  {
    title: "File Metadata Microservice",
    description: "Allows user to upload a file to server",
    image: "https://i.imgur.com/ebXVBBt.jpg",
    tags: ["Node.js", "HTML", "CSS"],
    visit: "https://replit.com/@vkronizer/FCC-File-Metadata-Microservice",
    id: 19,
  },
  {
    title: "Markdown Preview",
    description:
      "Markdown is a lightweight markup language for creating formatted text using a plain-text editor",
    image: "https://i.imgur.com/mm4eLo1.jpg",
    tags: ["Javascript", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/abVpoLw",
    id: 13,
  },
  {
    title: "React Calculator",
    description: "",
    image: "https://i.imgur.com/wd82Rph.jpg",
    tags: ["React", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/KKyoLYd",
    id: 12,
  },
  {
    title: "Random Quote Machine",
    description:
      "Generates a random quote. Integrated with large library with API",
    image: "https://i.imgur.com/5A8OQDU.jpg",
    tags: ["Javascript", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/qBVqzWy",
    id: 10,
  },

  // {
  //   title: "Random Color Generator",
  //   description: "Generates random colors with click of a button",
  //   image: "https://i.imgur.com/uw7tPjc.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/xxXozgj",
  //   id: 8,
  // },

  {
    title: "Bitwise Calculator",
    description: "A calculator that takes and calculates binary input.",
    image: "https://i.imgur.com/lBGQRmD.jpg",
    tags: ["Javascript", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/ExoPjmg",
    id: 3,
  },
  {
    title: "Caesar's Cipher",
    description:
      "Caesar shift, is one of the simplest and most widely known encryption techniques",
    image: "https://i.imgur.com/z8Xkwdq.jpg",
    tags: ["Javascript", "HTML", "CSS"],
    visit: "https://codepen.io/shubhamadke/pen/eYexMWr",
    id: 9,
  },
  // {
  //   title: "Rotary Buttons Container",
  //   description: "Click on number 5 and see the numbers rotate!",
  //   image: "https://i.imgur.com/oYMYuOC.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/mdpJrzx",
  //   id: 4,
  // },

  // {
  //   title: "Add Object Container",
  //   description: "Add new object into an array",
  //   image: "https://i.imgur.com/fZsUIlR.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/LYOvYLg",
  //   id: 5,
  // },
  // {
  //   title: "Palindrome Checker",
  //   description:
  //     "A program that will enable you to check if the number is palindrome or not.",
  //   image: "https://i.imgur.com/rLpvswi.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/dyZaeWO",
  //   id: 6,
  // },
  // {
  //   title: "Integer to Roman Converter",
  //   description: "Convert normal integer numbers into Roman",
  //   image: "https://i.imgur.com/vqlLeOP.jpg",
  //   tags: ["Javascript", "HTML", "CSS"],
  //   visit: "https://codepen.io/shubhamadke/pen/JjOxvoj",
  //   id: 7,
  // },
];

export default dataProject;
