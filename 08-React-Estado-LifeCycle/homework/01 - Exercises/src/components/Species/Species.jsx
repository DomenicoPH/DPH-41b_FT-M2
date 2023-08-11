import React from "react";
// import styledSpecies from "./Species.module.css";

export default function Species(props) {
  // console.log(species);
  return(
  <div>
    <h2>Species</h2>
    {props.species.map((specie, index) => (
      <button key={index} onClick={props.handleSpecies} value={specie}>{specie}</button>
    ))}
    <button onClick={props.handleAllSpecies}>All Animals</button>
  </div>
  )
}
