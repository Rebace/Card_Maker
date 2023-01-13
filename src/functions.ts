import * as types from "./types"

function generateId(): number {
    return Math.floor(Math.random() * Number.MAX_VALUE);
}

// Canvas
export function createCanvas() : types.CanvasType {
    return {
        size: {
            width: 800,
            height: 600
        },
        //filter: types.ColorType.None,
        backgroundColor: "#fff",
        listObjects: []
    }
}

function changeFilterOnCanvas(canvas: types.CanvasType, filter: types.ColorType) : types.CanvasType {
    return {
        ...canvas,
        //filter: filter
    }
}

function changeBackgroundColorOnCanva(canvas: types.CanvasType, backgroundColor: string) : types.CanvasType {
    return {
        ...canvas,
        backgroundColor: backgroundColor
    }
}

function changeSizeOnCanva(canvas: types.CanvasType, size: types.SizeType) : types.CanvasType {
    return {
        ...canvas,
        size: size
    }
}

function deleteObjectForCanvas(canvas: types.CanvasType, id: number) : types.CanvasType {
    return {
        ...canvas,
        listObjects: [...canvas.listObjects.filter((item) => item.id != id)]
    }
}

// Text
export function newText(canvas: types.CanvasType): types.CanvasType {
    return {
      ...canvas,
      listObjects: [
        ...canvas.listObjects,
        {
          id: generateId(),
          isSelected: false,
          type: "text",
          text: "Новый текст",
          fontSize: 20,
          color: "#000",
          position: { x: 30, y: 30 },
          size: { width: 400, height: 80 }
        }
      ]
    };
}

export function changeFontSizeText(canvas: types.CanvasType, id: number, fontSize: number): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "text") {
            return {
                ...object,
                fontSize: fontSize
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeColorText(canvas: types.CanvasType, id: number, color: string): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "text") {
            return {
                ...object,
                color: color
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeBackgroundColorText(canvas: types.CanvasType, id: number, backgroundColor: string): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "text") {
            return {
                ...object,
                backgroundColor: backgroundColor
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeSizeText(canvas: types.CanvasType, id: number, size: types.SizeType): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "text") {
            return {
                ...object,
                size: size
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeContentText(canvas: types.CanvasType, id: number, text: string): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "text") {
            return {
                ...object,
                text: text
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

// ArtObject
export function newArtObject(canvas: types.CanvasType, type_: types.TypeArtObject): types.CanvasType {
    return {
      ...canvas,
      listObjects: [
        ...canvas.listObjects,
        {
          id: generateId(),
          type: "artObject",
          typeArtObject: type_,
          isSelected: false,
          size: { width: 100, height: 100 },
          position: { x: 100, y: 100 },
          fill: "red",
          borderColor: "black"
        }
      ]
    }
}

type ChangeObjectCoord = {
    id: number;
    pos: types.PositionType;
}

export function changePositionObject(canvas: types.CanvasType, props: ChangeObjectCoord): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === props.id) {
            return {
                ...object,
                position: props.pos
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeSizeArtObject(canvas: types.CanvasType, id: number, size: types.SizeType): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "artObject") {
            return {
                ...object,
                size: size
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeFillArtObject(canvas: types.CanvasType, id: number, fill: string): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "artObject") {
            return {
                ...object,
                fill: fill
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function changeBorderColorArtObject(canvas: types.CanvasType, id: number, borderColor: string): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "artObject") {
            return {
                ...object,
                borderColor: borderColor
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

// Image
export function newImage(canvas: types.CanvasType, url: string): types.CanvasType {
  return {
    ...canvas,
    listObjects: [
      ...canvas.listObjects,
      {
        id: generateId(),
        isSelected: false,
        url: url,
        type: "img",
        position: { x: 0, y: 0 },
        size: { width: 100, height: 100 }
      }
    ]
  }
}

export function changeSizeImage(canvas: types.CanvasType, id: number, size: types.SizeType): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id && object.type === "img") {
            return {
                ...object,
                size: size
            }
        }
        return object
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

// 
export function selectOnClick(canvas: types.CanvasType, id: number): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        if (object.id === id) {
            return {
                ...object,
                isSelected: !object.isSelected
            }
        }
        return {
            ...object,
            isSelected: false
        }
    })
    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function selectOnCanvas(canvas: types.CanvasType): types.CanvasType {
    const newListObjects = canvas.listObjects.map((object) => {
        return {
            ...object,
            isSelected: false
        }
    })

    return {
        ...canvas,
        listObjects: newListObjects
    }
}

export function addHistoryUndo(cardMaker: types.CardMaker): types.CardMaker {
    let history = cardMaker.historyCommand;
    history.undo = [...history.undo, cardMaker.canvas];
    history.redo = [];
    return {
        ...cardMaker,
        historyCommand: history
    }
}

export function addHistoryRedo(cardMaker: types.CardMaker): types.CardMaker {
    let history = cardMaker.historyCommand;
    history.redo = [...history.redo, cardMaker.canvas];
    return {
        ...cardMaker,
        historyCommand: history
    }
}
