import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcResult from "./components/ImcResult";
import { data } from "./data/data-imc";
import { useState } from "react";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const imcResult = (+weight / (+height * +height)).toFixed(2);

    setImc(imcResult);

    const matched = data.find(
      (item) => imcResult >= item.min && imcResult <= item.max,
    );

    if (!matched) return;

    setInfo(matched.info);
    setInfoClass(matched.infoClass);
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <>
      <main className="container">
        <header>
          <h1 className="page-title">Calculadora IMC</h1>
        </header>
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcResult
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </main>
    </>
  );
}

export default App;
