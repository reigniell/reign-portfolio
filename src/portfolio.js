/* Professional Portfolio for OJT Application */

// ADD THIS SECTION AT THE TOP - Force favicon update
const forceFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://reign-portfolio.vercel.app/myicon.ico?v=' + new Date().getTime();
  document.getElementsByTagName('head')[0].appendChild(link);
};

// Call it immediately
if (typeof window !== 'undefined') {
  forceFavicon();
}

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Reigniell Ann L. Bayani",
  title: "Hi, I'm Reigniell",
  subTitle: emoji(
    "4th Year BS Computer Science student specializing in Intelligent Systems 🎓 | Seeking On-the-Job Training to apply technical knowledge, contribute to office operations, and gain hands-on industry experience."
  ),
  resumeLink: "", // You can add Google Drive link later
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/reigniell",
  linkedin: "", // Add if available
  gmail: "reigniellannbayani@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "Technical & Personal Skills",
  subTitle: "Combining technical knowledge with strong interpersonal abilities",
  skills: [
    emoji("⚡ Programming Foundations: Python, Java, C++, Object-Oriented Programming"),
    emoji("⚡ Web Development: HTML, CSS, JavaScript, Responsive Design"),
    emoji("⚡ Intelligent Systems: Exploring AI/ML concepts, algorithm design, and data processing")
  ],

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git/GitHub", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-code" }
  ],
  display: true
};

