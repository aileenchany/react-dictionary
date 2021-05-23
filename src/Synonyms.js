import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {

  //Below condition will render the synonyms only if a synonyms array is available
  if(props.data) {
    return (
      <div className="Synonyms">
        <ul className="Synonyms-ul">
          {props.data.map(function(synonym, index) {
            return (
              <li key={index} className="Synonyms-li text-capitalize">
                {synonym}
              </li>
            ); 
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}