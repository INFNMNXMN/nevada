export function Copo({ copo }) {
  const style = {
    top: `${copo.x}%`,
    left: `${copo.y}%`,
    position: "absolute",
    fontSize: `${copo.tamaño * copo.tamaño * 200}%`,
    transform: `rotate(${copo.rotacion}deg) rotateX(${copo.rotacion}deg)`,
  };
  return <span style={style}>❆</span>;
}
