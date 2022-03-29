import { copos_iniciales } from "./Constantes";

export function crearCopos() {
  const copos = [];
  for (let i = 0; i < copos_iniciales; i++) {
    copos.push(crearCopo());
  }
  return copos;
}
function crearCopo() {
  return {
    x: -10 - copos_iniciales * Math.random(),
    y: -10 + 120 * Math.random(),
    tamaño: Math.random() * 0.8 + 0.1,
    rotacion: Math.random() * 360,
  };
}
