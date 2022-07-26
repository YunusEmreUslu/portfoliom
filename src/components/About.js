import React from "react";
import waving from "../hello.jfif"

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-200">
            Hello there, I'm Yunus.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-amber-200 bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-200 hover:text-cyan-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-amber-200 bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-200 hover:text-cyan-600 rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="x-500 y-500 lg:max-w-lg lg:w-full md:w-1/2 w-3/5 h-3/5 ">
          <img
            className="object-center rounded object-contain "
            alt="hello"
            src={waving}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
