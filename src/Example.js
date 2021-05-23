import React from "react";

export default function Example(props) {
  //Below condition will render the example only when one is available
  if(props.data) {
    return (
      <em className="Meaning-example">
        --"{props.data}"
      </em>
    );
  } else {
    return null;
  }
}