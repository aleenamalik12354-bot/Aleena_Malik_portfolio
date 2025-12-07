import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2 overflow-hidden"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.1 }}
          className="absolute sm:left-1/2 left-8 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-[#8245ec] via-purple-500 to-transparent h-full"
        ></motion.div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={itemVariants}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-8 transform -translate-x-1/2 bg-[#050414] border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-[0_0_15px_rgba(130,69,236,0.5)]">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] transition-all duration-300 group ${index % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto sm:text-left"
                } sm:w-[45%] ml-16 sm:ml-0`}
            >
              {/* Header */}
              <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl p-2 flex-shrink-0 backdrop-blur-sm border border-white/10">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#8245ec] transition-colors duration-300">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm sm:text-base text-gray-300 font-medium">
                    {experience.company}
                  </h4>
                </div>
              </div>

              {/* Date */}
              <p className="text-sm text-[#8245ec] font-semibold mb-4 tracking-wide">
                {experience.date}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className={`mt-6 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                <a
                  href="https://github.com/aleenamalik12354-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-[#8245ec] transition-colors duration-300 text-sm font-medium"
                >
                  <span>View on GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
