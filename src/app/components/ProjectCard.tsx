import React from 'react';
import Styles from "./ProjectCard.module.scss";
import { SiNextdotjs, SiJavascript, SiTypescript, SiSass, SiCss3, SiHtml5 } from "react-icons/si";
import { FaAngular, FaReact } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  links: {
    liveDemo: string;
    github: string;
  };
  resume?: string;
  linkedIn?: string;
}

// Mapping tech keywords to icons and labels
const techIconMap: Record<string, { icon: React.ReactElement; label: string }> = {
  nextjs: { icon: <SiNextdotjs className={Styles.techIcon} />, label: "Next.js" },
  react: { icon: <FaReact className={Styles.techIcon} />, label: "React" },
  typescript: { icon: <SiTypescript className={Styles.techIcon} />, label: "TypeScript" },
  javascript: { icon: <SiJavascript className={Styles.techIcon} />, label: "JavaScript" },
  sass: { icon: <SiSass className={Styles.techIcon} />, label: "Sass" },
  css: { icon: <SiCss3 className={Styles.techIcon} />, label: "CSS3" },
  html: { icon: <SiHtml5 className={Styles.techIcon} />, label: "HTML5" },
  angular: { icon: <FaAngular className={Styles.techIcon} />, label: "Angular" },
  firebase: { icon: <RiFirebaseFill className={Styles.techIcon} />, label: "Firebase" },
};

const ProjectCard = ({ imageUrl, title, description, technologies, links }: ProjectCardProps) => {
  return (
    <div>
      <div className={Styles.projectCardContainer}>
        <div className={Styles.topCard}>
          <img src={imageUrl} alt={`${title} preview`} className={Styles.projectImage} />
        </div>

        <div className={Styles.bottomCard}>
          <h3>{title}</h3>

          <div className={Styles.techStack}>
            {technologies.map((tech) => {
              const techData = techIconMap[tech.toLowerCase()];
              if (!techData) return null;
              return (
                <div key={tech} className={Styles.techIconContainer}>
                  {techData.icon}
                  <p>{techData.label}</p>
                </div>
              );
            })}
          </div>

          <p>{description}</p>

          <div className={Styles.projectLinks}>
            {links.liveDemo && (
              <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">
                <button className={Styles.projectButton}>View Site</button>
              </a>
            )}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <button className={Styles.projectButton}>GitHub</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
