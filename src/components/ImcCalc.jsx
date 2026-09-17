import "./css/ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

const ImcCalc = ({ calcImc }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleHeightChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);

    if (value.length > 1) {
      value = value.slice(0, 1) + "." + value.slice(1);
    }
    setHeight(value);
  };
  const handleWeightChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 5);

    if (value.length === 3 || value.length === 4) {
      value = value.slice(0, 2) + "." + value.slice(2);
    } else if (value.length === 5) {
      value = value.slice(0, 3) + "." + value.slice(3);
    }
    setWeight(value);
  };

  return (
    <div>
      <section id="calc-container">
        <form id="imc-form">
          <section className="form-inputs">
            <div className="form-control">
              <label htmlFor="weight">Peso (Kg):</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="75.43 Kg"
                required
                onChange={(e) => handleWeightChange(e)}
                value={weight}
              />
            </div>
            <div className="form-control">
              <label htmlFor="height">Altura (m):</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="1.80"
                required
                onChange={(e) => handleHeightChange(e)}
                value={height}
              />
            </div>
          </section>
          <section className="box-action">
            {/* componente button aqui */}
            <Button
              id="calc-btn"
              text="Calcular"
              action={(e) => calcImc(e, height, weight)}
            />
          </section>
        </form>
      </section>
    </div>
  );
};

export default ImcCalc;
