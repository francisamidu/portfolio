import Expertise from "./components/Expertise";
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  return (
    <>
      <main class="w-full">
        <ScrollToTopButton />
        <Header />
        <Expertise />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

export default App;
