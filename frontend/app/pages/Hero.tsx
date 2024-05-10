import React from "react";
import background from "../assets/heroBackground.png";

const Hero = () => {
  return <div style={{ backgroundImage: `url(${background})` }}></div>;
};

export default Hero;
//className="bg-[url('app/assets/heroBackground.png')]"
