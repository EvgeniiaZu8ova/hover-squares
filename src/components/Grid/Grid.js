import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";

import { stringify, parse } from "../../utils/helpers";

import style from "./Grid.module.css";

function Grid({ fieldSize, getSquaresInfo }) {
  const [hoveredSquares, setHoveredSquares] = useState([]);

  const updateSquares = useCallback(
    (currentSquare) => {
      let index = hoveredSquares.indexOf(currentSquare);

      if (index < 0) {
        setHoveredSquares((prev) => [...prev, currentSquare]);
      } else {
        setHoveredSquares((prev) => prev.filter((_, i) => i !== index));
      }
    },
    [hoveredSquares]
  );

  useEffect(() => setHoveredSquares([]), [fieldSize]);

  useEffect(
    () => getSquaresInfo(hoveredSquares.map((el) => parse(el))),
    [hoveredSquares, getSquaresInfo]
  );

  return (
    <div className={style.grid}>
      {Array.from(Array(fieldSize)).map((_, rowIndex) => (
        <div key={rowIndex} className={style.gridRow}>
          {Array.from(Array(fieldSize)).map((_, colIndex) => (
            <div
              key={colIndex}
              className={cn(style.gridCell, {
                [style.gridCellActive]:
                  hoveredSquares.indexOf(
                    stringify(rowIndex + 1, colIndex + 1)
                  ) > -1,
              })}
              onMouseOver={() =>
                updateSquares(stringify(rowIndex + 1, colIndex + 1))
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
