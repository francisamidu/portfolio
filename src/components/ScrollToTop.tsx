import { createSignal, onMount } from "solid-js";
import { HiSolidArrowUp as ArrowUpIcon } from "solid-icons/hi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = createSignal(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  onMount(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });

  return (
    <button
      onClick={scrollToTop}
      class={`fixed top-0 right-1 z-50 bg-destructive text-white p-2 rounded-md shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible() ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon size={20} />
    </button>
  );
};

export default ScrollToTopButton;
