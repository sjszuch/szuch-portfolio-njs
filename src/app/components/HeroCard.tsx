import React from 'react';
import Styles from "./HeroCard.module.scss";
import { SiLinkedin, SiGithub } from "react-icons/si";


const HeroCard = () => {
  return (
    <div>
      <div className={Styles.projectCardContainer}>
        <div className={Styles.topCard}>
          <img src={'/Szuch.png'} alt={'A photo of me'} className={Styles.projectImage} />
        </div>

        <div className={Styles.bottomCard}>
          <h3>Sebastian Szuch</h3>
          <p>Full-Stack Developer. Marketing Specialist. Community Leader. No matter the project, I have the skills to get it done. Along with my education, I have an extensive background in technology that allows me to create beautiful, functional, and accessible designs- bringing your ideas to life.
</p>



          <div className={Styles.socialLinks}>
            <a href="/SzuchResume.pdf" target="_blank" rel="noopener noreferrer" className={Styles.resume}>
                View my Resume
            </a>
            <a href="https://www.linkedin.com/in/sjszuch/" target="_blank" rel="noopener noreferrer" className={Styles.link}>
                <SiLinkedin className={Styles.projectLinkIcon} />
            </a>
            <a href="https://github.com/sjszuch" target="_blank" rel="noopener noreferrer" className={Styles.link}>
                <SiGithub className={Styles.projectLinkIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
