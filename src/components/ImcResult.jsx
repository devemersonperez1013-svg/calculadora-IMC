import "./css/ImcResult.css";
import Button from "./Button.jsx";

const ImcResult = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div id="result-container">
      <h2 id="imc-number">Seu Imc: <span className={infoClass}>{imc}</span></h2>
      <p id="imc-info">Sua situação atual: <span className={infoClass}>{info}</span></p>

      <h3>Confira as classificações</h3>
      <table id="imc-table">
        <thead id="table-header">
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Obesidade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="table-data" key={item.info}>
              <td>{item.classification}</td>
              <td>{item.info}</td>
              <td>{item.obesity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button id="back-btn" text="Voltar" action={resetCalc} />
    </div>
  );
};

export default ImcResult;
