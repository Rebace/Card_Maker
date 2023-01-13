import { dispatch } from "../../../state/state";
import { ImageType, PositionType } from "../../../types"
import ImageStyle from "./Image.module.css"
import * as functions from "../../../functions"

type ImageProps = {
    imageObject: ImageType;
};

let previousX: number, previousY: number;
let currentX: number, currentY: number;
let selectMove: boolean;

export default function Image(props: ImageProps) {
    const style = {
        left: props.imageObject.position.x + "px",
        top: props.imageObject.position.y + "px",
        width: props.imageObject.size.width,
        height: props.imageObject.size.height,
        outline: props.imageObject.isSelected ? "3px solid #00f" : "",
        cursor: props.imageObject.isSelected ? "text" : "pointer",
        zIndex: props.imageObject.isSelected ? 2 : 1
    };

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        dispatch(functions.selectOnClick, props.imageObject.id);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
      if (!props.imageObject.isSelected || !selectMove) return;

      const deltaX = e.clientX - previousX;
      const deltatY = e.clientY - previousY;

      previousX = e.clientX;
      previousY = e.clientY;

      const id = props.imageObject.id;
      const pos: PositionType = { x: currentX + deltaX, y: currentY + deltatY };

      currentX = pos.x;
      currentY = pos.y;

      console.log(pos);
      dispatch(functions.changePositionObject, {id, pos})
  };
  
  const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
      previousX = e.clientX;
      previousY = e.clientY;
      currentX = props.imageObject.position.x;
      currentY = props.imageObject.position.y;

      selectMove = true;
  };
  
  const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
      selectMove = false;
  };

    return (
        // <div style = {style} className = {ImageStyle.text}>
        //     <div style={styleBackgroundImage}/>
        // </div>
        <div onClick={clickHandler} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <img style={style} className={ImageStyle.image}  src={props.imageObject.url}/>
        </div>
      );
}