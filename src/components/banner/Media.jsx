import React from "react";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaRegEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import Resume from "../../assets/Resume.pdf";
const Media = () => {
  return (
    <div>
      <h2 className="text-base uppercase font-titleFont mb-4">
        Fine my Resume
      </h2>
      <div className="flex gap-6">
        <span className="download">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </span>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://github.com/MadathaGanesh">
                <FaSquareGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/madathaganesh/">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://x.com/GaneshMadatha?t=PO0or3FpJyRxtJmcMMKqnQ&s=09">
                <BsTwitterX />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://wa.me/+91 9059493829">
                <FaWhatsapp />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="mailto:madathaganesh1@gmail.com">
                <FaRegEnvelope />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="Tel:9059493829">
                <FaPhone />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.instagram.com/gani_madatha_08?igsh=enRnNGF6cXowdHM=">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
