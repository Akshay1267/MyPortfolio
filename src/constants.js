// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";

// Education Section Logos
import ddumcLogo from "./assets/education_logo/ddumcLogo.png";
import mietLogo from "./assets/education_logo/mietLogo.jpg";
import dpsLogo from "./assets/education_logo/dpsLogo.jpeg";

// Project Section Logos
import lotteryLogo from "./assets/work_logo/lotteryLogo.png";
import rockLogo from "./assets/work_logo/rockLogo.png";
import currencyLogo from "./assets/work_logo/currencyLogo.png";
import weatherLogo from "./assets/work_logo/weatherLogo.png";
import spotifyLogo from "./assets/work_logo/spotifyLogo.png";

export const PersonalDetails = {
  name: "Akshay Jain",
  title: "Full Stack MERN Developer",
  tagline: "MCA Student & Software Engineer passionate about building scalable, user-centric web applications and robust backend systems.",
  location: "Meerut, Uttar Pradesh, India",
  phone: "+91-9568983129",
  email: "akshay.jain9568@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1CgwK0irKR0T4Oh79Yo6E98if6SlblSdo/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/akshay-jain-8816252a5/",
  github: "https://github.com/Akshay1267",
  leetcode: "https://leetcode.com/u/Mvq3wZAa8G/",
  youtube: "https://www.youtube.com/@Code2CareerByAkshay",
  instagram: "https://www.instagram.com/akshay_jain86/",
  twitter: "https://x.com/jain86845",
  x: "https://x.com/jain86845",
  aboutBio: "I am a passionate Full Stack Developer and MCA student at Meerut Institute of Engineering and Technology (MIET). With a strong foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js) and CS fundamentals, I build reliable, high-performance web applications focused on usability, clean architecture, and modern UX workflows. From mental health early-warning systems to enterprise workflow platforms, I love translating complex challenges into intuitive, scalable software.",
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Certifications", value: "4+" },
    { label: "Current Focus", value: "MCA @ MIET" },
    { label: "Core Stack", value: "MERN & APIs" }
  ]
};

