import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Experience />
        <Projects />
        <CTA />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
