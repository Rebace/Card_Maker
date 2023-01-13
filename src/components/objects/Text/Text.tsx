import { PositionType, TextType } from "../../../types"
import TextStyle from "./Text.module.css"
import * as functions from "../../../functions"
import { dispatch } from "../../../state/state";

type TextProps = {
    textObject: TextType;
};

let previousX: number, previousY: number;
let currentX: number, currentY: number;
let selectMove: boolean;

export default function Text(props: TextProps) {
    const style = {
        left: props.textObject.position.x + "px",
        top: props.textObject.position.y + "px",
        width: props.textObject.size.width,
        height: props.textObject.size.height,
        color: props.textObject.color,
        outline: props.textObject.isSelected ? "3px solid #00f" : "",
        cursor: props.textObject.isSelected ? "text" : "pointer",
        fontSize: props.textObject.fontSize + "px",
        zIndex: props.textObject.isSelected ? 2 : 1
    };

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        dispatch(functions.selectOnClick, props.textObject.id);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
      if (!props.textObject.isSelected || !selectMove) return;

      const deltaX = e.clientX - previousX;
      const deltatY = e.clientY - previousY;

      previousX = e.clientX;
      previousY = e.clientY;

      const id = props.textObject.id;
      const pos: PositionType = { x: currentX + deltaX, y: currentY + deltatY };

      currentX = pos.x;
      currentY = pos.y;

      console.log(pos);
      dispatch(functions.changePositionObject, {id, pos})
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
      previousX = e.clientX;
      previousY = e.clientY;
      currentX = props.textObject.position.x;
      currentY = props.textObject.position.y;

      selectMove = true;
  };
  
  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
      selectMove = false;
  };

    return (
        <input
          style = {style}
          className = {TextStyle.text}
          type = "text"
          value = {props.textObject.text}
          onClick={clickHandler}
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
        />
      );
}