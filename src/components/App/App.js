import React, { useState } from "react";

import Form from "../Form/Form";
import Grid from "../Grid/Grid";
import InfoBlock from "../InfoBlock/InfoBlock";

import fetcher from "../../utils/fetcher";

import style from "./App.module.css";

function App() {
  const [fieldSize, setFieldSize] = useState(5);
  const [squaresInfo, setSquaresInfo] = useState([]);

  function handleSubmit(e, mode) {
    e.preventDefault();

    fetcher()
      .then((res) => setFieldSize(res[mode]?.field))
      .catch((err) => console.log(err));
  }

  return (
    <div className={style.content}>
      <div className={style.gridField}>
        <Form onSubmit={handleSubmit} />
        <Grid fieldSize={fieldSize} getSquaresInfo={setSquaresInfo} />
      </div>
      <InfoBlock squaresInfo={squaresInfo} />
    </div>
  );
}

export default App;
