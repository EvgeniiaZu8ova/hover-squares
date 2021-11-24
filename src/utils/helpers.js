export const stringify = (rowIndex, colIndex) =>
  JSON.stringify({ row: rowIndex, col: colIndex });

export const parse = (inputString) => {
  const obj = JSON.parse(inputString);
  let outputString = "";

  for (let key of Object.keys(obj)) {
    outputString = outputString.concat(`${key} ${obj[key]} `);
  }

  return outputString;
};
