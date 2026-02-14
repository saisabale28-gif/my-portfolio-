function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">

        <a href="#hero" className="text-xl font-bold hover:text-gray-300 transition">
          || Sairaj ||
        </a>

        <ul className="flex gap-8 text-gray-400">
          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
