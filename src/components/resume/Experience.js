import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Internship</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Salesforce Developer Virtual Internship"
            subTitle="SmartInternz - (Aug 2023 - Oct 2023)"
            result="Warangal"
            des="Contributed to Salesforce application development and customization using Apex and Visualforce to improve CRM functionalities. Demonstrated problem-solving skills by resolving complex issues and optimizing performance. Collaborated on integrating Salesforce with external systems, gaining practical experience in development methodologies and version control."
          />
          <ResumeCard
            title="Machine Learning Intern"
            subTitle="Bharat Intern - (July 2023 - Aug 2023)"
            result="Warangal"
            des="Developed a predictive model that boosted forecasting accuracy by 20% with advanced algorithms and improved decision-making. Led data cleaning and analysis that enhanced model efficiency by 15%, aiding targeted marketing. Streamlined data preprocessing, cutting preparation time by 30% and enhancing team productivity."
          />
          <ResumeCard
            title="Data analytics  Intern"
            subTitle="AICTE Neat- (May 2023 - July 2023)"
            result="Warangal"
            des="As a Data Analyst, I expertly used SQL and Python to collect, clean, and analyze data, providing actionable insights that informed decision-making and enhanced business strategies. I created impactful visualizations with Matplotlib and ensured data accuracy through rigorous validation. My work significantly contributed to improving operational efficiency and business performance."
          />
          <ResumeCard
            title="Web Development  Intern"
            subTitle="Txon Academy- (March 2023 - Apr 2023)"
            result="Warangal"
            des="As a Frontend Web Developer, I effectively translated design concepts into functional and visually appealing websites, optimizing performance and responsiveness across devices. I employed best practices to enhance user experience and accessibility, leveraging HTML, CSS, and basic JavaScript. My hands-on experience and continuous learning in frontend technologies contributed to significant personal and professional growth."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
