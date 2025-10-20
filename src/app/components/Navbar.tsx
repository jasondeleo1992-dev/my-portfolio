import { useMemo } from "react";

function Navbar() {
  const links = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#work", label: "Work" },
      { href: "#stack", label: "Stack" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-20 rounded-full backdrop-blur bg-black/30 border border-white/10 px-10 py-4 text-base">
      <ul className="flex gap-12 text-white/80">
        {links.map((l) => (
          <li key={l.href}>
            <a className="hover:text-white transition-colors" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;