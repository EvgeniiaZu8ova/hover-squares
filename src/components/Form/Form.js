import React from "react";
import style from "./Form.module.css";

function Form(props) {
  return (
    <form noValidate>
      <div className={style.selectWrapper}>
        <select name="select-mode" className={style.selectMode}>
          <option value="1">first</option>
          <option value="2">second</option>
          <option value="3">third</option>
          <option value="4">fourth</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
