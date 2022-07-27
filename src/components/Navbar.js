import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

function Navbar() {
  return (
    <header className="bg-cyan-600 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl text-center text-amber-200 no-underline hover:underline"
          >
            Yunus Emre Uslu
          </a>
        </a>
        <nav className="text-amber-200 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-amber-200	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-center">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="text-cyan-600 inline-flex items-center bg-amber-200 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-900 hover:text-amber-200 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;