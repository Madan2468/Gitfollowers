import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  AOS.init(); // Initialize AOS

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Introduction Section */}
      <header className="flex flex-col items-center justify-center mt-10 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hi, I am <span className="text-orange-500">Madan Gopal Jha</span>
        </h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          A passionate and results-driven{" "}
          <span className="text-orange-500">Full Stack Web Developer</span> with
          a focus on crafting dynamic, responsive web applications using the
          MERN stack. I excel at transforming complex ideas into intuitive,
          user-friendly solutions.
        </p>
        <a
          href="https://github.com/Madan2468"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-8 mt-10 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore My Work
        </a>
      </header>

      {/* Featured Projects Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src="https://i.ibb.co/2M7rtLk/Remote1.png"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">
                YouTube Full Backend
              </h3>
              <p>
                A complete backend solution for a YouTube-like platform,
                including user management, video handling, and authentication.
              </p>
              <a
                href="https://github.com/Madan2468/YouTube-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View on GitHub
              </a>
              <div className="mt-4">
                <a
                  href="https://github.com/Madan2468/YouTube-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="GitHub Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">Smart Bin System</h3>
              <p>
                An innovative Smart Bin system integrating Arduino and real-time
                mapping to optimize waste management for better city
                cleanliness.
              </p>
              <a
                href="https://github.com/Madan2468/Smart-Bin-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24 w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div
            className="animate__animated animate__fadeInUp animate__delay-1s"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-semibold mb-3">
              Full Stack Development
            </h2>
            <p>
              Crafting seamless, responsive web experiences using the MERN
              stack. I transform complex ideas into user-friendly, functional
              applications.
            </p>
          </div>
          <div
            className="animate__animated animate__fadeInUp animate__delay-2s"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-semibold mb-3">Cinematography</h2>
            <p>
              Bringing stories to life with a keen eye for visual storytelling
              and design. My cinematography skills enhance the user experience
              and project aesthetics.
            </p>
          </div>
          <div
            className="animate__animated animate__fadeInUp animate__delay-3s"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
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
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold mb-2">Cinematography</h3>
              <p className="text-orange-400">CICE | Present</p>
              <p className="mt-4">
                Responsible for capturing and editing high-quality visual
                content that tells compelling stories, contributing to various
                creative projects at the Creativity and Innovation Cell in
                Electronics.
              </p>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
    </div>
  );
}
