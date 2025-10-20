"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#ffffff", opacity: 0.1, distance: 120 },
        },
        detectRetina: true,
      }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
