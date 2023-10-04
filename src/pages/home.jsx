import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = [
  "Welcome",
  "Välkommen",
  "Yōkoso",
  "Bienvenido",
  "Bienvenue"
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
* The Home function defines the content that makes up the main content of the Home page
*
* This component is attached to the /about path in router.jsx
* The function in app.jsx defines the page wrapper that this appears in along with the footer
*/

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  const [hello, setHello] = React.useState(strings[0]);
  
  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    
    // Choose a new Hello from our languages
    const newHello = randomLanguage();
    
    // Call the function to set the state string in our component
    setHello(newHello);
  };
  return (
    <>
      <h1 className="title">{hello}!</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://www.bc.edu/content/bc-web/offices/office-of-university-communications/policies-guidelines/graphic-identity-system/_jcr_content/par/responsive_columns/col1/bc_image_content/image.img.png/1550507443010.png"
          className="centered-image"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>
          <a className="btn--click-me" onClick={handleChangeHello}>
            Psst, click me
          </a>
        </animated.div>
      </div>
      <div className="instructions">
        <h2>Navigating this webpage</h2>
        <p1>
          This is my <strong>Data Journalism</strong> project. There are two separate links {" "}
          <Link href="/part1">Part 1</Link> and {" "}
          <Link href="/part2">Part 2</Link>. Each one containing the corresponding sections of the Design & Redesign project.
        </p1>
      </div>
    </>
  );
}

/*Encoding a link within a text
You can use
it to build your own app. See more info in the{" "}
<Link href="/about">About</Link> page, and check out README.md in the
editor for additional detail plus next steps you can take!*/