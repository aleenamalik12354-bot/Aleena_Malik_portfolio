import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <main className="">
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
