import React from "react";
import { StyledTile } from "./tile.styled";
import { theme } from "../../../styles/theme";

export default function Tile({ color }) {
  if (color === "dark") {
    return (
      <StyledTile
        sx={{ backgroundColor: theme.palette.tile.dark }}
        onClick={() => console.log("hi")}
      />
    );
  }

  return (
    <StyledTile
      sx={{ backgroundColor: theme.palette.tile.light }}
      onClick={() => console.log("hi")}
    />
  );
}
