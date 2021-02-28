import React from "react";
import colors from "../Data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ bgColor, color, label, icon, children }) {
  const style = {
    backgroundColor: colors[bgColor] || "red",
    color: colors[color] || "black",
  };

  return (
    <button style={style}>
      <FontAwesomeIcon icon={icon} />
      {children || label}
    </button>
  );
}

Button.defaultProps = {
  bgColor: "carrot",
  color: "midnight blue",
};
