import React from "react";
import {
  FaLinkedinIn,
  FaGithubAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="data:image/jpeg;base64,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"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Madatha Ganesh</h3>

        <p className="text-base text-gray-400 tracking-wide text-justify">
          Feel free to reach out to me. I'm open to discussing new projects,
          creative ideas, or opportunities to contribute to your vision. Email
          me with any questions or inquiries, and I'll be happy to answer and
          arrange a meeting.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a href="Tel:9059493829">+91 9059493829</a>
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-white hover:text-designColor cursor-pointer duration-300">
            <a
              href="mailto:madathaganesh1@gmail.com
"
            >
              madathaganesh1@gmail.com
            </a>
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/MadathaGanesh">
              <FaGithubAlt />
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
            <a href="https://www.instagram.com/gani_madatha_08?igsh=enRnNGF6cXowdHM=">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
