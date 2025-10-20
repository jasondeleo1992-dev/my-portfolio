import { useEffect, useRef, useState } from "react";

function About() {
    return (
        <section id="about" className="snap-section flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-semibold mb-6 transition-all duration-700 ease-out">About Me</h1>
            <p className="text-lg text-white/80 leading-relaxed transition-all duration-700 ease-out delay-150">
              Hi, I’m Jason Deleo, a Senior Full Stack Software Engineer with over 10 years of professional experience building scalable, cloud-native, and high-performance web applications.
              I specialize in .NET Core, Python (Django/FastAPI), and React, delivering end-to-end solutions that combine robust backend logic with intuitive, modern front-end experiences. Over the years, I’ve designed and deployed distributed microservices architectures across AWS, Azure, and GCP, optimizing performance, scalability, and cost efficiency.
            </p>
            <div className="flex justify-center mt-8 ">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black/70 hover:bg-zinc-800 transition-all duration-200 shadow border border-white/30"
                title="Download Resume"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                <span className="text-white font-semibold text-lg">Resume</span>
              </a>
            </div>
          </div>
        </section>
    )
}

export default About;