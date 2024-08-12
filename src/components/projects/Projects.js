import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsRef = useRef(null);

  const projectsData = [
    {
      title: "Shopping Cart Application using React JS",
      des: "Developed an efficient and responsive shopping cart application using React JS, Redux, and Tailwind CSS, enhancing user experience with real-time updates and dynamic styling. This project streamlined the user interface,resulting in a 30% reduction in page load time and a 20% increase in user engagement.",
      src: "https://imageio.forbes.com/specials-images/imageserve/6349c12e2476e78de0de06ab/Online-Shopping/960x0.png?format=png&width=1440",
      githubLink: "https://github.com/MadathaGanesh/shoppingcart",
      demoLink: "https://easybuycart.netlify.app/",
      text: "SKILLS",
      skillUsed: "ReactJS,Redux,JSX,CSS,Tailwind CSS,Axios",
    },
    {
      title: "Grocery Market Billing System Using Java",
      des: " Optimized optimization algorithms within the Grocery Billing System project using Java, achieving a 20% decrease in processing time and a 15% reduction in memory usage. These enhancements significantly improved system performance and efficiency, demonstrating proficiency in Java development and algorithmic optimization techniques ",
      src: "https://urgence-web.com/blog/uploads/images/2021/06/image_750x_60d2cec0de8f6.jpg",
      githubLink:
        "https://github.com/MadathaGanesh/Grocery-Market-Billing-System",
      text: "SKILLS",
      skillUsed: "CoreJava,Exception Handling,OOPS,Intellij",
    },
    {
      title: "Issue Tracker Application",
      des: "Developed a web-based issue tracking system using HTML, CSS, and JavaScript, enabling efficient bug reporting and resolution tracking. Enhanced user experience by implementing responsive design and reducing page load time by 20%.",
      src: "https://www.shutterstock.com/image-illustration/conceptual-business-illustration-words-issue-260nw-1025080504.jpg",
      githubLink: "https://github.com/MadathaGanesh/Issue-Tracker-application",
      demoLink: "https://issuetrackerapplication.netlify.app/",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
    {
      title: "House Price Prediction using Machine Learning",
      des: " Innovated a high-accuracy house price prediction model by optimizing multiple algorithms and enhancing data quality, resulting in 95% prediction accuracy and empowering stakeholders to make well-informed real estate transactions",
      src: "https://miro.medium.com/v2/resize:fit:1400/0*cDRFtpTiOJFrfzS5.jpg",
      githubLink:
        "https://github.com/MadathaGanesh/House_Price_Prediction_Using_Machine_Learning",
      text: "SKILLS",
      skillUsed:
        "Python,Numpy,Pandas,Data Preprocessing,Feature Engineering,Model Evaluation,Matplotlib,Scikit learn",
    },
    {
      title: "Netflix website",
      des: "Developed a responsive Netflix UI clone using HTML, CSS, and JavaScript, achieving 100% layout accuracy across multiple devices and implementing dynamic content loading for a seamless user experience.",
      src: "https://www.lifewire.com/thmb/F--w6yX0MG7VJDPItGlHHnhxRxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ScreenShot2019-02-13at1.12.39PM-5c649670c9e77c0001d32489.jpg",
      githubLink: "https://github.com/MadathaGanesh/Netflix-Stream",
      text: "SKILLS",
      skillUsed: "HTML,CSS,Javascript,Git",
    },
    {
      title: "To-Do List Application",
      des: " Developed a dynamic To-Do List web application using HTML, CSS, and JavaScript, deployed on GitHub. Implemented features for task creation, deletion, and status tracking, achieving a 95% task management efficiency rate based on user feedback.",
      src: "https://www.shutterstock.com/image-vector/do-list-planning-icon-concept-600nw-739093225.jpg",
      githubLink: "https://github.com/MadathaGanesh/To-do-List-Application",
      demoLink: "https://taskclarity.netlify.app/",
      text: "SKILLS",
      skillUsed: "HTML,CSS,JavaScript",
    },
    {
      title: "Banking Application Using Java",
      des: " Developed a secure Banking Application using Java, implementing core functionalities like account management and transaction processing, with a focus on ensuring data integrity and security. Successfully handled over 1,000 transactions per minute with an optimized database schema.",
      src: "https://img.freepik.com/free-vector/bank-building-with-cityscape_1284-52265.jpg",
      githubLink:
        "https://github.com/MadathaGanesh/Banking-Application-in-Java",
      text: "SKILLS",
      skillUsed: "CoreJava,OOPS,ExceptionHandling",
    },
    {
      title: "Number Guessing Game Using java",
      des: " Developed a Number Guessing Game using Java, implementing logic for user input validation and random number generation. Enhanced the game's functionality by tracking the number of attempts and displaying results, leading to a user-friendly gaming experience.",
      src: "https://i.pinimg.com/474x/99/d9/23/99d9239aafdc5dd180eeae9bc30dcc6a.jpg",
      githubLink:
        "https://github.com/MadathaGanesh/Number_Guessing_Game_in_Java",
      text: "SKILLS",
      skillUsed: "Java,Loops,Conditions,Random Number Generation,Debugging",
    },
    {
      title: "Wine Quality prediction using Machine Learning",
      des: " Developed a machine learning model to predict wine quality with an accuracy of 85%, leveraging algorithms such as Random Forest and Support Vector Machines. Utilized feature engineering and hyperparameter tuning to optimize model performance and enhance prediction accuracy.",
      src: "https://user-images.githubusercontent.com/47216809/86511259-ef33e380-be14-11ea-8ea3-3a3cc4ff5ce8.jpg",
      githubLink: "https://github.com/MadathaGanesh/Wine_Quality_Prediction",
      text: "SKILLS",
      skillUsed:
        "Python,Numpy,Pandas,Data Preprocessing,Model Evaluation,Matplotlib,Scikit learn",
    },
    {
      title: "Employee Burnout Analysis using Machine Learning",
      des: "Developed a machine learning model to predict employee burnout using features like work hours, job satisfaction, and stress levels, achieving an accuracy of 85% and an F1 score of 0.82. Implemented various classification algorithms and optimized hyperparameters for the best results.",
      src: "https://www.inventiva.co.in/wp-content/uploads/2023/03/GettyImages-943067460-28883b8136b24330932cd4e2855c2508-1-1024x576.webp",
      githubLink:
        "https://github.com/MadathaGanesh/Employee_Burnout_Analysis_Using_Machine_learning",
      text: "SKILLS",
      skillUsed:
        "Python,Numpy,Pandas,Data Preprocessing,Model Evaluation,Matplotlib,Scikit learn",
    },
    {
      title: "Calculator",
      des: " Developed a fully functional calculator using HTML, CSS, and JavaScript, enhancing UI/UX design skills. Achieved 100% accuracy in basic arithmetic operations with a responsive interface for seamless user experience..",
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20230219213349/calculator.jpg",
      githubLink:
        "https://github.com/MadathaGanesh/Calculator-Using-HTML-CSS-and-JavaScript",
      demoLink: "https://easycalcalculator.netlify.app//",
      text: "SKILLS",
      skillUsed: "HTML, CSS, JavaScript",
    },
  ];

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
    if (showAllProjects) {
      // Scroll to the top of the Projects section when loading more
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData
          .slice(0, showAllProjects ? projectsData.length : 6)
          .map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              text={project.text}
              skillUsed={project.skillUsed}
              des={project.des}
              src={project.src}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={toggleShowAllProjects}
          className="download flex items-center"
        >
          {showAllProjects ? (
            <>
              Show Less <FaChevronUp className="ml-2" />
            </>
          ) : (
            <>
              Show More <FaChevronDown className="ml-2" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Projects;
