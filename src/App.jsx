import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";
import Lenis from 'lenis';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Faster scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.5, // More responsive mouse wheel
      smoothTouch: false,
      touchMultiplier: 2.5, // Better touch scrolling
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-primary text-white min-h-screen relative">
      <ScrollProgress />
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
