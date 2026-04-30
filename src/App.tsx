import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Experience />
        <Projects />
        <CTA />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