// Education Section - Updated with all your academic achievements
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Laguna State Polytechnic University - Sta Cruz Campus",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "BS Computer Science, Major in Intelligent System",
      duration: "2022 – Present",
      desc: "4th Year student developing expertise in intelligent systems, algorithms, and software development. Consistently maintaining academic excellence.",
      descBullets: [
        "With Honors - Consistent academic achiever",
        "Specialization: Intelligent Systems",
        "Core Courses: Data Structures, Algorithms, OOP, Web Technologies, Database Management",
        "Expected to contribute to technical and academic activities"
      ]
    },
    {
      schoolName: "Laguna State Polytechnic University - Sta Cruz Campus",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Senior High School - Information and Communication Technology",
      duration: "2020 – 2022",
      desc: "ICT Strand graduate with honors, building foundational technical skills in information technology and communication systems.",
      descBullets: [
        "With Honors - Academic Excellence",
        "Strand: Information and Communication Technology (ICT)",
        "Developed basic programming and technical troubleshooting skills",
        "Prepared for university-level Computer Science studies"
      ]
    },
    {
      schoolName: "Liceo De Pila",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Junior High School",
      duration: "2016 – 2020",
      desc: "Developed strong academic discipline and personal conduct recognized by school administration.",
      descBullets: [
        "Award: Best in Conduct",
        "Built foundation in mathematics and sciences",
        "Developed teamwork and leadership skills",
        "Consistently demonstrated strong work ethic"
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Programming Fundamentals", progressPercentage: "85%" },
    { Stack: "Web Development", progressPercentage: "75%" },
    { Stack: "Academic & Research Skills", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

// Work Experience - Your part-time jobs show work ethic
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Crafter (Part-time)",
      company: "Self-Employed",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "2024 – Present",
      desc: "Developing creative handmade products while managing business operations, customer relations, and product development independently.",
      descBullets: [
        "Creative problem-solving and design thinking",
        "Time management between studies and work",
        "Customer service and relationship management",
        "Independent project execution"
      ]
    },
    {
      role: "Make Up Artist (Part-time)",
      company: "Freelance",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "2024 – Present",
      desc: "Providing makeup services for various occasions, demonstrating attention to detail, client communication, and artistic expression.",
      descBullets: [
        "Attention to detail and precision work",
        "Client consultation and service customization",
        "Time management for appointment scheduling",
        "Creative expression and trend awareness"
      ]
    },
    {
      role: "Assistant Pastry Chef (Part-time)",
      company: "Local Pastry Shop",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2020 – Present",
      desc: "Assisting in pastry production including preparation, decoration, quality control, and customer service. Applying precision and attention to detail honed through pastry work to technical problem-solving in computer science.",
      descBullets: [
        "Precision work with detailed recipes and measurements",
        "Quality control ensuring consistent output standards",
        "Creative decoration and presentation skills",
        "Customer service and order customization",
        "Long-term commitment showing reliability",
        "Applying systematic approaches from pastry to programming"
      ]
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects Section
const bigProjects = {
  title: "Academic Projects & Seminars",
  subtitle: "Active participation in technical seminars and academic development",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Technical Seminar Participation",
      projectDesc: "Active attendee of multiple technical seminars including IoT, Cybersecurity, Engineering Technology, and Vessel Traffic Management Systems, demonstrating commitment to continuous learning.",
      footerLink: [
        {
          name: "View Seminar Certificates",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Academic Portfolio Development",
      projectDesc: "Creating this interactive portfolio website to showcase academic journey, technical skills, and professional readiness for OJT opportunities.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/reigniell/reign-portfolio"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section - Your seminars and awards
const achievementSection = {
  title: emoji("Seminars & Certifications 🏆"),
  subtitle: "Continuous learning through professional and technical seminars",

  achievementsCards: [
    {
      title: "Vessel Traffic Management System",
      subtitle: "Subic Bay Metropolitan Authority - April 2024",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "VTMS Seminar",
      footerLink: [
        { name: "Certificate", url: "#" }
      ]
    },
    {
      title: "Engineering & Computer Technology Convention",
      subtitle: "University of the Philippines Diliman - April 2023",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Engineering Convention",
      footerLink: [
        { name: "Certificate", url: "#" }
      ]
    },
    {
      title: "Internet of Things & Cybersecurity",
      subtitle: "Laguna State Polytechnic University - 2022",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IoT & Security Seminar",
      footerLink: [
        { name: "Certificate", url: "#" }
      ]
    }
  ],
  display: true
};

// Talks Section - Your seminar attendance
const talkSection = {
  title: "Professional Development Seminars",
  subtitle: emoji("Committed to continuous learning through technical seminars"),

  talks: [
    {
      title: "Employability Skills Training Program",
      subtitle: "LSPU - April 2022",
      slides_url: "#",
      event_url: "#"
    },
    {
      title: "Stress Management & Career Opportunities",
      subtitle: "LSPU - June 2022",
      slides_url: "#",
      event_url: "#"
    },
    {
      title: "New Normal World for Work",
      subtitle: "LSPU - May 2022",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: true
};

// Personal Skills Display
const personalSkills = {
  display: true,
  title: "Personal Skills & Attributes",
  skills: [
    "Strong Work Ethic (demonstrated through part-time work while studying)",
    "Time Management (balancing academics with multiple jobs)",
    "Attention to Detail (crafting, makeup artistry, baking)",
    "Adaptability (multiple roles and responsibilities)",
    "Continuous Learning (regular seminar attendance)",
    "Professional Conduct (Best in Conduct awardee)",
    "Team Collaboration (assistant baker experience)",
    "Customer Service (all part-time roles)"
  ]
};

// Blog Section (can be hidden for now)
const blogSection = {
  display: false
};

// Podcast Section
const podcastSection = {
  display: false
};

// Resume Section
const resumeSection = {
  title: "Professional Objective",
  subtitle: "Seeking Student Assistant/OJT Position",
  objective: "As a 4th Year BS Computer Science student, I aim to contribute as a Student Assistant in attending to clerical and technical functions, aiding academic activities, and assisting in ensuring smooth office operations. I look forward to hands-on experience that will enhance my capabilities and better equip me for future career opportunities.",
  contact: {
    phone1: "0961-351-8289",
    phone2: "0992-996-8579",
    address: "163 A. Fernandez St, Brgy San Roque, Victoria Laguna",
    email: "reigniellannbayani@gmail.com"
  },
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Information 📞"),
  subtitle: "Available for OJT opportunities and academic assistance roles",
  number: "0961-351-8289 | 0992-996-8579",
  email_address: "reigniellannbayani@gmail.com",
  address: "163 A. Fernandez St, Brgy San Roque, Victoria Laguna"
};

// Twitter Section
const twitterDetails = {
  display: false
};

const isHireable = true;

// Export all sections
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  personalSkills,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
