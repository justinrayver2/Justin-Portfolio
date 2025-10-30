import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
    { name: "React + Vite", icon: <FaReact color="#61dafb" /> },
    { name: "UI/UX Design (Figma)", icon: <FaFigma color="#a259ff" /> },
    { name: "Git & Version Control", icon: <FaGitAlt color="#f1502f" /> },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "Built with React + Vite, featuring smooth animations and responsive design.",
      demo: "https://vercel.com/justin-rayver-llagunos-projects/justin-rl-portfolio",
      github: "https://github.com/justinrayver2/Justin-RL-Portfolio",
    },
    {
      title: "MyWay",
      desc: "If You're Lost in the Code, We'll Help You Find the Road",
      demo: "https://my-way-frontend.vercel.app/",
    },
    {
      title: "UI/UX Landing Page",
      desc: "Stylish product landing page with animations and responsive layout.",
      demo: "https://www.figma.com/file/bEm6WZiCrQEuGs4T4PC5aI/MyWay_Compile",
    },
  ];

  return (
    <section id="portfolio" className="wrapper">
      <h2 className="section-title">Portfolio & Skills</h2>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="projects">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => window.open(project.demo, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              {project.github && (
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
