import React from 'react'
import Styles from "./ExperienceCard.module.scss";

interface ExperienceCardProps {
    position: string;
    company: string;
    duration: string;
    description: string;
    };

const ExperienceCard = ({position, company, duration, description}: ExperienceCardProps) => {
  return (
    <div>
        <div className={Styles.experienceCardContainer}>
            <div className={Styles.topSection}>
                    <h3>{position}</h3>
                    <p>{company}</p>
                    <p>{duration}</p>
                    <p className={Styles.desc}>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard