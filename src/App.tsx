import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
