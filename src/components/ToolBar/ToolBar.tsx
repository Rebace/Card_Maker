import { dispatch } from "../../state/state";
import { TypeArtObject, CanvasType } from "../../types";
import * as functions from "../../functions";
import { newArtObject, newImage, newText } from "../../functions";
import textIcon from "../../img/text.svg";
import ellipseIcon from "../../img/ellipse.svg";
import rectangleIcon from "../../img/rectangle.svg";
import triangleIcon from "../../img/triangle.svg";
import StyleBar from "./ToolBar.module.css"
import Button from "../Button/Button";
import imageIcon from "../../img/image.svg";
import { useRef } from "react";

type ToolBarProps = {
    canvas: CanvasType;
}

let selectedImage;

export default function ToolBar(props: ToolBarProps) {
    const imgInputRef = useRef<HTMLInputElement>(null)
    const openSelectImageModal = () => {
        console.log("123");
        if (imgInputRef.current) {
            imgInputRef.current.click()
        }
    }
    const addImageHandler = () => {
        console.log("456");
        if (imgInputRef.current && imgInputRef.current.files) {
            console.log("789");
            const url = window.URL.createObjectURL(imgInputRef.current.files[0])
            dispatch(newImage, url)
        }
    }

    return (
        <div className={StyleBar.toolbar}>
            <Button text="Текст" image={textIcon} action={() => dispatch(newText, true)} />
            <Button text="Картинка" image={imageIcon} action={openSelectImageModal} />
            <input ref={imgInputRef} type="file" className={StyleBar.file} onChange = {addImageHandler}/>
            <Button text="Эллипс" image={ellipseIcon} action={() => dispatch(newArtObject, TypeArtObject.Ellipse)} />
            <Button text="Прямоугольник" image={rectangleIcon} action={() => dispatch(newArtObject, TypeArtObject.Rectangle)} />
            <Button text="Треугольник" image={triangleIcon} action={() => dispatch(newArtObject, TypeArtObject.Triangle)} />
        </div>
      );
}