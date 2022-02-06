import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reachedTarget: false,
  knightPos: [],
  targetPos: [],
};

export const gameSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    startGame: (state, action) => {},
  },
});

export const { startGame } = gameSlice.actions;

export default gameSlice.reducer;
