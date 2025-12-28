// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
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
// import mongooseLogo from "./assets/tech_logo/mongoose.png";


// Education Section Logo's
import ddumcLogo from "./assets/education_logo/ddumcLogo.png";
import mietLogo from "./assets/education_logo/mietLogo.jpg";
import dpsLogo from "./assets/education_logo/dpsLogo.jpeg";

// Project Section Logo's
import lotteryLogo from "./assets/work_logo/lotteryLogo.png";
import rockLogo from "./assets/work_logo/rockLogo.png";
import currencyLogo from "./assets/work_logo/currencyLogo.png";
import weatherLogo from "./assets/work_logo/weatherLogo.png";
import spotifyLogo from "./assets/work_logo/spotifyLogo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend (MERN)",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "Mongoose", logo: mongooseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: mietLogo,
    school: "Meerut Institute of Engineering and Technology (MIET), Meerut",
    date: "2025 - 2027",
    grade: "Pursuing",
    desc: "I am currently pursuing my Master of Computer Applications (MCA) at Meerut Institute of Engineering and Technology (MIET). The program is enhancing my knowledge in software engineering, data structures, full-stack development, and modern tools used in the IT industry. I am actively involved in projects, hackathons, and technical events to sharpen my practical skills and collaborative abilities.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: ddumcLogo,
    school: "Pt. Deen Dayal Upadhyay Management College, Meerut",
    date: "Sep 2022 - May 2025",
    grade: "6.5 CGPA",
    desc: "I completed my Bachelor of Computer Applications (BCA) at DDUMC, Meerut. Throughout the program, I gained a strong foundation in programming, database systems, web development, and data structures. I developed various academic projects, including a mobile banking app as my major project, and participated in tech events and seminars.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: dpsLogo,
    school: "Dewan Public School, Meerut",
    date: "Apr 2020 - March 2021",
    grade: "82%",
    desc: "I completed my Class 12 education at Dewan Public School under the CBSE board with Commerce with maths. ",
    degree: "CBSE (XII) - Commerce with Maths",
  },
  {
    id: 3,
    img: dpsLogo,
    school: "Dewan Public School, Meerut",
    date: "Apr 2018 - March 2019",
    grade: "81%",
    desc: "I completed my Class 10 education from Dewan Public School under the CBSE board with a focus on Science and Computer Applications. It was during this time I discovered my passion for technology.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Rock Paper Scissors game",
    description:
      "A simple and interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript. Play against the computer, see who wins, and enjoy a fun UI with instant results!",
    image: rockLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Akshay1267/Rock-Paper-Game.git",
    webapp: "https://rock-paper-game-smoky.vercel.app/",
  },
  {
  id: 1,
  title: "AI Chatbot",
  description:
    "An AI-powered chatbot built using modern web technologies that can understand user queries and respond intelligently in real time. Features a clean UI, message history, and seamless API integration.",
  // image: chatbotLogo,
  tags: ["React", "JavaScript", "AI", "API"],
  github: "https://github.com/Akshay1267/AI-ChatBot.git",
  webapp: "https://ai-chat-bot-liart-delta.vercel.app/",
},

  {
    id: 1,
    title: "Currency Converter",
    description:
      "A fast and easy-to-use currency converter built with HTML, CSS, and JavaScript. Convert between currencies in real-time using live exchange rates with a clean and responsive UI.",
    image: currencyLogo,
    tags: ["React", "HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Akshay1267/WeatherApp.git",
    webapp: "https://weather-app-bice-kappa-2p75dik8o1.vercel.app/",
  },
  {
    id: 2,
    title: "Weather Forecast",
    description:
      "A sleek and responsive weather forecast app using HTML, CSS, and JavaScript. Get real-time weather updates for any city, including temperature, conditions, and more — powered by live API data.",
    image: weatherLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A sleek Spotify clone built using HTML, CSS, and JavaScript. Features a responsive music player interface with play, pause, and seek functionality—recreating the Spotify experience without any frameworks.",
    image: spotifyLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Akshay1267/Spotify-clone",
    webapp: "https://spotify-clone-sepia-mu.vercel.app/",
  },
  {
  id: 4,
  title: "Lottery Game",
  description:
    "A fun and interactive lottery game built using HTML, CSS, and JavaScript. Enter your lucky number and test your luck against a randomly generated result with instant win or lose feedback.",
  image: lotteryLogo, 
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/Akshay1267/LotteryGame",
  webapp: "https://lottery-game-dusky-omega.vercel.app/",
},
];
