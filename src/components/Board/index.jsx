import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledBoard } from "./board.styled";
import Tile from "./Tile/index";
import { createBoard, getTileColor, getPossibleMoves } from "../../utils/utils";
import {
  setBoard,
  setReachedTarget,
  setHasGameStarted,
} from "../../store/features/gameSlice";

export default function Board(props) {
  const ROW = 8;
  const COLUMN = 8;
  const board = createBoard(ROW, COLUMN);
  const firstUpdate = useRef(true);
  const { knightPos, targetPos } = useSelector((state) => state.gameState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstUpdate) {
      firstUpdate.current = false;
      dispatch(setBoard(board));
    }
    if (knightPos === targetPos) {
      dispatch(setReachedTarget(true));
      alert("you won! please start it again");
      dispatch(setHasGameStarted(false));
    }
  }, [knightPos]);

  return (
    <StyledBoard>
      {board.map((tile) => {
        if (tile === knightPos) {
          return (
            <Tile
              key={tile}
              color={getTileColor(tile)}
              knight={true}
              tilePos={tile}
            />
          );
        }
        if (tile === targetPos) {
          return (
            <Tile
              key={tile}
              color={getTileColor(tile)}
              target={true}
              tilePos={tile}
            />
          );
        }
        return <Tile key={tile} color={getTileColor(tile)} tilePos={tile} />;
      })}
    </StyledBoard>
  );
}
