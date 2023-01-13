enum ColorType {
    None,
    Red,
    Green,
    Blue,
    Black,
    While
}   

enum TypeArtObject {
    Rectangle,
    Ellipse,
    Triangle
}

type SizeType = {
    width: number,
    height: number
}

type PositionType = {
    x: number,
    y: number,
    //z: number
}

type CommonAttribute = {
    id: number,
    size: SizeType,
    position: PositionType,
    isSelected: boolean
}

type TextType = CommonAttribute & {
    type: 'text',
    text: string,
    color: string,
    fontSize: number
}

type ImageType = CommonAttribute & {
    type: 'img',
    url: string
}

type ArtObjectType = CommonAttribute & {
    type: 'artObject',
    borderColor: string,
    fill: string,
    typeArtObject: TypeArtObject,
}

type ListObjectsType = TextType | ImageType | ArtObjectType

type CanvasType = {
    size: SizeType,
    //filter: ColorType,
    listObjects: (ListObjectsType)[],
    backgroundColor: string
}

type CollectionTemplates = {
    templates: CanvasType[]
}

type HistoryCommand = {
    undo: CanvasType[],
    redo: CanvasType[]
}

type CardMaker = {
    collectionTemplates: CollectionTemplates,
    canvas: CanvasType,
    historyCommand: HistoryCommand
}

export {
   type CardMaker,
   type HistoryCommand,
   type CollectionTemplates,
   type CanvasType,
   type ListObjectsType,
   type ArtObjectType,
   type ImageType,
   type TextType,
   type CommonAttribute,
   type PositionType,
   type SizeType,
   TypeArtObject,
   ColorType
}