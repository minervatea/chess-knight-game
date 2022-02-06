import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./features/gameSlice";

const rootReducer = combineReducers({
  gameReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});
