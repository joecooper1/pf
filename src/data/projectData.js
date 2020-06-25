import onlyReggae from "../images/onlyReggae.jpg";
import uFluent from "../images/uFluent.jpg";
import ncNews from "../images/ncnews.png";
import ncBackend from "../images/ncbackend.png";

import glass2 from "../images/glass2.png";
import glass3 from "../images/glass3.png";
import glass4 from "../images/glass4.png";
import glass5 from "../images/glass5.png";
import glass6 from "../images/glass6.png";
import glass7 from "../images/glass7.png";
import glass8 from "../images/glass8.png";
import glass9 from "../images/glass9.png";

import box from "../images/box.png";
import ghost from "../images/ghost.png";
import meditation from "../images/meditation.png";
import menu from "../images/menu.png";

import weather1 from "../images/weather1.png";
import weather2 from "../images/weather2.png";
import weather3 from "../images/weather3.png";
import weather4 from "../images/weather4.png";
import weather5 from "../images/weather5.png";
import weather6 from "../images/weather6.png";
import weather7 from "../images/weather7.png";

import angles from "../images/angles.png";
import beat from "../images/beat.png";
import car from "../images/car.png";
import space from "../images/space.png";
import rain from "../images/rain.png";
import nightmare from "../images/nightmare.png";
import dead from "../images/dead.png";
import hand from "../images/hand.png";
import smiles from "../images/smiles.png";

export const projectData = [
  {
    name: "Only Reggae",
    github: "https://github.com/joecooper1/ToteTechTestApp",
    link: null,
    description:
      "A small music app I made in four days for a tech test.\nIt uses the Napster API to display the top Reggae tracks, charts and playlists, and gives users the ability to search the database for their favourite albums, artists and songs. Built using React Native.",
    url: [onlyReggae],
    color2: "#FA9233",
    color1: "black",
    githubColor: "#FA9233",
    type: "vertical",
  },
  {
    name: "uFluent",
    github: "https://github.com/uFluent/frontend",
    link: null,
    description:
      "An educational app designed to help children learn new vocabulary in various languages.\nThe in-built camera app uses machine learning to recognise and translate household objects, and vocabulary quizzes help kids to memorise words.\nBuilt as a final project at Northcoders bootcamp with a team of four other people, in React Native and Python.",
    url: [uFluent],
    color1: "#57B7DD",
    color2: "black",
    githubColor: "rgba(255, 255, 0, 0.9)",
    type: "vertical",
  },
  {
    name: "Scorchio",
    github: "https://github.com/joecooper1/scorchio",
    link: null,
    description:
      "A desktop prototype of a live weather-based mobile wallpaper, using the OpenWeather API. In the prototype the user can select a location, and change the time of day and the weather conditions, to simulate the apps behaviour. Built using React, JavaScript and HTML Canvas.",
    url: [weather1, weather2, weather3, weather4, weather5, weather6, weather7],
    color1: "#135eaa",
    color2: "white",
    type: "vertical",
  },
  {
    name: "Stained-Glass NPM Package",
    github: "https://github.com/joecooper1/stained-glass-generator",
    link: null,
    description:
      "A public NPM package that draws a random stained-glass style pattern onto an HTML canvas. It has 10 different optional user inputs, each of which change the way the pattern is generated. Made using Javascript.",
    url: [glass2, glass3, glass4, glass5, glass6, glass7, glass8, glass9],
    link: "https://www.npmjs.com/package/@joecooper1/stained-glass-generator",
    color1: "#FFBE0A",
    color2: "black",
    gradient: "linear-gradient(to right, pink, yellow)",
    githubColor: "pink",
    type: "vertical",
  },
  {
    name: "NC News (frontend)",
    github: "https://github.com/joecooper1/nc-news-frontend",
    link: "https://nc-news-joecooper1.netlify.app/",
    description:
      "The frontend of my Reddit-like news website, built in React, using Axios, Reach Router and styled-components. It displays the most recent articles, the top users, and 'trending' articles based on an algorithm I designed. It features pagination, filtering by topic or author, a favourites system, and a search function.  The background is dynamic and made using CSS.",
    url: [ncNews],
    color1: "#A98CBC",
    color2: "black",
    githubColor: "white",
  },
  {
    name: "NC News ",
    name2: "(backend)",
    github: "https://github.com/joecooper1/nc-news-sprint",
    link: null,
    description:
      "The backend for the NC News app, built using Express, PostgreSQL and Knex. Allows for adding, editing, deleting, upvoting and favouriting articles, adding, editing, deleting and upvoting comments, and searching by various criteria.",
    url: [ncBackend],
    color1: "rgb(23, 23, 23)",
    color2: "green",
    color3: "purple",
    color4: "blue",
    githubColor: "yellow",
  },
  {
    name: "Ghost Machines",
    github: null,
    link: null,
    description:
      "A small downloadable game made for literary night First Draft at The Portico Library. It allows users to interact with various simulated ghost-hunting and spirit communication technologies from history. Built using GMS language, which is an app-specific language, and a cross between Javascript and C.",
    url: [box, ghost, meditation, menu],
    color1: "rgb(37, 42, 111)",
    color2: "white",
  },
  {
    name: "Flim Nite",
    github: null,
    link: null,
    description:
      "I wrote, designed, created assets for and built a series of small video games to be integrated into my own live performances, for the cabaret night Flim Nite. All built using GMS language.",
    url: [dead, hand, smiles, space, rain, nightmare, angles, beat, car],
    color1: "black",
    color2: "#8AC539",
  },
];
