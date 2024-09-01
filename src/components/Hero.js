import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm Justin Hutzler, a passionate developer with a knack for crafting
          elegant solutions.
        </p>
        <a href="#projects" className="btn-cta">
          See My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
