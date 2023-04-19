import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = (props) => {
  const snap = useSnapshot(state);

  const generatedStyle = (type) => {
    if (type === "filled") {
      return {
        background: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyle}`}
      style={generatedStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
