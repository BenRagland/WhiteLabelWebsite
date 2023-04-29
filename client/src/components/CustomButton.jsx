import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = (props) => {
  const snap = useSnapshot(state);

  const generatedStyle = (type) => {
    if (type === "filled") {
      return {
        background: snap.color,
        color: getContrastingColor(snap.color),
      };
    }else{
      return{
        borderWidth: '1px',
        borderColor: snap.color,
        color:snap.color
      
      }
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
