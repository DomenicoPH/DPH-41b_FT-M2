import React from "react";
import Botones from "./Botones";

const studentName = "Domenico";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Títulos</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills && 
          techSkills.map((element,index) => {
            return <li key={index}>{element}</li>;
          })}
      </ul>
      <Botones alerts={alerts}></Botones>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
