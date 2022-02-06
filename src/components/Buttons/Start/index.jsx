import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setStartPosition } from "../../../store/features/gameSlice";

export default function StartButton(props) {
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(setStartPosition());
  };

  return (
    <Button onClick={handleStart} variant="contained" sx={{ width: "80%" }}>
      Start
    </Button>
  );
}
