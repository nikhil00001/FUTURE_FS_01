import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spotlightProjects = [
    {
      title: "Prepwise AI",
      desc: "An AI-powered mock interview platform that conducts real-time, voice-based interviews. Integrates Vapi AI for human-like conversations and Google Gemini for personalized question and feedback generation.",
      techStack: "Next.js · Firebase · Vapi AI · Google Gemini · Tailwind CSS",
      link: "https://github.com/nikhil00001/project_prepwise_ai",
      open: "",
    },
    {
      title: "FreshNFix",
      desc: "A full-stack MERN e-commerce application for a grocery startup. Features passwordless auth via AWS Cognito & SNS, Razorpay payment gateway, and a full-featured admin dashboard.",
      techStack: "React.js · Node.js · Express.js · MongoDB · AWS Cognito · Razorpay",
      link: "https://github.com/nikhil00001/FUTURE_FS_03",
      open: "",
    },
    {
      title: "Mini CRM",
      desc: "A Client Lead Management System built as a MERN stack internship project. Tracks client leads across pipeline stages with a clean dashboard, deployed via MongoDB Atlas, Render, and Vercel.",
      techStack: "React.js · Node.js · Express.js · MongoDB Atlas · Render · Vercel",
      link: "https://github.com/nikhil00001/FUTURE_FS_02",
      open: "",
    },
  ];

  const projects = [
    {
      title: "Alumination 2025",
      desc: "Responsive single-page website for NIT Durgapur's alumni fest. Features scroll-triggered animations and event modals in vanilla JS.",
      techStack: "HTML · CSS · JavaScript",
      link: "https://github.com/nikhil00001/Alumination",
      open: "",
    },
    {
      title: "Invisibility Cloak",
      desc: "Real-time invisibility cloak effect using Python and OpenCV. Uses HSV-based color detection, image masking, and background subtraction on a live video feed.",
      techStack: "Python · OpenCV · NumPy",
      link: "https://github.com/nikhil00001/Invisibility-Cloak",
      open: "",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + spotlightProjects.length) % spotlightProjects.length);
  const next = () => setCurrent((c) => (c + 1) % spotlightProjects.length);

  const renderSpotlightDesktop = () => (
    <div className="spotlight-projects-desktop">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button onClick={prev} style={arrowStyle}>&#8249;</button>
        <div className="projects-card" style={{ flex: 1 }}>
          <div className="card-header">
            <FolderOpenRoundedIcon className="folder-icon" />
            <ExternalLinks
              githubLink={spotlightProjects[current].link}
              openLink={spotlightProjects[current].open}
            />
          </div>
          <div className="card-title">{spotlightProjects[current].title}</div>
          <div className="card-desc">{spotlightProjects[current].desc}</div>
          <div className="card-tech">{spotlightProjects[current].techStack}</div>
        </div>
        <button onClick={next} style={arrowStyle}>&#8250;</button>
      </div>
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        {spotlightProjects.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              display: "inline-block",
              width: 8, height: 8,
              borderRadius: "50%",
              margin: "0 4px",
              cursor: "pointer",
              backgroundColor: i === current ? "var(--green-bright)" : "var(--lightest-navy)",
              transition: "background 0.2s"
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderSpotlightMobile = () => (
    <div className="spotlight-projects-mobile">
      {spotlightProjects.map((proj, i) => (
        <div className="projects-card" key={i}>
          <div className="card-header">
            <FolderOpenRoundedIcon className="folder-icon" />
            <ExternalLinks githubLink={proj.link} openLink={proj.open} />
          </div>
          <div className="card-title">{proj.title}</div>
          <div className="card-desc">{proj.desc}</div>
          <div className="card-tech">{proj.techStack}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
      </div>

      <FadeInSection>
        {isDesktop ? renderSpotlightDesktop() : renderSpotlightMobile()}
      </FadeInSection>

      <FadeInSection>
        <div style={{ fontFamily: "NTR", color: "var(--slate)", fontSize: "20px", margin: "40px 0 16px" }}>
          other things i've built
        </div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="projects-card">
                <div className="card-header">
                  <FolderOpenRoundedIcon className="folder-icon" />
                  <ExternalLinks githubLink={proj.link} openLink={proj.open} />
                </div>
                <div className="card-title">{proj.title}</div>
                <div className="card-desc">{proj.desc}</div>
                <div className="card-tech">{proj.techStack}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

const arrowStyle = {
  background: "none",
  border: "1px solid var(--green-bright)",
  color: "var(--green-bright)",
  fontSize: "32px",
  borderRadius: "8px",
  padding: "4px 14px",
  cursor: "pointer",
  flexShrink: 0,
  lineHeight: 1,
};

export default Projects;
