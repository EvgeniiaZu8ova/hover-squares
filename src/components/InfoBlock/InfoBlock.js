import React from "react";

import style from "./InfoBlock.module.css";

function InfoBlock({ squaresInfo }) {
  return (
    <div className={style.squaresInfo}>
      <h1 className={style.title}>Hover Squares</h1>
      <div className={style.infoBlocks}>
        {squaresInfo.length > 0 &&
          squaresInfo.map((el, index) => (
            <article key={index} className={style.block}>
              {el}
            </article>
          ))}
      </div>
    </div>
  );
}

export default InfoBlock;
