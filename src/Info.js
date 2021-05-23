import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Info.css";

export default function Info(props) {

  if(props.data) {
    return (
      <div className="Info">
        <h2 className="Info-word text-capitalize">{props.data.word}</h2>
        {/* Looping function will run through all the phonetic arrays */}
        {props.data.phonetics.map(function(phonetic, index) {
          return (
            <div key={index} >
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {/* Looping function will run through all the meanings: noun, adjective, adverb, verb, etc */}
        {props.data.meanings.map(function(meaning, index) { 
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}