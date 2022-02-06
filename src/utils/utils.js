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

const getStartPos = (board) => {
  const boardCopy = board.slice();
  const shuffled = boardCopy.sort(() => 0.5 - Math.random());
  let pos = shuffled.slice(0, 2);

  // returns [knightPos, targetPos]
  return pos;
};

const getPossibleMoves = (knightPos) => {
  // knight can move L shape
  let x = Number(knightPos.charAt(0));
  let y = Number(knightPos.charAt(1));

  const moves = [
    "" + (x - 2) + (y - 1),
    "" + (x - 2) + (y + 1),
    "" + (x - 1) + (y - 2),
    "" + (x - 1) + (y + 2),
    "" + (x + 1) + (y - 2),
    "" + (x + 1) + (y + 2),
    "" + (x + 2) + (y - 1),
    "" + (x + 2) + (y + 1),
  ];

  return moves.filter((move) => !move.includes("-") && !move.includes("0"));
};
export { createBoard, getTileColor, getStartPos, getPossibleMoves };
