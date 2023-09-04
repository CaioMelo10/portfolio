import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGit,
  DiGithub,
  DiLinux,
  DiBootstrap



} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "react", name: "MongoDB", icon: <DiMongodb /> },
  { id: "react", name: "Git", icon: <DiGit /> },
  { id: "react", name: "Github", icon: <DiGithub /> },
  { id: "react", name: "Linux", icon: <DiLinux /> },
  { id: "react", name: "Bootstrap", icon: <DiBootstrap/> },

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Tecnologias que eu tenho conhecimento</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
