import React, { useState } from "react";
import style from "./Form.module.css";

function Form({ onSubmit }) {
  const [mode, setMode] = useState("easyMode");

  function handleChange(e) {
    e.target.value && setMode(e.target.value);
  }

  return (
    <form noValidate onSubmit={(e) => onSubmit(e, mode)} className={style.form}>
      <div className={style.selectWrapper}>
        <select
          name="select-mode"
          onChange={handleChange}
          className={style.selectMode}
        >
          <option value="">Pick mode</option>
          <option value="easyMode">Easy mode</option>
          <option value="normalMode">Normal Mode</option>
          <option value="hardMode">Hard Mode</option>
        </select>
      </div>
      <button className={style.button}>Start</button>
    </form>
  );
}

export default Form;
