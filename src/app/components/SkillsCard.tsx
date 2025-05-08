import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiSass, SiCss3, SiHtml5 } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import Styles from "./SkillsCard.module.scss";

const SkillsCard = () => {
  return (
    <div>
              {/* React */}
      <div className={Styles.skillsCardContainer}>
        <div className={Styles.skill}>
          <FaReact className="skill-icon" />
          <h3>React</h3>
        </div>

        {/* Next.js */}
        <div className={Styles.skill}>
          <SiNextdotjs className="skill-icon" />
          <h3>Next.js</h3>
        </div>

        {/* Angular */}
        <div className={Styles.skill}>
          <FaAngular className="skill-icon" />
          <h3>Angular</h3>
        </div>

        {/* JavaScript */}
        <div className={Styles.skill}>
          <SiJavascript className="skill-icon" />
          <h3>JavaScript</h3>
        </div>

        {/* TypeScript */}
        <div className={Styles.skill}>
          <SiTypescript className="skill-icon" />
          <h3>TypeScript</h3>
        </div>

        {/* Sass */}
        <div className={Styles.skill}>
          <SiSass className="skill-icon" />
          <h3>Sass</h3>
        </div>

        {/* HTML */}
        <div className={Styles.skill}>
          <SiHtml5 className="skill-icon" />
          <h3>HTML</h3>
        </div>

        {/* CSS */}
        <div className={Styles.skill}>
          <SiCss3 className="skill-icon" />
          <h3>CSS</h3>
        </div>

        {/* Firebase */}
        <div className={Styles.skill}>
          <RiFirebaseFill className="skill-icon" />
          <h3>Firebase</h3>
        </div>
        </div>
    </div>
  )
}

export default SkillsCard