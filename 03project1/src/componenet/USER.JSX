import React from "react";
import { Bookmark } from "lucide-react";

const Card1 = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt={`${props.company} logo`} />
        <button>
          Save <Bookmark size={16} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.company} <span>{props.daysAgo}</span>
        </h3>
        <h2>{props.title}</h2>
        <div>
          <h4>{props.jobType}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card1;
