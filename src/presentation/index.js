// Import React
import React from "react";

import ReactDOM from "react-dom";

// Import Playground
import Playground from "component-playground";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import CSS
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Text,
  Image,
  Layout,
  Fill,
  Appear
} from "spectacle";

import { Underline, PlaygroundContainer } from "../custom/components";

import theme from "../custom/theme";

const images = {
  logo: require("../assets/logo.png"),
  home: require("../assets/home.png"),
  menu: require("../assets/menu.png"),
  signUp: require("../assets/signup.png")
};

const snippets = {
  onChange: require("../assets/onchange-snippet"),
  conditional1: require("../assets/conditional1-snippet"),
  conditional2: require("../assets/conditional2-snippet"),
  router: require("../assets/react-router-snippet")
};

preloader(images);

const blueSage = "https://blusagecatering.com";

class Presentation extends React.Component {
  handleClick = () => {
    window.open(blueSage, "_blank");
  };

  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="#FF3333">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            My Catering Website!
            <Fill>
              <Image width="100%" src={images.logo} />
            </Fill>
          </Heading>
        </Slide>
        <Slide bgColor="#FF3333">
          <Heading size={4} textColor="primary">
            I'm not going to take up too much of your time, this is more along
            the lines of a Week 1 project...
          </Heading>
        </Slide>
        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            What my site was supposed to look like...
          </Heading>
          <button
            style={{
              bgColor: "secondary",
              borderRadius: "50%",
              fontSize: "20px"
            }}
            onClick={this.handleClick}
          >
            {" "}
            Click me{" "}
          </button>
        </Slide>
        <Slide transition={["fade"]} bgColor="#FF3333">
          <Heading size={1} textColor="primary">
            Here's what I have to show...
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="#FF3333">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            A Basic Home Page.. React App with some Bootstrap
            <Fill>
              <Image width="100%" src={images.home} />
            </Fill>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="#FF3333">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Menu Tabs Page..
            <Fill>
              <Image width="100%" src={images.menu} />
            </Fill>
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="#FF3333">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            A Basic Sign Up Page..
            <Fill>
              <Image width="100%" src={images.signUp} />
            </Fill>
          </Heading>
        </Slide>
        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            To be completed..
          </Heading>
          <Appear>
            <Text>Everything?!...</Text>
          </Appear>
          <Appear>
            <Text>
              - Routes - no external API, but building of our own 'API' for the
              storage of menus / snack items/ specials.
              <br />- To be implemented with React Router / DB Setup for storage
              of user info/orders / Firebase for Auth / Image Storage
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            To be completed..
          </Heading>
          <Appear>
            <Text>
              - Auth - User and Admin Rights.
              <br />
              - As a User, you're allowed to view and place orders.
              <br />
              - As an Admin, you're able to add specials, items, adjust costs
              ...
              <br />
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            My challenges..
          </Heading>
          <Appear>
            <Text>
              - Poor Time Management with other responsibilites...
              <br />- Hard lucks TA's - I would have taken your approach if I
              could have!
            </Text>
          </Appear>
          <Appear>
            <Text>- Linking Firebase with React...</Text>
          </Appear>
          <Appear>
            <Text>- Was a bit rusty when it came to coding...</Text>
          </Appear>
        </Slide>
        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            So... what's next?
          </Heading>

          <Appear>
            <Text>To finish this app, certificate or not!</Text>
          </Appear>
        </Slide>

        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            Thank you for your Time and Patience!
            
          </Heading>
        </Slide>

        <Slide bgColor="#FF3333">
          <Heading size={2} textColor="primary">
            Questions?
          </Heading>
          <Underline />
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;

