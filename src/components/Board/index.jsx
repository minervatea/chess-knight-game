import React from "react";
import { StyledBoard } from "./board.styled";
import Tile from "./Tile/index";
import { createBoard, getTileColor } from "../utils/utils";

export default function Board(props) {
  const ROW = 8;
  const COLUMN = 8;

  const board = createBoard(ROW, COLUMN);

  return (
    <StyledBoard>
      {board.map((tile) => {
        return <Tile key={tile} color={getTileColor(tile)} />;
      })}
    </StyledBoard>
  );
}
