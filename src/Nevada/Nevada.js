import { useEffect } from "react";
import { useState } from "react";
import { frequenciaCopos } from "./Constantes";
import { crearCopos } from "./crearCopos";
import { Copo } from "./Copo";
import { moverCopos } from "./moverCopos";

export function Nevada() {
  const [copos, setCopos] = useState(crearCopos);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCopos(moverCopos);
    }, 1000 / frequenciaCopos);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      {copos.map((copo, index) => (
        <>
          <Copo key={index} copo={copo} />
          <br />
        </>
      ))}
    </>
  );
}
