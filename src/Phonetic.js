import React from "react";


export default function Phonetic(props) {

  if(props.phonetic) {
    return (
      <div>
        <div className="Phonetic-button">
          <a href={props.phonetic.audio} rel="noopener noreferrer" target="_blank">
          </a>
        </div>
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}