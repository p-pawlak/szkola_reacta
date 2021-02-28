import React from "react";
import colors from "../Data/colors";

function TextArea({
  bgColor,
  color,
  borderSize,
  borderRadius,
  borderColor,
  children,
}) {
  const style = {
    backgroundColor: colors[bgColor] || "red",
    color: colors[color] || "black",
    borderWidth: borderSize,
    border: `${borderSize} solid ${colors[borderColor]}`,
    borderRadius: borderRadius,
  };
  return (
    <textarea name="textarea" cols="30" rows="10" style={style}>
      {children}
    </textarea>
  );
}

export default TextArea;
