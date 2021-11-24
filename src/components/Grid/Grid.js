import React, { useEffect } from "react";

import style from "./Grid.module.css";

function Grid({ fieldSize }) {
  useEffect(() => console.log(fieldSize), [fieldSize]);

  return <div className={style.grid}></div>;
}

export default Grid;
