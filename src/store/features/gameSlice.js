import { createSlice } from "@reduxjs/toolkit";
import { getStartPos, getPossibleMoves } from "../../utils/utils";

const initialState = {
  board: [],
  knightPos: "0",
  targetPos: "0",
  possibleMoves: [],
  reachedTarget: false,
  hasGameStarted: false,
};

export const gameSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    setBoard: (state, { payload: board }) => {
      state.board = board;
    },
    setHasGameStarted: (state, { payload: hasGameStarted }) => {
      state.hasGameStarted = hasGameStarted;
    },
    setReachedTarget: (state, { payload: reachedTarget }) => {
      state.reachedTarget = reachedTarget;
    },
    moveKnight: (state, { payload: move }) => {
      state.knightPos = move;
    },
    setStartPosition: (state) => {
      const positions = getStartPos(state.board);
      state.knightPos = positions[0];
      state.targetPos = positions[1];
      state.possibleMoves = getPossibleMoves(state.knightPos);
    },
    setPossibleMoves: (state) => {
      state.possibleMoves = getPossibleMoves(state.knightPos);
    },
  },
});

export const {
  startGame,
  setBoard,

  setHasGameStarted,
  setReachedTarget,
  setStartPosition,
  setPossibleMoves,
  moveKnight,
} = gameSlice.actions;

export default gameSlice.reducer;
