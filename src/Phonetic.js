import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </span>
  );
}
