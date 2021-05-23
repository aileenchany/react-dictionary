import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.data);
  return (
    <div className="Meaning-div">
      <h3 className="Meaning-part text-capitalize">{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function(definition, index) {
        return (
          <div key={index} className="Meaning-definition">
            {definition.definition}
            <br />
            <em className="Meaning-example">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}