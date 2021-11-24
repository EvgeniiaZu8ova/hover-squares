import React, { useEffect } from "react";

import fetcher from "../../utils/fetcher";

import style from "./Grid.module.css";

function Grid(props) {
  useEffect(() => {
    fetcher()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div className={style.grid}></div>;
}

export default Grid;
