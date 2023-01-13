import * as types from "./types"

const text1: types.TextType = {
    id: 1,
    size: { width: 100, height: 50 },
    isSelected: false,
    position: {x: 300, y: 300},

    type: "text",
    text: "Text",
    fontSize: 14,
    color: "green"
}

const text2: types.TextType = {
    id: 2,
    size: { width: 300, height: 150 },
    isSelected: false,
    position: {x: 300, y: 400},

    type: "text",
    text: " Text x2",
    fontSize: 20,
    color: "#61dafb"
}

const artObj1: types.ArtObjectType = {
    id: 3,
    size: { width: 300, height: 150 },
    isSelected: false,
    position: { x: 450, y: 400},

    type: "artObject",
    fill: "black",
    borderColor: "green",
    typeArtObject: types.TypeArtObject.Rectangle
}

const artObj2: types.ArtObjectType = {
    id: 4,
    size: { width: 300, height: 150 },
    isSelected: false,
    position: { x: 100, y: 100 },

    type: "artObject",
    fill: "#abcd3f",
    borderColor: "#abcd3f",
    typeArtObject: types.TypeArtObject.Ellipse
}

const artObj3: types.ArtObjectType = {
    id: 5,
    size: { width: 150, height: 150 },
    isSelected: false,
    position: { x: 200, y: 100 },

    type: "artObject",
    fill: "yellow",
    borderColor: "black",
    typeArtObject: types.TypeArtObject.Triangle
}

const image1: types.ImageType = {
    id: 6,
    size: { width: 80, height: 80},
    isSelected: false,
    position: { x: 700, y: 10 },

    type: "img",
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADySURBVDhPY/z//z8DuYAJSmMD377//fMHn9HYbZ4+58n2XW8/ff4DZCvIcaQmSFtbCkCkkAEWzQnpVx88+gHlwEBEiHhGsgyUAwPozq5puoupEwhWrHl5/eZXKAcG0DUfO/EBysIAU2Y+hrJgAEXzuQuf/+EOIEwXoWgGBi+UhQ38/YtuMIpmfV1eKAsbEBZihbJgAEUzLw+zvCwHlIMB/LxFoSwYQA+whiolFhZGKAcJaKpzhweJQzkwgK5ZUYFzSq+6tBQ7lA8GTnaC0ydoQDlIAGfavnHr6+MnP9nZGLU0eUSE0X0LATTLGAQBBZoZGACLD0ytCWmsTwAAAABJRU5ErkJggg=="
}

const canvas1: types.CanvasType = {
    size: { width: 800, height: 600},
    backgroundColor: "#FFF", //f5ffdc 
    // filter: "#FFF", //"#FFFF",
    listObjects: [text1, text2, artObj1, artObj2, artObj3, image1]
}

export default canvas1