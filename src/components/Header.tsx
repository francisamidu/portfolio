import { createEffect, createSignal, For, onCleanup } from "solid-js";
import AppButton from "./Button";
import { HiSolidArrowDown as ArrowDown } from "solid-icons/hi";
import { BiRegularMenu as MenuIcon } from "solid-icons/bi";

const Header = () => {
  const [links, _setLinks] = createSignal(["about", "expertise", "contact"]);
  const [isScrolled, setIsScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);

  const handleScroll = () => {
    const threshold = 200;
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  return (
    <>
      <header class="min-h-screen w-full bg-slate-100">
        <nav class="p-3 max-w-screen-lg mx-auto">
          <div class="flex flex-row items-center justify-between">
            <a href="/" class="flex flex-row items-center">
              <img src="/logo-1.png" class="w-10 h-auto" />
              <span class="md:text-xl font-semibold ml-2">Francis Amidu</span>
            </a>
            <div class="hidden md:flex flex-row items-center space-x-2">
              <For each={links()}>
                {(item, index) => (
                  <>
                    <a
                      href={`#${item}`}
                      data-index={index()}
                      class="capitalize hover:!text-destructive transition-colors duration-400"
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
            <MenuIcon
              class="md:hidden cursor-pointer"
              size={25}
              onClick={() => setMenuOpen(!menuOpen())}
            />
          </div>
          {menuOpen() && (
            <div class="md:hidden flex flex-col items-start mt-2 space-y-2">
              <For each={links()}>
                {(item) => (
                  <a
                    href={`#${item}`}
                    class="capitalize hover:!text-destructive transition-colors duration-400"
                  >
                    {item}
                  </a>
                )}
              </For>
            </div>
          )}
        </nav>
        <div class="flex flex-col justify-center items-center text-center px-4">
          <img
            class="rounded-full border-5 border-white w-40 md:w-56 h-auto my-8"
            src="/francis.png"
          />
          <div class="text-lg md:text-xl text-primary-accent-color font-light my-2">
            <p>Hello there, you must've heard the rumors that I build</p>
            <span class="font-bold text-sm text-destructive p-[10px] py-[0px]">
              Fast
            </span>
            ,{" "}
            <span class="font-bold text-sm text-destructive p-[10px] py-[0px]">
              Reliable
            </span>{" "}
            and{" "}
            <span class="font-bold text-sm text-destructive p-[10px] py-[0px]">
              Responsive
            </span>
            <p>web experiences so welcome to my portfolio!</p>
          </div>
          <div class="flex flex-col md:flex-row items-center my-5 space-y-2 md:space-y-0 md:space-x-2">
            <AppButton
              class="py-3"
              text="Let's chat"
              size="lg"
              variant="default"
            />
            <AppButton
              class="py-4"
              text="See my work"
              size="lg"
              variant="outline"
            />
          </div>
          <div class="flex flex-row items-center my-5">
            <ArrowDown class="bouncing-arrow text-primary mr-3" size={20} />
            <span>Scroll to explore</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
