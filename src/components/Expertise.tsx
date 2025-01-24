import { createSignal, For } from "solid-js";
import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/css-3.png";
import golfFittingImage from "../assets/golf-fitting.png";
import javaScriptLogo from "../assets/js.png";
import medisyncImage from "../assets/medi-sync.png";
import reactLogo from "../assets/science.png";
import solidLogo from "../assets/solid.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import nodeJsLogo from "../assets/nodejs.png";
import viteLogo from "../assets/vite.svg";
import {
  BiRegularLaptop as LaptopIcon,
  BiLogosGithub as GithubIcon,
  BiRegularGlobe as GlobeIcon,
  BiRegularLinkExternal as LinkIcon,
} from "solid-icons/bi";
import { TProject } from "@/types/Project";
import AppButton from "./Button";

const Expertise = () => {
  const [tools, _setT] = createSignal([
    {
      name: "Css",
      image: cssLogo,
    },
    {
      name: "HTML",
      image: htmlLogo,
    },
    {
      name: "JavaScript",
      image: javaScriptLogo,
    },
    {
      name: "Node.js",
      image: nodeJsLogo,
    },
    {
      name: "React",
      image: reactLogo,
    },
    {
      name: "SolidJs",
      image: solidLogo,
    },
    {
      name: "Tailwind",
      image: tailwindLogo,
    },
    {
      name: "Vite",
      image: viteLogo,
    },
  ]);
  const [projects, _setP] = createSignal<TProject[]>([
    {
      name: "Medisync",
      media: "image",
      link: medisyncImage,
      description:
        "A modern and intuitive Health Terms Dashboard designed to simplify access to healthcare terminologies. Built for healthcare professionals, students, and patients, this platform offers streamlined search, categorization, and educational insights into complex medical terms.",
      githubLink: "https://github.com/francisamidu/health-terms-frontend",
      websiteLink: "https://health-terms.francis.dev",
    },
    {
      name: "Golf Fitting",
      media: "image",
      link: golfFittingImage,
      description:
        "The Golf Club Fitting Dashboard is designed to streamline the process of scheduling, managing, and analyzing golf club fitting services. It provides a user-friendly interface for customers and administrators to interact seamlessly.",
      githubLink: "https://github.com/francisamidu/Golf-Club-Fitting",
      websiteLink: "#",
    },
  ]);
  return (
    <section class="p-4 bg-slate-200" id="expertise">
      <div class="flex flex-col md:flex-row items-start justify-between md:px-2">
        <div class="flex flex-col md:w-2/5">
          <h1 class="font-semibold text-xl my-3">{` <>Tooling</>`}</h1>
          <div class="grid grid-cols-3 gap-9 p-5">
            <For each={tools()}>
              {(item) => (
                <div class="flex flex-col items-center">
                  <img class="h-[130px] w-auto rounded-md" src={item.image} />
                  <h2 class="font-semibold mt-3">{item.name}</h2>
                </div>
              )}
            </For>
          </div>
        </div>

        <div class="flex flex-col md:w-3/5">
          <h1 class="font-semibold text-xl my-3 flex flex-row">
            <span>Projects</span>
            <LaptopIcon class="ml-2" size="35" />
          </h1>
          <div class="flex flex-col">
            <For each={projects()}>
              {(item) => (
                <div class="flex flex-col md:flex-row md:p-4 p-2">
                  {item.media == "video" ? null : (
                    <img
                      class="h-[200px] md:h-[155px] w-auto rounded-md"
                      src={item.link}
                    />
                  )}
                  <div class="flex flex-col  mt-6 md:mt-0 md:ml-3">
                    <a
                      href={item.websiteLink}
                      class="text-xl font-semibold leading-4 hover:cursor-pointer flex flex-row items-center"
                      target="_blank"
                    >
                      <span class="mr-2">{item.name}</span>
                      <LinkIcon size={18} />
                    </a>
                    <p class="mt-2">{item.description.slice(0, 100)}....</p>
                    <div class="flex flex-row mt-5">
                      <a href={`${item.githubLink}`}>
                        <AppButton
                          icon={<GithubIcon class="ml-2" size={20} />}
                          text="Github"
                          variant="secondary"
                        />
                      </a>
                      <a href={`${item.websiteLink}`}>
                        <AppButton
                          icon={<GlobeIcon class="ml-2" size={20} />}
                          text="Website"
                          variant="link"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
