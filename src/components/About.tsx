import { Component } from "solid-js";
import francis from "../assets/francis-1.jpg";
import {
  BiLogosGithub as GithubIcon,
  BiLogosTwitter as TwitterIcon,
  BiLogosLinkedin as LinkedlnIcon,
} from "solid-icons/bi";

const About: Component<{}> = () => {
  return (
    <section id="about" class="p-10">
      <div class="flex flex-col md:flex-row justify-start bg-slate-00 text-primary ">
        <div class="md:w-1/2">
          <h1 class="group flex items-center py-3">
            <span class="mr-4 h-px w-8 bg-foreground "></span>
            <span class="nav-text text-xs font-bold uppercase tracking-widest text-foreground">
              About
            </span>
          </h1>
          <div class="pr-5">
            <p class="mb-4">
              Hello! My name is Francis and I love building{" "}
              <span class="text-destructive bg-destructive-foreground font-bold">
                Fast
              </span>{" "}
              web apps.
            </p>
            <p class="mb-4">
              I enjoy turning ideas and opportunities into software solutions
              that don't waste people's time. 🚀
            </p>
            <p class="mb-4">
              During the years I've had the chance to work with HTML, CSS and
              Javascript for the frontend. I also have fullstack experience with
              Node.js but I spend more time bringing to life beautiful UI
              experiences 😎.
            </p>
          </div>
          <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li class="mr-5 shrink-0 text-xs">
              <a
                class="block hover:text-slate-300"
                href="https://github.com/francisamidu"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
                title="GitHub"
              >
                <span class="sr-only">GitHub</span>
                <GithubIcon size={30} />
              </a>
            </li>
            <li class="mr-5 shrink-0 text-xs">
              <a
                class="block hover:text-slate-300"
                href="https://www.linkedin.com/in/francis-amidu-frontend-developer/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
              >
                <span class="sr-only">LinkedIn</span>
                <LinkedlnIcon size={30} />
              </a>
            </li>
            <li class="mr-5 shrink-0 text-xs">
              <a
                class="block hover:text-slate-300"
                href="https://x.com/iamfrancisamidu"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter (opens in a new tab)"
                title="Twitter"
              >
                <span class="sr-only">Twitter</span>
                <TwitterIcon size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div class="relative">
            <img
              src={francis}
              alt="Profile"
              class="rounded-lg shadow-lg z-10 w-4/5 h-auto"
            />
            <div class="absolute inset-0 border-2 border-destructive rounded-lg transform translate-x-4 translate-y-4 w-4/5 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
