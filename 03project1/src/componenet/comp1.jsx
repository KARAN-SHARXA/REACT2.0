import React from 'react'
import { Bookmark } from "lucide-react";

const Card1 = (props) => {
  
  
  return (
    <div> <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://imgs.search.brave.com/qgotwwMHCohGZeO5-slFfP3-8TAP1MRggWhRJR07VUA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9BbWF6/b24tTG9nby0xLTEx/NTV4NzcwLnBuZw"
            alt=""
          />
          <button>
            Save <Bookmark />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.daysAgo}</span>{" "}
          </h3>
          <h2>{props.title}</h2>
          <div>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <div>
              <h3>$123</h3>
              <p>Mumbai,india</p>
            </div>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div></div>
  )
}

export default Card1