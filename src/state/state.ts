import * as types from "../types"
import * as functions from "../functions"

let canvas: types.CanvasType = getCanvasFromStorage();
let changeCanvasHandler: Function = () => {}
let history: Array<types.CanvasType> = [getCanvasFromStorage()];
let historyIndex = 0;

function getState(): types.CanvasType {
    return canvas;
}

function setState(newCanvas: types.CanvasType) {
    canvas = newCanvas;
    changeCanvasHandler();
    //setCanvasToStorage();
}

function getCanvasFromStorage(): types.CanvasType {
    return functions.createCanvas();
}

function dispatch(modifyFn: Function, payload: Object) {
    setState(modifyFn(canvas, payload))
}

function addChangeCanvasHandler(handler: Function) {
    changeCanvasHandler = handler;
}

export {getState, setState, getCanvasFromStorage, addChangeCanvasHandler, dispatch}