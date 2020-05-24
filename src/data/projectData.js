import onlyReggae from "../images/onlyReggae.jpg";
import uFluent from "../images/uFluent.jpg";
import ncNews from "../images/ncnews.png";
import ncBackend from "../images/ncbackend.png";

import box from "../images/box.png";
import ghost from "../images/ghost.png";
import meditation from "../images/meditation.png";
import menu from "../images/menu.png";

export const projectData = [
  {
    name: "Only Reggae",
    github: "https://github.com/joecooper1/ToteTechTestApp",
    link: null,
    description:
      "A small music app I made in four days for a tech test.\nIt uses the Napster API to display the top Reggae tracks, charts and playlists, and gives users the ability to search the database for their favourite albums, artists and songs. Built using React Native.",
    url: onlyReggae,
  },
  {
    name: "uFluent",
    github: "https://github.com/uFluent/frontend",
    link: null,
    description:
      "An educational app designed to help children learn new vocabulary in various languages.\nThe in-built camera app uses machine learning to reocgnise and translate household objects, and vocabulary quizzes help kids to memorise words.\nBuilt as a final project at Northcoders bootcamp with a team of four other people, in React Native and Python.",
    url: uFluent,
  },
  {
    name: "NC News (frontend)",
    github: "https://github.com/joecooper1/nc-news-frontend",
    link: "https://nc-news-joecooper1.netlify.app/",
    description:
      "The frontend of my Reddit-like news website, built in React, using Axios, Reach Router and styled-components. It displays the most recent articles, the top users, and 'trending' articles based on an algorithm I designed. It features pagination, filtering by topic or author, a favourites system, and a search function.  The background is dynamic and made using CSS.",
    url: ncNews,
  },
  {
    name: "NC News (backend)",
    github: "https://github.com/joecooper1/nc-news-sprint",
    link: null,
    description:
      "The backend for the NC News app, built using Express, PostgreSQL and Knex. Allows for adding, editing, deleting, upvoting and favouriting articles, adding, editing, deleting and upvoting comment, and searching by various criteria.",
    url: ncBackend,
  },
  {
    name: "Ghost Machines",
    github: null,
    link: null,
    description:
      "A small downloadable game made for literary night First Draft at The Portico Library. It allows users to interact with various simulated ghost-hunting and spirtual communication technologies from history. Built using GMT language, which is an app-specific language, and a cross between Javascript and C.",
    url: [box, ghost, meditation, menu],
  },
];
