import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import ProjectsSection from './components/Project/ProjectsSection';
import Experience from './components/Experience/Experience';
import Contact from './components/contact/Contact';
import CodingTerminal from './components/codingTerminal/CodingTerminal';
import SpinningLogo from './components/spinningLogo/SpinningLogo';
import Footer from './components/Footer/Footer';

function App() {
  const [step, setStep] = useState("loading");

  return (
    <>
      {step === "loading" && (
        <CodingTerminal onComplete={() => setStep("logo")} />
      )}
      {step === "logo" && (
        <SpinningLogo onComplete={() => setStep("main")} />
      )}
      {step === "main" && (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Education />
          <ProjectsSection />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
