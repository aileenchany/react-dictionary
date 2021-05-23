import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  
  return (
    <div className="Meaning-div">
      <h3 className="Meaning-part text-capitalize">
        {props.data.partOfSpeech}
      </h3>
      {props.data.definitions.map(function(definition, index) {
        return (
          <div key={index} className="Meaning-definition">
            {definition.definition}
            <br />
            {/* Below we pass data to display an example IF there is one */}
            <Example data={definition.example} />
            {/* Below we pass data props, which is an array of synonyms */}
            <Synonyms data={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}