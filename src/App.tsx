import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
