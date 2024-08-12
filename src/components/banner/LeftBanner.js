import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Full Stack Developer",
      "ReactJS Developer",
      "Java Developer",
      "Python Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to my Universe</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Madatha Ganesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Recent Computer Science graduate with a specialization in AI and
          Machine Learning, possessing hands-on experience in software
          development, data analytics, and machine learning. Proficient in Java,
          Python, and frontend technologies like React.js and Tailwind CSS.
          Adept at building scalable applications and optimizing algorithms,
          seeking a challenging role as a Software Developer or Full-Stack
          Developer.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
