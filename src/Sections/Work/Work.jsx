import React from "react";
import "./Work.css";
import constant from "../../constant.json";
import Heading from "../../components/Heading/Heading";
const Work = () => {
  return (
    <section id="Work">
      <Heading index="03" heading="Projects" />
      <div className="work_container">
        {constant.projects.map((project, idx) => (
          <div className="work_project">
            <div className="work_left">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img className="work_img" src={require('./MyPro.jpg')} alt="MyProject" />
              </a>
            </div>
            <div className="work_right">
              <a href="https://shivamsahu2001.github.io/capstone_project/" target="_blank" rel="noreferrer">
                Art Store
              </a>
              <p className="work_desc">It is a e-commerce website in which customer can buy differnt art of their choices.</p>
              <div className="work_skill_container">
              HTML Js React-Js
              </div>
              <div>
                <a
                  href= "https://github.com/ShivamSahu2001"
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Github
                </a>
                {/* <a
                  href={project.link}
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Live
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
