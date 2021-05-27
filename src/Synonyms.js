import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {

  //Below conditions will render the synonyms IF a synonyms array is available
  //and will the theme is "puppy" or "kitty"
  if(props.data && props.theme === "puppy") {
    return (
      <div className="Synonyms">
        <ul className="Synonyms-ul">
          {props.data.map(function(synonym, index) {
            if (index < 8) {
              return (
                <li key={index} className="Synonyms-li">
                  {synonym}
                </li>
              ); 
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } if(props.data && props.theme === "kitty") {
    return (
      <div className="Synonyms">
        <ul className="Synonyms-ul">
          {props.data.map(function(synonym, index) {
            if (index < 8) {
              return (
                <li key={index} className="Synonyms-li-kitty">
                  {synonym}
                </li>
              ); 
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );  
  } else {
    return null;
  }
}