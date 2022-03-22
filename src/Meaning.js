import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <div>
                {definition.definition}
                <br />
                <em className="Example">{definition.example}</em>
                <br />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