export const SkillsInfo = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", logo: reactjsLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Next.js", logo: nextjsLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "RESTful APIs", logo: postmanLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL / SQL", logo: mysqlLogo },
      { name: "Authentication (JWT / OAuth)", logo: vscodeLogo },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", logo: cLogo },
      { name: "OOPs Concepts", logo: javaLogo },
      { name: "DBMS", logo: mongodbLogo },
      { name: "Operating Systems", logo: vscodeLogo },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Enterprise TaskFlow",
    subtitle: "UX Analysis & Enterprise Task Management Platform",
    year: "2026",
    category: "Full Stack",
    featured: true,
    description:
      "A full-stack enterprise task and workflow management dashboard built with React.js, Node.js, Express.js, and MongoDB. Focused on simplifying task creation, role-based assignment, real-time status tracking, multi-criteria filtering, and team workflow visibility.",
    highlights: [
      "Built full-stack task management dashboard simplifying task creation, assignment, tracking, and visibility.",
      "Applied usability thinking to improve navigation, reduce workflow confusion, and make task data easier to scan.",
      "Implemented secure JWT authentication, role-based views, and responsive data visualization."
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    github: "https://github.com/Akshay1267/enterprise-taskflow-dashboard",
    webapp: "https://enterprise-taskflow-dashboard.vercel.app/",
  },
  {
    id: 2,
    title: "GitHub Portfolio Analyzer",
    subtitle: "Recruiter-Readiness Scoring & User Insights",
    year: "2026",
    category: "AI & Tools",
    featured: true,
    description:
      "Designed and developed an intelligent web application that analyzes GitHub profiles and generates a 0–100 recruiter-readiness score based on structured profile and repository metrics, commit velocity, and documentation quality.",
    highlights: [
      "Calculates a comprehensive 0–100 recruiter readiness score from repository, commit, and profile data.",
      "Focused on data storytelling by translating technical metrics into understandable visual summaries for students and recruiters.",
      "Integrates GitHub REST API with real-time analytics and actionable feedback suggestions."
    ],
    tags: ["React.js", "Node.js", "GitHub API", "Data Visualization", "Tailwind CSS"],
    github: "https://github.com/Akshay1267/github-analyzer",
    webapp: "https://github-analyzer-liart.vercel.app/",
  },
  {
    id: 3,
    title: "MindPulse",
    subtitle: "Student Mental Health Early Warning System",
    year: "2026",
    category: "Full Stack",
    featured: true,
    description:
      "Created a proactive student wellness application with mood check-ins, user health records, wellness analytics, and AI-assisted risk detection workflows. Designed for colleges to identify and support students in distress early.",
    highlights: [
      "Mapped user needs around emotional check-ins and designed simple flows for capturing wellness data and viewing records.",
      "Worked with ambiguous healthcare problem requirements and converted them into usable, accessible features.",
      "Integrated AI-assisted risk indicators and anonymous distress reporting mechanisms."
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "AI Insights", "UX Workflows"],
    github: "https://github.com/Akshay1267/MindPulse",
    webapp: "https://mind-pulse-iota.vercel.app",
  },
  {
    id: 4,
    title: "AI ChatBot Assistant",
    subtitle: "Intelligent Conversational Agent",
    year: "2025",
    category: "AI & Tools",
    featured: false,
    description:
      "An AI-powered conversational web application that understands user queries and responds intelligently in real time with message history, smooth markdown formatting, and API integration.",
    highlights: [
      "Real-time conversational streaming and query understanding.",
      "Clean modern chat UI with history persistence and quick response chips."
    ],
    image: rockLogo,
    tags: ["React.js", "JavaScript", "AI Integration", "Tailwind CSS"],
    github: "https://github.com/Akshay1267/AI-ChatBot.git",
    webapp: "https://ai-chat-bot-liart-delta.vercel.app/",
  },
  {
    id: 5,
    title: "Spotify Web Player Clone",
    subtitle: "Interactive Music Streaming UI",
    year: "2025",
    category: "Frontend",
    featured: false,
    description:
      "A sleek Spotify player recreation built with vanilla web technologies featuring a responsive music player interface with track seeking, playback controls, and volume adjustments.",
    highlights: [
      "Custom audio player controls with real-time scrub bar and track duration timers.",
      "Fully responsive audio UI inspired by modern music streaming apps."
    ],
    image: spotifyLogo,
    tags: ["HTML5", "CSS3", "JavaScript", "Audio API"],
    github: "https://github.com/Akshay1267/Spotify-clone",
    webapp: "https://spotify-clone-sepia-mu.vercel.app/",
  },
  {
    id: 6,
    title: "Live Weather Forecast",
    subtitle: "Real-Time Weather Tracking Dashboard",
    year: "2025",
    category: "Frontend",
    featured: false,
    description:
      "A responsive weather forecast web app delivering real-time meteorological metrics including temperature, humidity, wind velocity, and condition forecasts for any city worldwide.",
    highlights: [
      "City lookup with live OpenWeather API data integration.",
      "Dynamic weather condition indicators and temperature scale toggles."
    ],
    image: weatherLogo,
    tags: ["React.js", "Weather API", "CSS3", "JavaScript"],
    github: "https://github.com/Akshay1267/WeatherApp.git",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 7,
    title: "Currency Exchange Converter",
    subtitle: "Real-Time Forex Calculator",
    year: "2024",
    category: "Frontend",
    featured: false,
    description:
      "Fast and intuitive currency conversion tool utilizing live exchange rate feeds to convert amounts across dozens of global currencies with instant calculation.",
    highlights: [
      "Live foreign exchange rate API integration.",
      "Interactive country flags, quick swap toggle, and real-time conversion."
    ],
    image: currencyLogo,
    tags: ["JavaScript", "HTML5", "CSS3", "Exchange API"],
    github: "https://github.com/Akshay1267/CurrencyConverter",
    webapp: "https://weather-app-bice-kappa-2p75dik8o1.vercel.app/",
  },
  {
    id: 8,
    title: "Interactive Lottery Game",
    subtitle: "Random Number Probabilistic Mini-Game",
    year: "2024",
    category: "Frontend",
    featured: false,
    description:
      "A vibrant and interactive lottery guessing game built with JavaScript. Test your luck by selecting numbers against algorithmic random generation with instant feedback.",
    highlights: [
      "Algorithmic pseudo-random generation with instant feedback.",
      "Engaging animations, game state tracking, and restart logic."
    ],
    image: lotteryLogo,
    tags: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/Akshay1267/LotteryGame",
    webapp: "https://lottery-game-dusky-omega.vercel.app/",
  },
  {
    id: 9,
    title: "Rock Paper Scissors",
    subtitle: "Classic Game against AI Computer",
    year: "2024",
    category: "Frontend",
    featured: false,
    description:
      "An interactive Rock Paper Scissors browser game with score counters, animated hand choices, and round history against automated computer selection.",
    highlights: [
      "Score keeping logic and tie/win/loss resolution.",
      "Clean interactive controls and sound effects."
    ],
    image: rockLogo,
    tags: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Akshay1267/Rock-Paper-Game.git",
    webapp: "https://rock-paper-game-smoky.vercel.app/",
  }
];

