import React from "react";

import Form from "../Form/Form";
import Grid from "../Grid/Grid";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.content}>
      <Form />
      <Grid />
    </div>
  );
}

export default App;
