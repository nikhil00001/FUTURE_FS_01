import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I'm a <b>B.Tech Biotechnology</b> student at{" "}
      <a href="https://nitdgp.ac.in/" target="_blank" rel="noopener noreferrer">
        NIT Durgapur
      </a>
      , with hands-on experience building full-stack web applications and
      AI-integrated platforms. I've worked on freelance projects, institutional
      websites, and internship tasks — and I hold certifications from{" "}
      <a href="https://cs50.harvard.edu/" target="_blank" rel="noopener noreferrer">
        HarvardX (CS50x, CS50P, CS50W)
      </a>
      .
    </p>
  );
  const two = (
    <p>
      Outside of coding, I'm an active member of{" "}
      <b>Glug and Recursion</b>, NIT Durgapur's coding clubs, where I
      participate in hackathons, solve problems on LeetCode (70+ problems), and
      contribute to the tech community on campus.
    </p>
  );

  const techStack = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js / Next.js",
    "Node.js / Express.js",
    "Python",
    "MongoDB / Firebase",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Nikhil Pandit" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
