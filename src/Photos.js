import React from "react";
import "./Photos.css";

export default function Photos(props) {

  if(props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {/* Looping function will run through all the photos arrays */}
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                  <img src={photo.src.landscape} alt={props.description} className="img-fluid img-thumbnail" />
                </a>
              </div>  
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}