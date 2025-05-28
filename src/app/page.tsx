import SkillsCard from "./components/SkillsCard";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import Styles from "./page.module.scss";
import HeroCard from "./components/HeroCard";


export default function Home() {
  return (
    <main className={Styles.main}>
      <div className="hero">
              {/* Project Cards */}
        <HeroCard />
      </div>

      {/* Skills */}
      <SkillsCard />

      {/* Projects */}
            {/* Projects */}
            <h3 className={Styles.sectionHeader}>Projects</h3>

{/* Project Cards */}

<ProjectCard 
  imageUrl="JoltDigital.png" 
  title="Jolt Digital Marketing" 
  technologies={["NextJS", "Sass", "Firebase", "React"]} 
  description="I created the Jolt Digital site as a way to showcase my services to businesses and artists alike. From web development to
  social media management, Jolt has you covered." 
  links={{
    liveDemo: "https://www.joltforyou.com/",
    github: ""
  }}
/>

<ProjectCard 
  imageUrl="HaikuRiver.png" 
  title="Haiku River" 
  technologies={["NextJS", "React", "Sass", "Firebase"]} 
  description="Haiku River is a poetry platform for users to create, share, and discover new pieces. 
  Social features and a seamless UI make creating and sharing poetry approachable and fun." 
  links={{
    liveDemo: "https://haiku-river.vercel.app/stream",
    github: ""
  }}
/>


{/* <ProjectCard 
  imageUrl="Shopular.png" 
  title="Shopular" 
  technologies={["Angular", "Sass", "Firebase"]} 
  description="Shopular is an Angular ecommerce application template that I have created to demonstrate my knowlege of the framework.
  Set up for easy Stripe integration, intuitive store pickup, and a modern experience, Shopular is my go-to project for customizable 
  ecommerce projects." 
  links={{
    liveDemo: "",
    github: ""
  }}
/> */}

{/* <ProjectCard 
  imageUrl="CrunchTap.png" 
  title="Crunch Tap" 
  technologies={["NextJS", "Sass", "Firebase"]} 
  description="Crunch Tap is an upcoming NextJS application that will allow users to track their fitness goals and optimize their workouts.
  Using proven methods and techniques, Crunch Tap game-ifies exercise for users of all fitness levels." 
  links={{
    liveDemo: "",
    github: ""
  }}
/> */}

      {/* Experience */}
      <h3 className={Styles.sectionHeader}>Education</h3>
      {/* Master's in PR */}
      <div className="experience">
        <ExperienceCard 
          position="Master's of PR, Social Media, and Advertising" 
          company="POINT PARK UNIVERSITY" 
          duration="May 2027" 
          description="Continued education at Point Park University to achieve a Master's Degree. Expected graduation in May 2027."
        />
      </div>

      {/* Bachelor's in CS */}
      <div className="experience">
        <ExperienceCard 
          position="Bachelor's of Computer Science" 
          company="POINT PARK UNIVERSITY" 
          duration="May 2025" 
          description="Achieved a Bachelor's Degree of Computer Science at Point Park in June 2024."
        />
      </div>

      {/* Work Experience */}
      <h3 className={Styles.sectionHeader}>Experience</h3>

      {/* Pennmac */}
      <div className="experience">
        <ExperienceCard 
          position="Website Administrator" 
          company="PENNSYLVANIA MACARONI COMPANY" 
          duration=""
          description="At Pennsylvania Macaroni Company, I was responsible for the maintenance and development of the company's ecommerce site. I routinely updated the site with new products, descriptions, photographs and more. In addition to updating inventory, I also created custom components for the existing site to improve user experience, functionality, design, and SEO optimization. The updated navigation bar and mobile responsiveness were two of the most significant changes I made to the site. Product photohraphy and editing were also a large part of my role at PennMac, as I was responsible for taking and editing photos of the company's products to add to the site."
        />
      </div>

      {/* FNB */}
      <div className="experience">
        <ExperienceCard 
          position="Application Development Co-op" 
          company="FIRST NATIONAL BANK" 
          duration="" 
          description="For my four-month full-time Application Development Co-Op position at FNB, I helped create an internal loan-review application using ANGULAR, JAVA, and SQL. Daily meetings with the team to discuss progress allowed me to experience leading a project from start to finish."
        />
      </div>

      {/* Red House */}
      <div className="experience">
        <ExperienceCard 
          position="Creative Marketing Intern" 
          company="RED HOUSE COMMUNICATIONS" 
          duration="" 
          description="At the Emmy Award-Winning advertising agency, I worked with both the creative and account teams to understand the process of executing a successful campaign. I created grahics, mockup sites, wireframes, and participated in weekly client meetings for the University of Maryland campaign."
        />
      </div>

      {/* Staples */}
      <div className="experience">
        <ExperienceCard 
          position="Technical Specialist" 
          company="STAPLES" 
          duration="" 
          description="At the electronics and office supply store Staples, I was responsible for the repair and maintenance of customers' computers, printers, and other devices. Besides PC tune-ups and virus removal, I also matched customers with the best products for their specific needs, provided demonstrations, and managed company metrics like rewards sign-ups, warranty goals, and sales."
        />
      </div>

      {/* Community Experience */}
      <h3 className={Styles.sectionHeader}>Community</h3>
        
      <div className="experience">
        <ExperienceCard 
          position="Team Lead" 
          company="Forward Majority" 
          duration="" 
          description="During the 2024 election season, I supervised a team of around 40 canvassers- organizing daily practices sessions, leading morning meetings, scouting loctions, creating graphics for the office, and assuring that each staff member adhere to the organization guidelines and Pennsylvania law. After practice and planning, I led a smaller team of 3-4 team members in the field, consisting of various malls and shopping centers in the Northwest Pennsylvania region. This campaign ran from May to October 2024."
        />
      </div>

      <div className="experience">
        <ExperienceCard 
          position="Team Lead" 
          company="For Our Future" 
          duration="" 
          description="For the latter half of the 2022 Pennsylvania Senate Race, I worked on a door-to-door voter contact campaign for the grassroots organization For Our Future. Here, I assured that everyone in my community registered to vote, knew where their polling location is, and were excited about the election!"
        />
      </div>

      <div className="experience">
        <ExperienceCard 
          position="Community Outreach Staff" 
          company="Planned Parenthood" 
          duration="" 
          description="For the first half of my involvement in the 2022 Pennsylvania Senate election season, I went door-to-door in my community to inform voters about the upcoming election and the importance of various issues."
        />
      </div>
        
    </main>
  );
}
