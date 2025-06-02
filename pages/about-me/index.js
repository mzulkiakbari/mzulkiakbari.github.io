import Metadata from "@/components/utilities/metadata";
import {
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - About Me"
        description="I am Zul"
        image="/metadata/home.png"
        url="tentang-saya"
      />

      <section className="pb-32 pt-32 transition duration-300 ease-in-out dark:bg-dark lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                About Me
              </h4>

              <h2 className="mb-5 max-w-lg text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                The World Is Better With{" "}
                <span className="ml-1 inline-block -rotate-1 rounded-xl bg-gradient-to-r via-primary/20 px-4 py-1.5 text-lg tracking-tight shadow-2xl shadow-primary/[0.50] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">
                  AI.
                </span>
              </h2>

              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                I am Muhammad Zulki Akbari, a passionate programmer and tech enthusiast specializing in web development, application development, and digital solutions. With expertise in React, Next.js, Laravel, Python, and DevOps, I am always looking for ways to create more efficient and automated systems. For me, technology is not just a tool but a bridge to a better future.
                <br />
                <br />
                I take a hands-on, problem-solving approach to technology. Instead of just following theoretical concepts, I prefer to understand how things work through experimentation and real-world implementation. With a defensive pessimism mindset, I always plan for the worst-case scenario, ensuring every project I develop has backup solutions for any challenge.
                <br />
                <br />
                Beyond technical skills, I possess strong soft skills in cognitive empathy, critical thinking, and adaptive learning. I quickly grasp different perspectives, whether from users or team members. I adapt fast to new technologies without relying on conventional learning paths, allowing me to stay ahead of innovation and overcome technical challenges effectively.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:pt-10 lg:text-4xl">
                Connect With Me
              </h2>

              <p className="mb-6 text-base font-medium text-secondary lg:mt-14 lg:text-lg">
                I am always open to collaboration, project discussions, and knowledge-sharing in the tech industry. If you are a developer, startup founder, or investor interested in application development and digital solutions, let's connect! I believe that technological progress relies not only on individual skills but also on strong teamwork and a shared vision.
                <br />
                <br />
                Aside from working on personal projects, I actively engage in discussions with fellow developers to exchange insights and explore emerging tech trends. I strongly believe in knowledge-sharing as a key driver for greater innovation. I also have expertise in leadership and team coordination, ensuring smooth project execution and efficient workflows in small teams.
<br />
<br />
If you're looking to discuss ideas, explore new opportunities, or collaborate on exciting projects, feel free to reach out. I'm always ready to explore new possibilities and build impactful digital solutions!
              </p>

              <div className="flex items-center">
                {/* Github */}
                <a
                  href="https://github.com/mzulkiakbari"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGithub className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitHub
                  </span>
                </a>

                {/* GitLab
                <a
                  href="https://gitlab.com/armandwipangestu"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGitlab className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitLab
                  </span>
                </a>

                {/* Youtube
                <a
                  href="https://www.youtube.com/channel/UCqo9Q_EpEJWGJLB2xmm_g3A"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaYoutube className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    YouTube
                  </span>
                </a> */}

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mzulkiakbari/"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaInstagram className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    Instagram
                  </span>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/mzulkiakbar"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaLinkedin className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
