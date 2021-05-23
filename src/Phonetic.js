import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {

  if(props.phonetic) {
    return (
      <div className="Phonetic">
        <div className="Phonetic-button">
          <a 
            href={props.phonetic.audio} 
            rel="noopener noreferrer" 
            target="_blank"
          >
          </a>
        </div>
        <span className="Phonetic-text">
          {props.phonetic.text}
        </span>
      </div>
    );
  } else {
    return null;
  }
}