export const education = [
  {
    id: 0,
    img: mietLogo,
    school: "Meerut Institute of Engineering and Technology (MIET)",
    location: "Meerut, Uttar Pradesh",
    date: "2025 - 2027 (Expected)",
    grade: "Pursuing – 64%",
    degree: "Master of Computer Applications (MCA)",
    desc: "Currently pursuing MCA at MIET. Sharpening knowledge in advanced software engineering, distributed systems, full-stack MERN development, database optimization, and cloud architecture. Actively participating in hackathons, collegiate tech events, and open-source projects.",
  },
  {
    id: 1,
    img: ddumcLogo,
    school: "Pt. Deen Dayal Upadhyay Management College (DDUMC)",
    location: "Meerut, Uttar Pradesh",
    date: "Sep 2022 - May 2025",
    grade: "Graduated – 62% (6.5 CGPA)",
    degree: "Bachelor of Computer Applications (BCA)",
    desc: "Completed BCA with a strong core grounding in programming paradigms, Object-Oriented Programming (Java/C++), Data Structures & Algorithms, DBMS, and Web Technologies. Built academic full-stack projects including mobile banking workflows.",
  },
  {
    id: 2,
    img: dpsLogo,
    school: "Dewan Public School",
    location: "Meerut, Uttar Pradesh",
    date: "2021 - 2022",
    grade: "79%",
    degree: "CBSE Class XII – Commerce with Mathematics",
    desc: "Completed Senior Secondary education with Commerce and Mathematics, developing strong mathematical problem solving, quantitative reasoning, and algorithmic logic.",
  },
  {
    id: 3,
    img: dpsLogo,
    school: "Dewan Public School",
    location: "Meerut, Uttar Pradesh",
    date: "2019 - 2020",
    grade: "81%",
    degree: "CBSE Class X – Secondary Education",
    desc: "Completed Secondary education with distinction in Science and Computer Applications, discovering a deep passion for programming and technology.",
  },
];

export const certifications = [
  {
    id: 0,
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    credentialUrl: "https://drive.google.com/file/d/1RFj3iJ1vsLOWAkMfNaglXdAJg6EKo8wc/view?usp=sharing",
    badgeColor: "from-amber-500 to-orange-500",
    icon: "aws",
    description: "Validates comprehensive understanding of AWS Cloud concepts, fundamental cloud services (EC2, S3, RDS, Lambda), security, architecture best practices, pricing, and compliance.",
    skills: ["Cloud Architecture", "AWS Core Services", "Security & IAM", "Cloud Economics"],
  },
  {
    id: 1,
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle University",
    category: "Artificial Intelligence",
    credentialUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=158980A228923CB29593BAEC32683AA16555E131BC14DC6CB25F742DE3802FFA",
    badgeColor: "from-red-500 to-amber-600",
    icon: "oracle",
    description: "Demonstrates foundational mastery of Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, and Generative AI service capabilities on Oracle Cloud.",
    skills: ["Generative AI", "Machine Learning Concepts", "OCI AI Services", "Deep Learning"],
  },
  {
    id: 2,
    title: "Hack Heist 2.0 Hackathon Participant",
    issuer: "MIET Meerut",
    category: "Hackathons & Competitions",
    credentialUrl: "https://drive.google.com/file/d/1abGG3livWjWNRV4uzjEyR7WT7sjAiGwd/view?usp=drive_link",
    badgeColor: "from-amber-600 to-yellow-600",
    icon: "hackathon",
    description: "Participated in an intensive collegiate hackathon building innovative software solutions under rapid turnaround, focusing on UX design, teamwork, and MERN stack implementation.",
    skills: ["Rapid Prototyping", "Full-Stack Development", "Team Collaboration", "Pitching"],
  },
  {
    id: 3,
    title: "Data Structures and Algorithms",
    issuer: "Apna College",
    category: "Computer Science",
    credentialUrl: "https://drive.google.com/file/d/1mM3rFn3tb_MNr3al2gmzF_bR3gTLwZc/view?usp=sharing",
    badgeColor: "from-stone-700 to-stone-900",
    icon: "dsa",
    description: "Comprehensive training in algorithmic thinking, asymptotic time-space complexity, arrays, linked lists, recursion, trees, graphs, sorting, searching, and dynamic programming.",
    skills: ["Data Structures", "Algorithms", "Time Complexity", "Problem Solving"],
  },
];

