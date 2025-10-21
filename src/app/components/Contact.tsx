function Contact() {
  return (
    <section id="contact" className="snap-section mt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h1 className="text-5xl font-semibold mb-6">Get In Touch</h1>
        <div className="flex justify-between gap-4">
          <div className="flex justify-end text-lg">
            <div className="max-w-3xl">
              <p>
                I&apos;m currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
              </p>
              <p className="mt-4">
                You can contact me via email at{" "}
                <a
                  href="mailto:jasondeleo1992@gmail.com"
                  className="text-sky-400 hover:underline"
                >
                  jasondeleo1992@gmail.com
                </a>
              </p>
              <div className="flex justify-start mt-8 max-w-3xl space-x-8">
                <a
                  href="https://www.linkedin.com/in/jason-d-b0806638b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/jasondeleo1992-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://t.me/jasondeleo1992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end max-w-3xl space-x-4">
            <form
              className="grid gap-4 md:grid-cols-2"
              action="https://formspree.io/f/mdkwvoor" // <-- replace with your Formspree endpoint
              method="POST"
            >
              <input
                name="name"
                placeholder="Name"
                required
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-sky-400 md:col-span-1"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-sky-400 md:col-span-1"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                required
                className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-sky-400 md:col-span-2 h-40"
              />
              <button className="md:col-span-2 bg-white text-black rounded-md px-6 py-3 hover:bg-sky-300 transition">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;