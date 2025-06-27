import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

const projects = [
  {
    title: 'Computer Vision Cursor Control',
    description:
      'An OpenCV-based Python application that enables hands-free computer control using hand movements and gestures, enhancing accessibility.',
    link: '#',
  },
  {
    title: 'Diamond Price Predictor',
    description:
      'Machine learning model built with Python and scikit-learn to predict diamond prices based on various characteristics like cut, clarity, and carat.',
    link: 'https://diamond-prediction-project.glitch.me/project',
  },
];

const skills = [
  'Python',
  'Django',
  'Flask',
  'FastAPI',
  'Pandas',
  'NumPy',
  'SQL',
  'Git',
  'REST APIs',
  'Docker',
];

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // Add state for tracking scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay prevented:', error);
        });
    }
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const heroRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const skillsRef = useScrollReveal();
  const contactRef = useScrollReveal();
  const educationRef = useScrollReveal(); 

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-pink-50 font-['Quicksand']">
      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative w-full md:h-screen 
          bg-gradient-to-br from-pink-200 to-blue-100 
          text-pink-900 flex flex-col items-center
          py-4 md:py-8 shadow-lg z-50
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'md:w-48' : 'md:w-64'}
          ${isScrolled ? 'h-16' : 'h-auto'}
        `}
      >
        <div
          className={`
        ${isScrolled ? 'hidden md:block' : 'block'}
        text-center w-full
      `}
        >
          {/* Profile section */}
          <div
            className={`
            rounded-full bg-pink-400 mx-auto mb-4 overflow-hidden shadow-lg
            transition-all duration-300
            ${isScrolled ? 'w-16 h-16' : 'w-20 h-20 md:w-24 md:h-24'}
          `}
          >
            <img
              src="/pfp.jpg"
              alt="Archna Bishnoi"
              className="w-full h-full object-cover"
            />
          </div>

          <h2
            className={`
            font-bold transition-all duration-300
            ${isScrolled ? 'text-xl' : 'text-xl md:text-2xl'}
          `}
          >
            Archna Bishnoi
          </h2>
          <p className="text-pink-700 mb-4 text-sm md:text-base">
            Python Developer & ML Engineer
          </p>

				{/* Social Links*/}
          <div
            className={`
        flex justify-center gap-2 md:gap-3 mb-4 md:mb-6
        ${isScrolled ? 'hidden md:flex' : 'flex'}
      `}
          >
            <a
              href="https://github.com/Archna-29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-100/80 backdrop-blur-sm p-2 rounded-full hover:bg-blue-100 hover:text-pink-700 transition-all duration-300 border border-pink-200/50"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/archna-bishnoi-997ab22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors duration-300"
              aria-label="LeetCode"
            >
              <svg
                className="w-5 h-5 text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
            <a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors duration-300"
              aria-label="Resume"
            >
              <svg
                className="w-5 h-5 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
								<path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <nav
            className={`
        flex flex-row md:flex-col justify-center
        space-x-4 md:space-x-0 md:space-y-4
        ${isScrolled ? 'hidden md:flex' : 'flex'}
      `}
          >
            {['Home', 'Education', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-pink-600 font-medium transform hover:translate-x-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`
        flex-1 p-4 md:p-10 transition-all duration-300
        ${isScrolled ? 'mt-16' : 'mt-[300px]'} md:mt-0
        ${isScrolled ? 'md:ml-48' : 'md:ml-64'}
      `}
      >
        {/* Hero Section */}
        <section ref={heroRef} id="hero" className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4">
            Hi, I'm Archna Bishnoi🎀✨
          </h1>
          <h2 className="text-xl md:text-2xl text-pink-400 mb-6">
            Python Developer & Machine Learning Enthusiast
          </h2>
          <p className="text-base md:text-lg text-pink-900 max-w-2xl mx-auto">
            Passionate about leveraging Python and Machine Learning to build innovative solutions.
            Specializing in computer vision and predictive modeling, I combine technical expertise
            with creative problem-solving to develop applications that make a real impact.
          </p>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6 md:mb-8">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/90 rounded-xl shadow-md p-6 border border-pink-100 hover:border-blue-200 hover:shadow-lg hover:shadow-pink-100/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-pink-600 mb-2">
                  {project.title}
                </h4>
                <p className="text-pink-900 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-pink-400 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6 md:mb-8">
            Skills
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-pink-100 to-blue-50 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-pink-200/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

				{/* Education Section */}
        <section ref={educationRef} id="education" className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6 md:mb-8">
            Education
          </h3>
          <div className="max-w-3xl">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-pink-400 before:rounded-full before:shadow-lg">
              <h4 className="text-xl font-semibold text-pink-600">
                B.Tech in Electronics and Communications Engineering
              </h4>
              <p className="text-pink-900 font-medium">
                Guru Nanak Dev University, Amritsar
              </p>
              <p className="text-pink-700">2022 - 2026</p>
              <p className="text-pink-800 mt-2">CGPA: 7.14</p>
              <div className="mt-4">
                <p className="font-medium text-pink-600">Relevant Coursework:</p>
                <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 text-pink-800">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• Database Management Systems</li>
                  <li>• Operating Systems</li>
                  <li>• Computer Networks</li>
                  <li>• Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6">
            Get In Touch
          </h3>
          <p className="text-pink-900 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="mb-4 md:mb-0">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:bishnoi0315@gmail.com"
                  className="inline-block bg-gradient-to-r from-pink-400 to-blue-400 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
                >
                  Say Hello 👋
                </a>
                <a
                  href="https://instagram.com/archnabishnoi__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-100 to-blue-50 hover:from-pink-200 hover:to-blue-100 text-pink-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-pink-200/50 transition-all duration-300 border border-pink-200/30"
                >
                  <svg
                    fill="#E1306C"
                    className="w-6 h-6 inline-block mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
										<path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Music Player - Adjust for mobile */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-lg border border-pink-200/50 hover:scale-105 transition-transform duration-300 z-50">
        <audio
          ref={audioRef}
          src="/music.mp3"
          loop
          preload="none"
          className="hidden"
        />
        <div className="flex flex-col items-center">
          <span className="mb-2 font-medium text-pink-600 text-sm">
            Welcome Music
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlayPause}
              className="bg-pink-400 hover:bg-pink-500 text-white rounded-full p-2 shadow-md focus:outline-none transition-colors duration-300"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                  />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 accent-pink-400"
              aria-label="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


