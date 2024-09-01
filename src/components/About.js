import React from "react";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg"; // Replace with your own profile picture

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src={profilePic} alt="Justin Hutzler" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a developer with experience in creating innovative solutions
            using modern technologies. My passion lies in transforming ideas
            into reality through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
