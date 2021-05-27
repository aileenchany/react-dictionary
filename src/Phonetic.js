import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);
  
  function handleClick() {
    audio.play();
  }
  
  if(props.phonetic && props.theme === "puppy") {
    return (
      <div className="Phonetic">
        <button
          type="button"
          className="Phonetic-button"
          onClick={handleClick}
        >
        </button>
        <span className="Phonetic-text">
          {props.phonetic.text}
        </span>
      </div>
    );
  } if(props.phonetic && props.theme === "kitty") {
    return (
      <div className="Phonetic">
        <button
          type="button"
          className="Phonetic-button-kitty"
          onClick={handleClick}
        >
        </button>
        <span className="Phonetic-text">
          {props.phonetic.text}
        </span>
      </div>
    );
  } else {
    return null;
  }
}