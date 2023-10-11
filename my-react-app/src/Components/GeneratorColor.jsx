import { useState } from "react";

const GeneradorDeCajas = () => {

  const [colores, setColores] = useState(["red", "blue", "purple"]);
  const [nombreColor, setNombreColor]= useState("");


  const addColor = () => {
    const coloresTemporal = [...colores];
    coloresTemporal.push(nombreColor);
    setColores(coloresTemporal)
  }
  

  const handleColorChange = (e) => {
    setNombreColor(e.target.value)
  }


  const renderColores = () => {
    return colores.map((item, index) => (
      <div key={index} style={{ 
        width: "40px", 
        height: "40px", 
        background: item, 
        margin: "10px" }}
      ></div>
    ));
  };
  

  return (
    <div className="colors-generator">

      <div>
          <input 
            className="form-control mt-4" 
            type="text" value={nombreColor} 
            placeholder="Write a color in English"
            onChange={handleColorChange} 
          />
      </div>

      <div>
          <button 
            className="btn btn-primary mt-2" 
            onClick={addColor}>Add Color</button>
      </div>

      <div className="colors-render">
        {
          renderColores()
        }
      </div>
      
      
    </div>
  );
}
 
export default GeneradorDeCajas;

