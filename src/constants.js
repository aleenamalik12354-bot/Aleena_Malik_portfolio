import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Import Aleena's assets
import aleenaProfile from './assets/aleena_assets/aleena picture.jpg';
import collegePic from './assets/aleena_assets/college website picture.png';
import dashboardPic from './assets/aleena_assets/dashboard picture.png';
import malwarePic from './assets/aleena_assets/malware project pic.png';
import resultPic from './assets/aleena_assets/result picture.png';
import capregsoftLogo from './assets/aleena_assets/capregsoft.png';
import liveClockPic from './assets/aleena_assets/live clock.png';
import portfolioPic from './assets/aleena_assets/aleena-portfolio-website.png';


export const SkillsInfo = [
  {
    title: 'Technical Skills',
    type: 'bar',
    skills: [
      { name: 'HTML', logo: htmlLogo, percentage: 95 },
      { name: 'CSS', logo: cssLogo, percentage: 91 },
      { name: 'JavaScript', logo: javascriptLogo, percentage: 85 },
      { name: 'ReactJS', logo: reactjsLogo, percentage: 78 },
      { name: 'Java', logo: javaLogo, percentage: 82 },
      { name: 'Python', logo: pythonLogo, percentage: 88 },
      { name: 'C', logo: cLogo, percentage: 80 },
      { name: 'C++', logo: cppLogo, percentage: 83 },
      { name: 'SQL', logo: mysqlLogo, percentage: 85 },
      { name: 'NodeJS', logo: nodejsLogo, percentage: 75 },
    ],
  },
  {
    title: 'Professional Skills',
    type: 'circular',
    skills: [
      { name: 'PowerBI', logo: htmlLogo, percentage: 90 },
      { name: 'AI & ML', logo: pythonLogo, percentage: 85 },
      { name: 'Deep Learning', logo: pythonLogo, percentage: 80 },
      { name: 'MS Office', logo: htmlLogo, percentage: 95 },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aleenaProfile,
    role: "Student",
    company: "Capregsoft",
    date: "Present",
    desc: "Working on various projects including Web Development and Machine Learning.",
    skills: ["HTML", "CSS", "Python", "PowerBI"],
  },
];

export const education = [
  {
    id: 0,
    img: "/videos/fg pg college.jpeg",
    school: "FG PG College (Affiliated with Punjab University)",
    date: "Present",
    grade: "CGPA 3.48",
    desc: "BS IT at FG Post Graduate College for Women, Wah Cantt — affiliated with Punjab University.",
    degree: "BS IT",
  },
  {
    id: 1,
    img: "/videos/base college.jpeg",
    school: "Base College, Wah Cantt (FBISE)",
    date: "Completed",
    grade: "858/1100",
    desc: "Higher Secondary School Certificate under FBISE board.",
    degree: "HSSC",
  },
  {
    id: 2,
    img: "/videos/fg school no 7.jpeg",
    school: "FG School No. 7 (FBISE)",
    date: "Completed",
    grade: "958/1100",
    desc: "Secondary School Certificate under FBISE board.",
    degree: "Matric",
  },
];

export const projects = [
  {
    id: 0,
    title: "Result Management System",
    description: "A comprehensive system to manage student results.",
    image: resultPic,
    tags: ["Web Development", "Database"],
    github: "https://github.com/aleenamalik12354-bot/result-managment-system",
    webapp: "https://aleenamalik12354-bot.github.io/result-managment-system/",
    video: "/videos/BS-IT Result Management System - Google Chrome 2025-11-27 20-51-57.mp4",
  },
  {
    id: 1,
    title: "College Website",
    description: "Official website for FG PG College.",
    image: collegePic,
    tags: ["HTML", "CSS", "JS"],
    github: "https://github.com/aleenamalik12354-bot/college-website",
    webapp: "https://aleenamalik12354-bot.github.io/college-website/",
    video: "/videos/F.G Post Graduate College for Women _ Wah Cantt - Google Chrome 2025-11-27 20-48-53.mp4",
  },
  {
    id: 2,
    title: "Malware Detection",
    description: "Machine Learning project for malware detection.",
    image: malwarePic,
    tags: ["Machine Learning", "Python"],
    github: "https://github.com/aleenamalik12354-bot/malware-project",
    webapp: "https://aleenamalik12354-bot.github.io/malware-project/",
    video: "/videos/malware detection.mp4",
  },
  {
    id: 3,
    title: "PowerBI Dashboard",
    description: "Data visualization dashboard using PowerBI.",
    image: dashboardPic,
    tags: ["PowerBI", "Data Analysis"],
    github: "https://github.com/aleenamalik12354-bot/POWER-BI-PROJECT",
    webapp: "https://aleenamalik12354-bot.github.io/POWER-BI-PROJECT/",
    video: "/videos/dashboard.mp4",
  },
  {
    id: 4,
    title: "Live Clock",
    description: "Real-time digital and analog clock with dynamic theming.",
    image: liveClockPic,
    tags: ["ReactJS", "CSS"],
    github: "https://github.com/aleenamalik12354-bot/live-clock",
    webapp: "https://aleenamalik12354-bot.github.io/live-clock/",
    video: "/videos/live_clock.mp4",
  },
  {
    id: 5,
    title: "Aleena Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills.",
    image: portfolioPic,
    tags: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/aleenamalik12354-bot/Aleena-malil-portfolio-website",
    webapp: "https://aleenamalik12354-bot.github.io/Aleena-malil-portfolio-website/",
    video: "/videos/aleena_portfolio.mp4",
  },
];
