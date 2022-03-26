import { frequenciaCopos } from "./Constantes";

let viento = 0;

export function moverCopos(copos) {
  viento = Math.min(
    2,
    Math.max(-2, viento + (20 / frequenciaCopos) * (Math.random() - 0.5))
  );
  return copos.map(moverCopo);
}

function moverCopo(copo) {
  const tamaño = copo.tamaño;
  let rotacion = copo.rotacion + (10 / frequenciaCopos) * Math.abs(viento);
  rotacion = rotacion % 360;
  let rotacionX = copo.rotacion + (10 / frequenciaCopos) * Math.abs(1 + viento);
  rotacionX = rotacion % 360;

  let friccion = 1 - Math.abs(rotacionX / 180 - 1);

  const velocidadX = tamaño * (10 / frequenciaCopos) * Math.random();
  let x = copo.x + velocidadX * (1 - friccion);
  if (x > 100) x = -10;
  const velocidadY =
    tamaño * viento * (10 / frequenciaCopos) * Math.random() * friccion;
  let y = copo.y + velocidadY;

  if (y > 110) y = -10;
  if (y < -10) y = 110;
  return { ...copo, x, y, rotacion, rotacionX };
}
