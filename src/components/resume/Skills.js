// src/components/Skills.js
import React from "react";
import data from "../resume/SkillsData";
import SkillsCard from "../resume/SkillsCard";

const Skills = () => {
  return (
    <section className="w-full p-6 bg-bodyColor border-b-[1px] border-b-black">
      <div className="flex flex-wrap justify-center bg-gray">
        {Object.entries(data).map(([title, items]) => (
          <SkillsCard key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
