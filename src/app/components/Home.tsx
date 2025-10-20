import { useEffect, useState } from "react";

function Home() {
    const fullText = "Senior Full Stack Software Engineer | Cloud-Native Backend & Scalable Web Systems (C#, Python, React, AWS/Azure)";
    const [typed, setTyped] = useState("");

    useEffect(() => {
        let isMounted = true;
        let index = 0;
        let timer: number | undefined;

        const typeNext = () => {
            if (!isMounted) return;
            if (index < fullText.length) {
                setTyped(fullText.slice(0, index + 1));
                index += 1;
                timer = window.setTimeout(typeNext, 60);
            } else {
                // pause 2s, then restart from beginning
                timer = window.setTimeout(() => {
                index = 0;
                setTyped("");
                timer = window.setTimeout(typeNext, 60);
                }, 2000);
            }
        };

        timer = window.setTimeout(typeNext, 60);
        return () => {
        isMounted = false;
        window.clearTimeout(timer);
        };
    }, [fullText]);

    return (
        <section id="home" className="snap-section-home flex items-center">
            <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold ">Hi, I&apos;m Jason Deleo</h1>
                <p className="text-xl md:text-2xl text-white/70 caret-after">{typed}</p>
            </div>
        </section>
    );
}

export default Home;