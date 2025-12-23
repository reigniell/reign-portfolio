/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Reign Iell",
  title: "Hi, I'm Reign",
  subTitle: emoji(
    "A dedicated Computer Science student majoring in Intelligent Systems 💻. Currently seeking an On-the-Job Training (OJT) opportunity to apply my academic knowledge, learn from industry professionals, and contribute to meaningful projects."
  ),
  resumeLink:
    "", // You can add a link to your resume later if you have one
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/reigniell",
  linkedin: "www.linkedin.com/in/bayani-reigniell-ann-5a5b59395", // Add your LinkedIn URL here
  gmail: "reigniellannbayani@gmail.com", // Add your email for OJT contact
  // Remove or comment out links you don't have yet:
  // gitlab: "https://gitlab.com/yourprofile",
  // facebook: "https://www.facebook.com/yourprofile",
  // medium: "https://medium.com/@yourprofile",
  // stackoverflow: "https://stackoverflow.com/users/yourprofile",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills & Focus Areas",
  subTitle: "Building a strong foundation in Computer Science with a focus on Intelligent Systems",
  skills: [
    emoji(
      "⚡ Developing a strong foundation in core programming concepts with Python, Java, and C++"
    ),
    emoji("⚡ Learning data structures, algorithms, and system design principles"),
    emoji(
      "⚡ Exploring Intelligent Systems concepts including data preprocessing, basic machine learning workflows, and algorithm design"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the Philippines Open University",
      logo: require("./assets/images/harvardLogo.png"), // You can change this logo later
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Expected Graduation: 2026",
      desc: "Specializing in Intelligent Systems. Coursework includes Data Structures & Algorithms, Object-Oriented Programming, Web Development, and Introduction to Artificial Intelligence.",
      descBullets: [
        "Major: Intelligent Systems",
        "Relevant Courses: Programming, Discrete Mathematics, Data Management",
        "Currently expanding knowledge in system design and algorithm optimization"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming Fundamentals",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Development Basics",
      progressPercentage: "75%"
    },
    {
      Stack: "Intelligent Systems Concepts",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: false, // Set to false since you're a student seeking OJT
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic & Personal Projects",
  subtitle: "Projects that demonstrate my learning journey and technical growth",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // You can replace this image
      projectName: "StyleIQ (Concept Project)",
      projectDesc: "An intelligent fashion recommendation system concept using image-based analysis and dialog-guided inputs. This academic project explores how machine learning can be applied to personalized style suggestions.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/reigniell/styleiq" // Add your actual project URL
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // You can replace this image
      projectName: "Student Portfolio Website",
      projectDesc: "This responsive portfolio website built with React.js demonstrates my front-end development skills and commitment to creating professional self-presentation tools.",
      footerLink: [
        {
          name: "View Source Code",
          url: "https://github.com/reigniell/reign-portfolio"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Trainings & Certifications 🏆"),
  subtitle: "Professional development activities and certifications I've completed",

  achievementsCards: [
    {
      title: "AI Fundamentals Webinar",
      subtitle: "UPOU ICTDO - March 2025",
      image: require("./assets/images/codeInLogo.webp"), // You can replace this
      imageAlt: "AI Webinar Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "#" // Add your certificate link here
        }
      ]
    }
    // You can add more certificates here as you earn them
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I believe in documenting my learning journey and sharing knowledge",
  displayMediumBlogs: "false", // Set to false unless you have a Medium blog
  blogs: [], // Leave empty for now
  display: false // Set to false since you don't have blogs yet
};

// Talks Sections

const talkSection = {
  title: "Webinars & Workshops",
  subtitle: emoji("Learning from industry experts and academic professionals"),

  talks: [
    {
      title: "AI Fundamentals Webinar",
      subtitle: "UPOU ICTDO - March 2025",
      slides_url: "#", // Add link if available
      event_url: "#" // Add link if available
    }
    // Add more workshops/webinars you've attended
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  podcast: [],
  display: false // Set to false unless you have podcasts
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Available upon request",

  display: true // Set false to hide this section
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in offering an OJT opportunity or discussing technology? I'd love to connect!",
  number: "", // Add your number if comfortable
  email_address: "your.email@example.com" // Use the same email as above
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // Replace if you have Twitter
  display: false // Set to false unless active on Twitter
};

const isHireable = true; // Set to true since you're seeking OJT

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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
