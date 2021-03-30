import Pizza from "./food/Pizza.jpeg";
import Lamb from "./food/Lamb.jpeg";
import Wine from "./food/Wine.jpeg";

import Geralt from "./AuthorPhotos/Geralt.jpg";
import Jaskier from "./AuthorPhotos/Jaskier2.jpg";
import Yennefer from "./AuthorPhotos/Yennefer.jpg";

export const blogsData = [
  {
    id: 1,
    blogTitle: "The White Wolf",
    title: "King's Court Lamb",
    coverImg: Lamb,
    author: {
      name: "Yennefer of Vengerberg",
      username: "@YenBurger",
      avatar: Yennefer,
      about:
        "Born into poverty yet now here she stands as advisor to kings and Witchers alike. A massive fan of the finer things in life, Yennefer graces readers with some of the best dishes she has tasted at kings banquets. Should you find yourself in a Kings Court surely you’ll become acquainted.",
    },
    datePublished: "September 25, 1268",
    description: `A lamb fit for a king or for your plate?`,
    content: `Write lamb recipe here - cook at 409F`,
    comments: [
      {
        name: "Guest",
        text: "Wow thanks for the recipe!",
      },
      {
        name: "xxXDarkSoulsFanXxx_42",
        text: "Good stuff YenBurger",
      },
    ],
  },
  {
    id: 2,
    title: "Mulled Mandrake Wine",
    coverImg: Wine,
    author: {
      name: "Geralt of Rivia",
      username: "@TheWitcher",
      avatar: Geralt,
      about:
        "Geralt is a Witcher from the School of the Wolf . Though his backstory may be filled with darkness and very little happiness he manages to find slivers of happiness on the Continent where he has met friends such as Jaskier and Yennefer. Geralt doesn’t talk much, but that hasn’t stopped him from giving his take on some of the culinary experiences he's enjoyed on his travels . If ever you find a monter near home, simply “Toss a coin to your Witcher”. ",
    },
    datePublished: "October 6, 1268",
    description: `Wine is life`,
    content: `Write Wine Recipe here!`,
    comments: [
      {
        name: "Guest",
        text: "thiss artickle suxxx!",
      },
      {
        name: "xxXDarkSoulsFanXxx_42",
        text:
          "I found this article to be particularly enlightening. Good show, sir!",
      },
    ],
  },
  {
    id: 3,
    title: "Is Rock Dead?",
    coverImg: Pizza,
    author: {
      name: "Jaskier (aka Dandelion)",
      username: "@Dandelion1268",
      avatar: Jaskier,
      about:
        "Although he is not one to talk about himself, you've most likely heard endless recounts of his adventures with Geralt of Rivia, he is a humble bard after all. Having performed in many courts and tasted delicacies all across the Continent, Jaskier (aka Dandelion) was overjoyed to help school readers on some of the best dining he has experienced.",
    },
    datePublished: "December 13, 1268",
    description:
      "Pizza for the living or undead.",
    content:
      "Pizza recipe goes here",
    comments: [
      {
        name: "Guest",
        text: "thiss artickle suxxx!",
      },
      {
        name: "xxXDarkSoulsFanXxx_42",
        text:
          "I found this article to be particularly enlightening. Good show, sir!",
      },
    ],
  },
];

export default blogsData;
