import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Java Foundations Certified Junior Associate"
            subTitle="Oracle Academy"
            result={
              <span>
                <a
                  href="https://drive.google.com/file/d/1aa13tQMjUwZh_z0VPlbafiZwa_WaaD-4/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des="Validates fundamental Java programming skills and knowledge."
          />
          <ResumeCard
            title="Basics of Prompt Engineering"
            subTitle="IUCEE Foundation"
            result={
              <span>
                <a
                  href="https://drive.google.com/file/d/1hJtzcLu5aF_-G3Qe-C8BtmsLgroz7ms1/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des="Covers foundational concepts of prompt engineering for effective AI interactions."
          />

          <ResumeCard
            title="MYSQL Database Course Completion."
            subTitle="Oracle Academy."
            result={
              <span>
                <a
                  href="https://drive.google.com/file/d/1186grOBCR3chjeK6ELElYNf5tNL254H6/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des="Demonstrates proficiency in MySQL database management and SQL queries."
          />
          <ResumeCard
            title="Introduction to Networks"
            subTitle="Cisco Academy."
            result={
              <span>
                <a
                  href="https://www.credly.com/badges/1054fe77-5bc5-45ac-86d5-c4a72198afb8/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des="Provides fundamental knowledge of networking concepts and technologies."
          />
          <ResumeCard
            title="Python Course Completion"
            subTitle="Cisco Academy."
            result={
              <span>
                <a
                  href="https://drive.google.com/file/d/1tpZRWxvXtfqtqWtyt6_4Y9HWbyM_DfyW/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des="Certifies understanding and application of Python programming principles."
          />
          <ResumeCard
            title="AWS Cloud Foundations"
            subTitle="AWS Academy."
            result={
              <span>
                <a
                  href="https://drive.google.com/file/d/1ym-xCCfWCQlCUqe6tpexNj1l52Sv73i5/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-designColor hover:text-red-700 duration-100 underline"
                >
                  Click here
                </a>
              </span>
            }
            des=" Establishes foundational knowledge of AWS cloud services and cloud computing principles."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
