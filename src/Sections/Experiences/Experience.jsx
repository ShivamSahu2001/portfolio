import React from "react";
import "./Experience.css";
import constant from "../../constant.json";
import { useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Heading from "../../components/Heading/Heading";

const Experience = () => {
  const [currentIdx, setCurrentIndex] = useState(0);
  return (
    <section id="Experience">
      <Heading index="02" heading="MySkills" />
      <div className="experience_container">
        <div className="experience_left">
          {constant.experiences.map((experience, idx) => (
            <div
              className={
                idx === currentIdx
                  ? "experience_tab experience_active_tab"
                  : "experience_tab"
              }
              onClick={() => setCurrentIndex(idx)}
            >
              {experience.company}
            </div>
          ))}
        </div>
        <div className="experience_right">
          <h1 className="experience_title">
            {" "}
            {constant.experiences[currentIdx].title}@
            <a
              href={constant.experiences[currentIdx].link}
              target="_blank"
              rel="noreferrer"
            >
              {constant.experiences[currentIdx].company}
            </a>
          </h1>

          <p className="experience_duration">
            {constant.experiences[currentIdx].duration}
          </p>

          {constant.experiences[currentIdx].desc.map((point) => (
            <p className="experience_desc"><PlayArrowIcon />{point}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
