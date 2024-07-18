import { GithubIcon } from "../../public";

const About = () => {
  return (
    <section className="relative z-10 about_section" id="about">
      <div className="px-40 py-20 flex flex-col gap-11 w-full">
        <div className="z-20">
          <h1 className="text-3xl sm:text-6xl font-semibold tracking-wide">
            HarmoniSync
          </h1>
        </div>

        <div className="z-20">
          <div className="blue_gradient w-11 h-2 -translate-y-5" />
          <p className="text-xl">
            HarmoniSync was inspired by our passion for music and the desire to
            create a seamless listening experience. As part of our project for
            Holberton School, we aimed to develop a platform that integrates
            various music streaming services, allowing users to discover and
            enjoy their favorite tracks effortlessly. This project has enabled
            us to apply our skills in programming, UI/UX design, and API
            integration. We hope HarmoniSync brings you as much joy and
            convenience in listening to music as we experienced in building it.
          </p>
        </div>

        <div className="z-20 flex justify-end">
          <a
            href="https://github.com/DanielJohn17/HarmoniSync"
            target="_blank"
            className="flex gap-2 items-center px-5 py-1.5 bg-[var(--color-accent)] rounded-full text-white font-semibold hover:bg-cyan-600 transition-colors duration-200"
          >
            <div className="w-5 h-fit">
              <img src={GithubIcon} alt="github" className="object-contain" />
            </div>
            <p>Visit Project</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
