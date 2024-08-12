import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full h-45 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.tech in Computer Science"
            subTitle="Vaagdevi College of Engineering (2020 - 2024)"
            result="8.6/10"
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Shivani Junior College (2018 - 2020)"
            result="9.7/10"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Ekashil e techno School (2017 - 2018)"
            result="9.0/10"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
