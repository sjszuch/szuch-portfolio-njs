import Image from "next/image";
import SkillsCard from "./components/SkillsCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";


export default function Home() {
  return (
    <main>
      <div className="hero"></div>

      {/* Skills */}
      <SkillsCard />

      {/* Experience */}

      {/* Master's in PR */}
      <div className="experience">
        <h2>Experience</h2>
        <ExperienceCard 
          position="Master's of PR, Media, and Advertising" 
          company="Point Park University" 
          duration="May 2027" 
          description="Worked on various projects and gained valuable experience."
        />
      </div>

      {/* Bachelor's in CS */}
      <div className="experience">
        <ExperienceCard 
          position="Bachelor's of Computer Science" 
          company="University of Pittsburgh" 
          duration="May 2025" 
          description="Worked on various projects and gained valuable experience."
        />
      </div>

      {/* Projects */}
      <ProjectCard 
        imageUrl="HaikuRiver.png" 
        title="Haiku River" 
        technologies={["NextJS", "React", "Sass", "Firebase"]} 
        description="A project showcasing haikus with a beautiful UI." 
        links={{
          liveDemo: "https://haikuriver.com",
          github: "https://github.com/username/HaikuRiver"
        }}
      />




        

    </main>
  );
}
