// what's the best way to create a board and where to put it
const createBoard = (rowCnt, colCnt) => {
  let board = [];
  for (var row = 1; row <= rowCnt; row++) {
    for (var col = 1; col <= colCnt; col++) {
      board.push("" + row + col);
    }
  }
  return board;
};

const getTileColor = (tileNumber) => {
  let sum = Number(tileNumber.charAt(0)) + Number(tileNumber.charAt(1));
  return sum % 2 === 0 ? "light" : "dark";
};

export { createBoard, getTileColor };
