import { dispatch } from "../../../state/state";
import { ArtObjectType, TypeArtObject, PositionType } from "../../../types";
import  ArtObjectStyle  from "./ArtObject.module.css";
import * as functions from "../../../functions"

type TypeArtObjectProps = {
    artObject: ArtObjectType;
}

let previousX: number, previousY: number;
let currentX: number, currentY: number;
let selectMove: boolean;

export default function ArtObject(props: TypeArtObjectProps) {
    const style = {
        left: props.artObject.position.x + "px",
        top: props.artObject.position.y + "px",
        width: props.artObject.size.width,
        height: props.artObject.size.height,
        fill: props.artObject.fill,
        outline: props.artObject.isSelected ? "3px solid #00f" : "",
        cursor: props.artObject.isSelected ? "text" : "pointer",
        zIndex: props.artObject.isSelected ? 2 : 1
    };

    const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        dispatch(functions.selectOnClick, props.artObject.id);
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
        if (!props.artObject.isSelected || !selectMove) return;

        const deltaX = e.clientX - previousX;
        const deltatY = e.clientY - previousY;

        previousX = e.clientX;
        previousY = e.clientY;

        const id = props.artObject.id;
        const pos: PositionType = { x: currentX + deltaX, y: currentY + deltatY };

        currentX = pos.x;
        currentY = pos.y;

        console.log(pos);
        dispatch(functions.changePositionObject, {id, pos})
    };
    
    const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
        previousX = e.clientX;
        previousY = e.clientY;
        currentX = props.artObject.position.x;
        currentY = props.artObject.position.y;

        selectMove = true;
    };
    
    const handleMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
        selectMove = false;
    };

    if (props.artObject.typeArtObject === TypeArtObject.Triangle) {
        const coordinatesPeaks =
            props.artObject.size.width / 2 + ", 0, " +
            props.artObject.size.width + ", " + props.artObject.size.height +
            ", 0, " + props.artObject.size.height;
        return (
            <div style={style} className={ArtObjectStyle.artObject} onClick={clickHandler}
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <svg>
                    <polygon points={coordinatesPeaks} />
                </svg>
            </div>
        );
      }
    
    if (props.artObject.typeArtObject === TypeArtObject.Ellipse) {
        return (
            <div style={style} className={ArtObjectStyle.artObject} onClick={clickHandler}
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <svg>
                    <ellipse
                        cx={props.artObject.size.width / 2}
                        cy={props.artObject.size.height / 2}
                        rx={props.artObject.size.width / 2}
                        ry={props.artObject.size.height / 2}
                    />
                </svg>
            </div>
        );
    }

    if (props.artObject.typeArtObject === TypeArtObject.Rectangle) {
        return (
            <div style={style} className={ArtObjectStyle.artObject} onClick={clickHandler}
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <svg style={style}>
                    <rect
                        width={props.artObject.size.width}
                        height={props.artObject.size.height}
                    />
                </svg>
            </div>
        );
    }

    return null;
}