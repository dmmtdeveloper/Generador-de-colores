import { useState } from "react";

const GeneradorDeCajas = () => {
  const [colores, setColores] = useState([]);
  const [nombreColor, setNombreColor] = useState("");
  const [ancho, setAncho] = useState(""); 
  const [alto, setAlto] = useState("");   

  const addColor = () => {
    const coloresTemporal = [...colores];
    coloresTemporal.push({ color: nombreColor, width: ancho, height: alto });
    setColores(coloresTemporal);
    setNombreColor(""); // Limpia el campo de entrada de color
  }

  const handleColorChange = (e) => {
    setNombreColor(e.target.value)
  }

  const handleAnchoChange = (e) => {
    setAncho(parseInt(e.target.value, 10));
  }

  const handleAltoChange = (e) => {
    setAlto(parseInt(e.target.value, 10));
  }

  const renderColores = () => {
    return colores.map((item, index) => (
      <div
        key={index}
        style={{
          width: `${item.width}px`,
          height: `${item.height}px`,
          background: item.color,
          margin: "10px",
        }}
      ></div>
    ));
  };
  

  return (
    <div className="colors-generator">
      <div className="colors-control">
        <input
          className="form-control"
          type="text"
          value={nombreColor}
          placeholder="Escribe un color en inglés"
          onChange={handleColorChange}
        />
        <input
          className="form-control"
          type="number"
          value={ancho}
          placeholder="Ancho (px)"
          onChange={handleAnchoChange}
        />
        <input
          className="form-control"
          type="number"
          value={alto}
          placeholder="Alto (px)"
          onChange={handleAltoChange}
        />
      </div>

        <button className="btn btn-primary mt-4" onClick={addColor}>Agregar Color</button>

      <div className="colors-render">
        {renderColores()}
      </div>
    </div>
  );
};
 
export default GeneradorDeCajas;

