import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Componente funcional component
function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumPalpite(1);
  };
  if (estado === "ENTRADA") {
    return (
      <div>
        <p>Pense em um valor entre 0-299 e deixe a maquina acertar!</p>
        <button onClick={iniciarJogo}>Começar a jogar</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novo jogo!</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>O seu número é {palpite}? </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Bilada!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
