import Expertise from "./components/Expertise";
import About from "./components/About";
import Header from "./components/Header";
import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <main class="w-full h-full">
        <Header />
        <Expertise />
        <About />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
