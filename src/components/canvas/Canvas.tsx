import * as types from "../../types";
import CanvasStyle from "./Canvas.module.css";
import Text from "../objects/Text/Text";
import ArtObject from "../objects/ArtObject/ArtObject";
import Image from "../objects/Image/Image";
import { dispatch } from "../../state/state";
import * as functions from "../../functions"

type CanvasProps = {
    canvas: types.CanvasType;
}

export default function Canvas(props: CanvasProps) {
    const style = {
        top: 50 + "px",
        width: props.canvas.size.width,
        height: props.canvas.size.height,
        background: props.canvas.backgroundColor
    }

    const listObjects = props.canvas.listObjects;

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        if (e.target !== e.currentTarget) return;
        dispatch(functions.selectOnClick, true);
    }

    return (
        <div style = {style} className = {CanvasStyle.Canvas} onClick={clickHandler}>
            {listObjects.map(item => {
                if (item.type === "text") 
                {
                    return <Text textObject = {item}/>
                } 
                else if (item.type === "artObject") 
                {
                    return <ArtObject artObject = {item}/>
                } 
                else if (item.type === "img") 
                {
                    return <Image imageObject = {item} key = {item.id}/>
                }
            })}
        </div>
    );
}