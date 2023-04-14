import React from "react";

import "./MainContainer.css";
import Intro from "../intro/Intro";
import { About } from "../about/About";
import { Contact } from "../contact/Contact";

const MainCotainer = () => {
  return (
    <div className="main">
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default MainCotainer;
