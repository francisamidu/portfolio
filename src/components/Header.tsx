import { createSignal, For } from "solid-js";
import AppButton from "./Button";
import { HiSolidArrowDown as ArrowDown } from "solid-icons/hi";

const Header = () => {
  const [links, _setLinks] = createSignal(["about", "projects", "toolkit"]);
  return (
    <>
      <header class="min-h-screen w-full bg-slate-100">
        <nav class="p-3 max-w-screen-lg md:mx-auto">
          <div class="flex flex-row items-center justify-between">
            <a href="/" class="flex flex-row items-center">
              <img src="/logo-1.png" class="w-10 h-auto" />
              <span class="text3xl font-semibold ml-2">Francis Amidu</span>
            </a>
            <div class="flex flex-row items-center">
              <For each={links()}>
                {(item, index) => (
                  <>
                    <a
                      href={`#${item}`}
                      data-index={index()}
                      class="capitalize hover:!text-destructive
                      transition-colors duration-400"
                    >
                      {item}
                    </a>
                    {index() != links().length - 1 ? (
                      <span class="mx-2"> ~ </span>
                    ) : null}
                  </>
                )}
              </For>
            </div>
          </div>
        </nav>
        <div class="flex flex-col justify-center items-center">
          <img
            class="rounded-full border-5 border-white w-56 h-auto my-10"
            src="/francis.png"
          />
          <div class="text-xl text-center text-primary-accent-color font-light my-2">
            <p class="">
              Hello there, If you're looking for a developer who builds
            </p>
            <span class="font-bold text-sm bg-slate-200 p-[10px] py-[0px]">
              Fast
            </span>
            ,{" "}
            <span class="font-bold text-sm bg-slate-200 p-[10px] py-[0px]">
              Reliable
            </span>{" "}
            and{" "}
            <span class="font-bold text-sm bg-slate-200 p-[10px] py-[0px]">
              Responsive
            </span>
            <p>web experiences you're in the right place</p>
          </div>
          <div class="flex flex-row items-center my-4">
            <AppButton
              class="mr-1 py-3"
              text="Let's chat"
              size="lg"
              variant="default"
            />
            <AppButton
              class="ml-1 py-4"
              text="See my work"
              size="lg"
              variant="outline"
            />
          </div>
          <ArrowDown class="bouncing-arrow text-primary my-5" size={22} />
        </div>
      </header>
    </>
  );
};

export default Header;
