import { createSignal, For } from "solid-js";

const Header = () => {
  const [links, _setLinks] = createSignal(["about", "projects", "toolkit"]);
  return (
    <>
      <header class="min-h-screen w-ful bg-slate-100">
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
            class="rounded-full border-5 border-white w-48 h-auto"
            src="/francis.png"
          />
          <div class="text-2xl text-center text-primary-accent-color font-light my-5">
            <p class="">I build</p>
            <div class="flex flex-row items-center justify-between font-bold !text-primary-accent-color my-2">
              <span>Fast</span>
              <span class="separator rounded-md mx-2">-</span>
              <span>Reliable</span>
              <span class="separator rounded-md mx-2">-</span>
              <span>Responsive</span>
            </div>
            <p>web experiences</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
