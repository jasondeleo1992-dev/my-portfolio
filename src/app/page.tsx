"use client";

import ParticlesBackground from "./lib/ParticlesBackground";
import Reveal from "./lib/Reveal";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <div className="relative">
      <ParticlesBackground />
      <Navbar />
      <main className="snap-container">
        <Reveal>
          <Home />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Work />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </div>
  );
}
