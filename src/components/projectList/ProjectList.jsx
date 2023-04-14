import React from "react";
import { FaGithub } from "react-icons/fa";
import "./prodjetList.css";
import { Projects } from "../projects/Projects";
import { projects } from "../../data";

export const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="pl-title">Projects I made or took part in</h2>
        <p className="pl-desc">
          Here are a few projects that I made or took pat in while studying or
          participating in mentoring programs.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div className="pl-texts">
        <p className="pl-desc">
          More of my work could be found on my{" "}
          <a
            href="https://github.com/AudriusAnusauskas"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub />
          </a>
        </p>
      </div>
    </div>
  );
};
