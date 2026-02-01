import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w }) => {
  // const openSite = (e) => {
    // prevent when clicking action buttons
    // if (e) e.stopPropagation();
    // if (w.site && w.site !== "#") window.open(w.site, "_blank");
  // };

  return (
    <div>
      <div className="works-card">
        <div className="work-image-container">
          {w.image && <img src={w.image} alt={w.title} className="work-image" />}
        </div>

        <div className="mid-work">
          <p className="work-title">{w.title}</p>
          <p className="work-desc">{w.desc}</p>
        </div>

        <div className="bottom-work">
          {w.tech &&
            w.tech.map((e, index) => {
              return <small key={index}>{e}</small>;
            })}
        </div>

        <div className="card-actions">
          {w.site && w.site !== "#" && (
            <a
              href={w.site}
              target="_blank"
              rel="noreferrer"
              className="action-btn demo-btn"
            >
              <IoOpenOutline />
              <span className="action-label">Live Demo</span>
            </a>
          )}

          {w.gitlink && (
            <a
              href={w.gitlink}
              target="_blank"
              rel="noreferrer"
              className="action-btn code-btn"
            >
              <FiGithub />
              <span className="action-label">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