export const techEvents = [
  {
    id: 1,
    title: "0xGenIgnite Bootcamp (Powered by Stellar)",
    category: "Bootcamps",
    role: "Attendee & Web3 Builder",
    organizer: "Genesis Community & Stellar (Microsoft Noida)",
    date: "2024",
    location: "Microsoft Office, Noida, UP",
    status: "Completed",
    badgeColor: "from-purple-600 to-indigo-600",
    description: "Attended an intensive Web3 Bootcamp powered by Stellar and hosted by Genesis Community at Microsoft Office, Noida. Participated in deep-dive hands-on blockchain sessions, decentralized architecture, and networking with industry leaders.",
    highlights: [
      "Hands-on sessions on Web3 & Stellar blockchain infrastructure beyond theory",
      "Gained practical architectural insights from industrial mentors and Web3 natives",
      "Collaborated and networked with brilliant builders and innovators across the ecosystem"
    ],
    tags: ["Web3", "Blockchain", "Stellar", "Microsoft Noida", "Smart Contracts", "Networking"],
    link: "https://www.linkedin.com/posts/akshay-jain-8816252a5_web3-blockchain-learning-activity-7375949101189939200-0STl",
    linkText: "View LinkedIn Post"
  },
  {
    id: 2,
    title: "Hack Heist 2.0 Hackathon",
    category: "Hackathons",
    role: "Participant & Full Stack Dev",
    organizer: "MIET Meerut",
    date: "2024",
    location: "Meerut, UP",
    status: "Completed",
    badgeColor: "from-amber-600 to-orange-500",
    description: "Participated in an intensive 24-hour collegiate hackathon building full-stack web solutions under rapid turnaround, focusing on user-centric product architecture, team collaboration, and real-time API integrations.",
    highlights: [
      "Built a complete end-to-end full-stack prototype in under 24 hours",
      "Collaborated in a multi-disciplinary team using Git & agile sprint practices",
      "Pitched solution and live demo to the judging panel"
    ],
    tags: ["MERN Stack", "Rapid Prototyping", "Teamwork", "Hackathon"],
    link: "https://drive.google.com/file/d/1abGG3livWjWNRV4uzjEyR7WT7sjAiGwd/view?usp=drive_link",
    linkText: "View Certificate"
  },
  {
    id: 3,
    title: "AWS Community Day & Cloud Summit",
    category: "Conferences",
    role: "Attendee",
    organizer: "AWS User Group",
    date: "2024",
    location: "Delhi NCR, India",
    status: "Attended",
    badgeColor: "from-blue-600 to-indigo-600",
    description: "Engaged in in-depth technical sessions on AWS cloud architecture, serverless design patterns, generative AI workloads on Bedrock, and containerized microservices orchestration.",
    highlights: [
      "Attended keynotes on Cloud Native architectures and Serverless best practices",
      "Explored hands-on architectures for scalable MERN apps with AWS S3 and EC2",
      "Networked with cloud architects, DevOps engineers, and AWS Community Heroes"
    ],
    tags: ["AWS", "Cloud Computing", "Serverless", "GenAI", "Networking"],
    link: "https://www.linkedin.com/in/akshay-jain-8816252a5/",
    linkText: "Event Recap"
  },
  {
    id: 4,
    title: "Google Developer Groups (GDG) DevFest",
    category: "Conferences",
    role: "Attendee & Community Member",
    organizer: "Google Developer Groups (GDG)",
    date: "2024",
    location: "Delhi NCR / Noida",
    status: "Attended",
    badgeColor: "from-red-500 to-amber-500",
    description: "Participated in one of the largest community-led tech developer conferences covering modern web development, Flutter, Gemini AI APIs, Android engineering, and system design.",
    highlights: [
      "Attended deep-dive tracks on modern React, Web Performance, and Gemini AI integration",
      "Participated in live coding sessions and architecture workshops",
      "Connected with senior engineers and tech leaders across the Indian developer ecosystem"
    ],
    tags: ["Web Dev", "Google AI", "Gemini API", "Open Source", "Community"],
    link: "https://www.linkedin.com/in/akshay-jain-8816252a5/",
    linkText: "View Details"
  },
  {
    id: 5,
    title: "MERN Stack & Cloud Scalability Workshop",
    category: "Workshops",
    role: "Active Participant",
    organizer: "MIET Tech Society",
    date: "2024",
    location: "Meerut, UP",
    status: "Completed",
    badgeColor: "from-emerald-600 to-teal-600",
    description: "Hands-on developer workshop focusing on advanced state management, REST API security, JWT authentication patterns, and database indexing with MongoDB.",
    highlights: [
      "Practiced secure token handling, refresh tokens, and OAuth flows",
      "Implemented MongoDB performance optimization and query indexing techniques",
      "Refactored full-stack workflows for seamless production deployment"
    ],
    tags: ["React.js", "Node.js", "MongoDB", "Auth & Security", "Performance"],
    link: "https://www.linkedin.com/in/akshay-jain-8816252a5/",
    linkText: "Workshop Info"
  }
];

