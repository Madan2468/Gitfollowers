import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="text-center mt-10 animate-fadeIn">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to My Digital Realm
        </h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto">
          I am a versatile and results-driven professional with a comprehensive
          skill set spanning full stack web development, coding, cinematography,
          and trading. I specialize in building dynamic, responsive web
          applications that push the envelope of what’s possible.
        </p>
        <a
          href="https://github.com/Madan2468"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-8 mt-10 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block"
        >
          Explore My Work
        </a>
      </header>

      {/* Featured Projects Section */}
      <section className="mt-24 w-full px-4 animate-slideUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p>
                A dynamic web application built using the MERN stack. This
                project showcases my ability to build responsive, user-friendly
                interfaces.
              </p>
              <a
                href="https://github.com/Madan2468"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View Details
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p>
                A complex full-stack project integrating multiple APIs and
                microservices to deliver an innovative solution.
              </p>
              <a
                href="https://github.com/Madan2468"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24 w-full px-4 animate-fadeIn">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Full Stack Development
            </h2>
            <p>
              Crafting seamless, responsive web experiences using the MERN
              stack. I transform complex ideas into user-friendly, functional
              applications.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Cinematography</h2>
            <p>
              Bringing stories to life with a keen eye for visual storytelling
              and design. My cinematography skills enhance the user experience
              and project aesthetics.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-3">Trading & Analysis</h2>
            <p>
              Navigating the financial markets with precision, using analytical
              skills to make informed trading decisions and transform challenges
              into opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-24 w-full px-4 animate-slideUp">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Software Developer Intern
              </h3>
              <p className="text-orange-400">Invoir | March 2024 - July 2024</p>
              <p className="mt-4">
                Worked as a Software Developer Intern, contributing to web
                development projects, enhancing user experiences, and
                collaborating with cross-functional teams to deliver impactful
                solutions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Cinematography</h3>
              <p className="text-orange-400">CICE | Present</p>
              <p className="mt-4">
                Responsible for capturing and editing high-quality visual
                content that tells compelling stories, contributing to various
                creative projects at the Creativity and Innovation Cell in
                Electronics.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Organising Member</h3>
              <p className="text-orange-400">
                Esports University Conclave | April 2024 - May 2024
              </p>
              <p className="mt-4">
                Played a key role in organizing the Esports University Conclave,
                handling logistics, event coordination, and ensuring a seamless
                experience for participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-24 w-full px-4 animate-fadeIn bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            Interested in working together? Let's create something amazing!
            Reach out to me through the form below.
          </p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-800 text-white sm:col-span-2"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-8 mt-4 rounded-full shadow-lg transition-transform transform hover:scale-105 sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-24 py-10 bg-gray-800 w-full text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
