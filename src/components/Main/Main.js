import React from "react";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Main = () => {
  return (
    <div>
      <Services />
      <Contact />
      <Achievements />
      <Team />
    </div>
  );
};

export default Main;
