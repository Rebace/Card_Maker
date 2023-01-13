import * as types from "./types"
import AppStyle from './App.module.css';
import Canvas from "./components/canvas/Canvas";
import ToolBar from "./components/ToolBar/ToolBar";

interface AppProps {
  canvas: types.CanvasType,
}


function App(props: AppProps) {
  return (
    <div className="AppStyle App">
      <ToolBar canvas = {props.canvas}/>
      <div className={AppStyle.canvas}>
        <Canvas canvas = {props.canvas}/>
      </div>
    </div>
  );
}

export default App;
