import React from "react";

export default function Example(props) {
  //Below condition will render the example only when one is available
  if(props.data) {
    return (
      <span className="Meaning-example">
        --"{props.data}"
      </span>
    );
  } else {
    return null;
  }
}