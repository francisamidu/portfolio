import { Component } from "solid-js";

const About: Component<{}> = () => {
  return (
    <section id="about">
      <div class="flex flex-col md:flex-row items-center bg-slate-00 text-primary p-8">
        <div class="md:w-1/2">
          <h1 class="heading text-2xl mb-2 font-semibold relative w-fit">
            About me
          </h1>
          <p class="mb-4">
            Hello! My name is Francis and I love building{" "}
            <span class="text-secondary">Fast</span> web apps.
          </p>
          <p class="mb-4">
            I enjoy turning ideas and opportunities into software solutions that
            don't waste people's time.{" "}
          </p>
          <p class="mb-4">
            During the years I've had the chance to work with HTML, CSS and
            Javascript for the frontend. I also have backend experience with
            Node.js but I focus more on the client side.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div class="relative">
            <img
              src="../assets/francis-1.jpg"
              alt="Profile"
              class="rounded-lg shadow-lg"
            />
            <div class="absolute inset-0 border-2 border-teal-400 rounded-lg transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
