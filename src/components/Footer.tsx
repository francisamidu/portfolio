import { Component, createSignal } from "solid-js";

const Footer: Component<{}> = () => {
  const [year, _setYear] = createSignal(new Date().getFullYear());
  return (
    <footer class="p-4 border-t-2 bg-accent flex flex-row items-center justify-center">
      <p>
        Developed with <span>❤️</span> by{" "}
        <span class="text-destructive font-bold">yours truly</span>
        <span class="px-2">-</span>
        <span>Copyright &copy; {year()}</span>
      </p>
    </footer>
  );
};

export default Footer;
