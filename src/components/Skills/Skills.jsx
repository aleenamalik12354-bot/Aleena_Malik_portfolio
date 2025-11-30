// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  // Circular progress component
  const CircularProgress = ({ percentage, name }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28">
          <svg className="transform -rotate-90 w-28 h-28">
            {/* Background circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="#374151"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="#8245ec"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-white">{percentage}%</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300 font-semibold">{name}</p>
      </div>
    );
  };

  // Progress bar component
  const ProgressBar = ({ percentage, name }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-base font-medium text-gray-300">{name}</span>
          <span className="text-sm font-medium text-gray-400">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-purple-600 to-purple-400 h-3 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">MY SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skills Container */}
      <div className="flex flex-col lg:flex-row gap-10 py-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className={`bg-gray-900 backdrop-blur-md px-8 py-10 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${category.type === 'bar' ? 'lg:w-[60%]' : 'lg:w-[40%]'
              }`}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8245ec] mb-8 text-center">
              {category.title}
            </h3>

            {/* Render based on type */}
            {category.type === 'bar' ? (
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-8 justify-items-center">
                {category.skills.map((skill) => (
                  <CircularProgress
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

