import React, { useState } from "react";

import Form from "../Form/Form";
import Grid from "../Grid/Grid";

import fetcher from "../../utils/fetcher";

import style from "./App.module.css";

function App() {
  const [fieldSize, setFieldSize] = useState(5);

  function handleSubmit(e, mode) {
    e.preventDefault();

    fetcher()
      .then((res) => setFieldSize(res[mode]?.field))
      .catch((err) => console.log(err));
  }

  return (
    <div className={style.content}>
      <Form onSubmit={handleSubmit} />
      <Grid fieldSize={fieldSize} />
    </div>
  );
}

export default App;
