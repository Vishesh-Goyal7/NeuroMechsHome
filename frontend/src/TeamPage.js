import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import logo from "./neuro.png";
import vitaLogo from "./name.png";
import { FaLink, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function TeamPage() {

  const team = [
    {
      name: "Tanishta",
      img: "/TANISHTA.jpeg",
      desc: "Drinking Java to code in Python.",
      links: {
        email: "mailto:tanishtak15@gmail.com",
        linkedin: "https://www.linkedin.com/in/tanishta-b1116b255/",
        github: "https://github.com/Tanishta15",
      },
    },
    {
      name: "Saketh Pradyumna",
      img: "/SAKETH.jpg",
      desc: "Training my model for the next run(way).",
      links: {
        email: "mailto:parasarampradyumna@gmail.com",
        linkedin: "https://www.linkedin.com/in/saketh-pradyumna-3b3b0b264/",
        github: "https://github.com/pradyumna4",
      },
    },
    {
      name: "Vishesh Goyal (Captain)",
      img: "/VISHESH.JPG", 
      desc: "Part philosopher, part full-stack AI sorcerer, codes systems by the day and questions existence by night.",
      links: {
        portfolio: "https://visheshverse.com",
        email: "mailto:visheshvishu1@outlook.com",
        linkedin: "https://linkedin.com/in/vishesh-goyal-2k5",
        github: "https://github.com/Vishesh-Goyal7",
      },
    }
  ];

  const [startAnimation, setStartAnimation] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
      setTimeout(() => setAnimationDone(true), 1000);
    }, 2000);  
  }, []);

  return (
    <div className="team-bg">
      {!animationDone && (
        <div className={`logo-wrapper ${startAnimation ? "shrink" : ""}`}>
          <img src={logo} alt="Team Logo" className="animated-logo" />
        </div>
      )}

      {animationDone && (
        <>
          <header className="fixed-logo-header">
            <img src={logo} alt="Logo" className="final-logo" />
          </header>

          <section className="team-hero">
            <h1 className="team-name">Team NeuroMechs</h1>
            <p className="team-tagline">"Brains, bytes, and breakthroughs!"</p>
          </section>

          <section className="team-about">
            <h2>About Us</h2>
            <p>
              We’re a band of caffeine-fueled code whisperers, AI wranglers, and design dreamers
              on a mission to outsmart medical uncertainty. Whether it’s translating coughs into
              code or making AI speak doctor, we live at the edge of tech and healthcare.
              We don’t just build solutions — we build the future (and debug it too).
            </p>
          </section>

          <section className="product-section">
            <img src={vitaLogo} alt="Vita AI Logo" className="product-logo" />
            <div className="product-info">
              <h2>Vita AI</h2>
              <p>
                Vita AI is our flagship medical diagnosis assistant built to augment doctors
                using Explainable AI. It predicts diseases based on symptoms and generates
                human-readable reports using SHAP values — bridging the gap between AI and trust.
              </p>

              <div className="product-buttons">
                <a href="https://vitaai.neuromechs.in" target="_blank" rel="noopener noreferrer">
                  <button className="product-btn">🌐 Live Demo</button>
                </a>
                <a href="https://github.com/Vishesh-Goyal7/NeuroMechs" target="_blank" rel="noopener noreferrer">
                  <button className="product-btn github">💻 GitHub</button>
                </a>
              </div>
            </div>
          </section>

          <section className="team-section">
            <h2>Meet The Team</h2>
            <div className="team-grid">
              {team.map((member, i) => (
                <div key={i} className="team-card">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.desc}</p>
                    <div className="team-icons">
                      {member.links.portfolio && (
                        <a href={member.links.portfolio} target="_blank" rel="noreferrer">
                          <FaLink />
                        </a>
                      )}
                      {member.links.email && (
                        <a href={member.links.email}>
                          <FaEnvelope />
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a href={member.links.linkedin} target="_blank" rel="noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {member.links.github && (
                        <a href={member.links.github} target="_blank" rel="noreferrer">
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Team NeuroMechs. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default TeamPage;
