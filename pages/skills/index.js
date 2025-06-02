import Metadata from "@/components/utilities/metadata";
import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiNginx,
  SiCloudflare,
  SiLinux,
  SiGit,
  SiGithub,
  SiGraphql,
  SiApollographql,
  SiJupyter,
  SiGooglecolab,
  SiAndroid,
  SiApple,
  SiExpo,
  SiSecurity,
  SiApache,
  SiAdobe,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAmazonaws,
} from "react-icons/si";

const SkillsPage = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: <SiPython />, link: "https://www.python.org/" },
    { name: "Django", icon: <SiDjango />, link: "https://www.djangoproject.com/" },
    { name: "PHP", icon: <SiPhp />, link: "https://www.php.net/" },
    { name: "Laravel", icon: <SiLaravel />, link: "https://laravel.com/" },
    { name: "SQL (MySQL, MongoDB, SQLite)", icon: <SiMysql />, link: "https://www.mysql.com/" },
    { name: "Firebase", icon: <SiFirebase />, link: "https://firebase.google.com/" },
    { name: "React.js", icon: <SiReact />, link: "https://react.dev/" },
    { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
    { name: "Node.js", icon: <SiNodedotjs />, link: "https://nodejs.org/en" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
    { name: "Bootstrap", icon: <SiBootstrap />, link: "https://getbootstrap.com/" },
    { name: "HTML5", icon: <SiHtml5 />, link: "https://www.w3.org/html/" },
    { name: "CSS3", icon: <SiCss3 />, link: "https://www.w3schools.com/css/" },
    { name: "Docker", icon: <SiDocker />, link: "https://www.docker.com/" },
    { name: "Apache", icon: <SiApache />, link: "https://www.apache.com/" },
    { name: "Cloudflare", icon: <SiCloudflare />, link: "https://www.cloudflare.com/" },
    { name: "Linux Server Management", icon: <SiLinux />, link: "https://www.linux.org/" },
    { name: "Git", icon: <SiGit />, link: "https://git-scm.com/" },
    { name: "GitHub", icon: <SiGithub />, link: "https://github.com" },
    { name: "React Native", icon: <SiReact />, link: "https://reactnative.dev/" },
    { name: "Expo", icon: <SiExpo />, link: "https://expo.dev/" },
    { name: "Google Colab", icon: <SiGooglecolab />, link: "https://colab.research.google.com/" },
    { name: "Jupyter Notebook", icon: <SiJupyter />, link: "https://jupyter.org/" },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, link: "https://adobe.com/" },
    { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro />, link: "https://adobe.com/" },
    { name: "Adobe After Effect", icon: <SiAdobeaftereffects />, link: "https://adobe.com/" },
    { name: "Adobe Audition", icon: <SiAdobeaudition />, link: "https://adobe.com/" },
    { name: "AWS", icon: <SiAmazonaws />, link: "https://aws.com/" },
  ];

  const softSkills = [
    "Problem-Solving & Critical Thinking",
    "Cognitive Empathy",
    "Adaptive Learning",
    "Solo Founder",
    "Defensive Strategic",
    "Independent & Self-Starter",
  ];

  return (
    <>
      <Metadata
        title="Portfolio - Skills"
        description="List of technologies, programming languages, and tools I have expertise in."
        image="/metadata/home.png"
        url="skills"
      />
      <section id="skills" className="pt-36 pb-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Skills
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Technologies, Programming Languages, and Tools Expertise
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg mt-10">
                In the world of technology, having deep knowledge of multiple programming languages and critical tools is the key to tackling modern challenges. I have developed significant expertise in various domains, allowing me to build strong and efficient solutions. <br />
                <br />
                Below is a list of the technologies, programming languages, and tools I have mastered.
              </p>
            </div>
          </div>
          <div className="w-full pr-5">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 items-center justify-center">
              {skills.map((skill, index) => (
                <a
                  key={index}
                  href={skill.link}
                  target="_blank"
                  className="group mx-4 max-w-[80px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 ease-in-out hover:scale-110"
                >
                  {skill.icon}
                  <span className="icon-skill absolute top-[5.5rem] right-[0.2rem] scale-0 rounded bg-dark text-white dark:bg-white dark:text-dark p-2 text-xs group-hover:scale-100 transition duration-300 ease-in-out font-bold">
                    {skill.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="w-full px-4 mt-10">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                Soft Skills
              </h4>
              <ul className="text-medium font-medium text-secondary md:text-lg mt-5 list-disc list-inside">
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SkillsPage;
