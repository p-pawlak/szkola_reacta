import React from "react";
import colors from "../Data/colors";

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
  const style = {
    backgroundColor: colors[bgColor] || "red",
    color: colors[color] || "black",
    borderWidth: borderSize,
    border: `${borderSize} none ${colors[borderColor]}`,
    borderRadius: borderRadius,
  };
  return <input type="text" style={style} />;
}

export default Input;
