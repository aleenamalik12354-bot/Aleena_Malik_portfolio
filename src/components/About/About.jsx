import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/aleena_assets/aleena picture.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans pt-32 md:pt-40"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aleena Malik
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Web Developer',
                'Web Developer',
                'Data Analyst',
                'Machine Learning Engineer',
                'BS IT Student',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a BS IT student passionate about web development, data analysis, and machine learning.
            I have worked on various projects including college websites, result management systems,
            and machine learning applications for malware detection. Proficient in HTML, CSS, JavaScript,
            Python, and PowerBI, I love creating innovative solutions to real-world problems.
          </p>
          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8245ec" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CONTACT ME
          </motion.a>
        </motion.div>
        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 flex justify-center md:justify-end relative z-10"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/40 rounded-full blur-[80px] -z-10"
          />

          <Tilt
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full relative"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Aleena Malik"
              className="w-full h-full rounded-full object-cover object-[50%_20%] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
