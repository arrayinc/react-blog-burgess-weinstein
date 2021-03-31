import Pizza from "../Images/Food/Pizza.jpeg";
import Lamb from "../Images/Food/Lamb.jpeg";
import Wine from "../Images/Food/Wine.jpeg";
import { Container } from "react-bootstrap";
import Geralt from "../Images/AuthorPhotos/Geralt.jpg";
import Jaskier from "../Images/AuthorPhotos/Jaskier2.jpg";
import Yennefer from "../Images/AuthorPhotos/Yennefer.jpg";

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
    ingredients: (
      <Container>
        <div>
          <ul>
            <li>1/4 cup chopped fresh rosemary</li>

            <li>12 garlic cloves, minced</li>

            <li>1 tablespoon chopped fresh oregano</li>

            <li>2 tablespoons salt</li>

            <li>2 teaspoons ground black pepper</li>

            <li>2 Crown roasts of lamb (14 chops total)</li>

            <li>Olive oil</li>
          </ul>
        </div>
      </Container>
    ),
    content: (
      <p>
        <b>Step 1:</b>
        <br />
        Preheat oven to 450°F. Mix chopped rosemary, minced garlic, chopped
        oregano, salt and black pepper in small bowl. Place crown roasts of
        lamb, spaced apart, on large baking sheet. Brush lamb all over with
        olive oil. Rub herb mixture all over lamb.
        <br /> Cover bones loosely with sheet of foil. Roast lamb until
        instant-read thermometer inserted into thickest part of lamb registers
        125°F to 130°F for rare, about 20 minutes (or 130°F to 135°F for
        medium-rare, about 30 minutes; or 135°F to 140°F for medium, about 35
        minutes).
        <br />
        <br />
        <b>Step 2:</b> <br />
        Transfer lamb to platter; let stand 5 to 10 minutes. Remove foil and
        string. Cut lamb between ribs into chops and serve. Feast with witchers
        and sorceresses alike.
      </p>
    ),
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
    ingredients: (
      <Container>
        <div>
          <ul>
            <li>1/4 cup chopped fresh WINE</li>

            <li>12 garlic cloves, minced</li>

            <li>1 tablespoon chopped fresh oregano</li>

            <li>2 tablespoons salt</li>

            <li>2 teaspoons ground black pepper</li>

            <li>2 Crown roasts of lamb (14 chops total)</li>

            <li>Olive oil</li>
          </ul>
        </div>
      </Container>
    ),
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
    title: "Villenmerth Pizza Dough",
    coverImg: Pizza,
    author: {
      name: "Jaskier (aka Dandelion)",
      username: "@Dandelion1268",
      avatar: Jaskier,
      about:
        "Although he is not one to talk about himself, you've most likely heard endless recounts of his adventures with Geralt of Rivia, he is a humble bard after all. Having performed in many courts and tasted delicacies all across the Continent, Jaskier (aka Dandelion) was overjoyed to help school readers on some of the best dining he has experienced.",
    },
    datePublished: "December 13, 1268",
    description: "Pizza for the living or undead.",
    ingredients: (
      <Container>
        <div>
          <ul>
            <li>16oz bread flour</li>

            <li>1 ½ tablespoon sugar</li>

            <li>1 tablespoon salt</li>

            <li>1 tablespoon garlic powder</li>

            <li>1 tablespoon onion powder</li>

            <li>1 tablespoon oregano</li>

            <li>½ teaspoon active dry yeast</li>
            <li> 1 ¼ cups ice water</li>
            <li>1 Tablespoon vegetable oil</li>
          </ul>
        </div>
      </Container>
    ),
    content: <p>Whatever you have will determine the time it takes, Mix the bread flour, sugar, salt, onion powder, garlic powder, oregano and yeast until its well combined. After that get, a liquid measuring cup and combine the ice water and a tablespoon of olive oil. If you are using a machine let it run on slow to medium speed (don’t make a mess), slowly drizzle the liquid combo in until a sticky ball forms.
    **Note, if you don’t have a machine, I recommend pouring in a little at a time then whisking well, and repeat until the same outcome, probably will have to switch to kneading sooner to make sure its combined but keep going until you get a sticky ball**
    Add more water if needed, 1 tablespoon at a time. Transfer to an oiled work surface and knead until smooth. Then, place it into an oiled bowl, cover with plastic wrap and refrigerate overnight (12 hours).
    After chilled
    Cut the now chilled dough into 2 equal halves. Wrap them individually and let them sit at room temp for at least 1 hour.
    Pizza Stone/oven
    Place a pizza stone in the oven BEFORE preheating the oven to 550 degrees. Need that pizza stone to be up to temp. When you are at this step it is recommended to prep the toppings and sauce for the pizza while the oven is warming up.
    **warning when placing, adjusting and removing the pizza, do not remove the pizza stone from the oven, the sudden change in temp provide a high chance for the stone to break. When done cooking turn off the oven and let the pizza stone sit until completely cool**
    Work the dough
    Get out your pizza peel and dust it generously with some flour. Generously dust a open work surface with all purpose flour or bread flour, this is to make sure it doesn’t stick to the work surface, if it sticks it will tear that will be super messy. Get out 1 dough piece and gently with your fingertips, working your way around and out from the center, push the dough out to form an 8-inch round dough, work evenly otherwise you will get thin spots where it cant tear easier or wont cook evenly leave it a little higher on the edge for that nice crust.
    This is where its gets a little tricky and will take some practice, pick up the round of the dough (near the edge) and make a fist in both hands, let it sit on your knuckles and let gravity stretch it for you. Go hand over hand until the dough is about 14-inchs round. After reaching desired roundness set the dough on the preprepared pizza peel and reshape to a circle and again leaving the edges a little thicker.
    </p>,
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
