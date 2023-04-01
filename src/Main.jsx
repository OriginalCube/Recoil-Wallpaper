import React from "react";
import Dark from "./Dark";
import Light from "./Light";
import Navigation from "./components/Navigation";

const Main = () => {
  const [mode, setMode] = React.useState();
  const [color, setColor] = React.useState("light");
  const [clock, setClock] = React.useState(true);
  const [canvas, setCanvas] = React.useState(true);
  const [audioVis, setAudioVis] = React.useState(false);
  const [audioPlay, setAudioPlayer] = React.useState(false);

  React.useEffect(() => {
    //Set localStorageGetItem sows
    localStorage.getItem("mode") !== null
      ? setMode(localStorage.getItem("mode"))
      : localStorage.setItem("mode", true);
    localStorage.getItem("color") !== null
      ? setColor(localStorage.getItem("color"))
      : localStorage.setItem("color", "light");
    localStorage.getItem("clock") !== null
      ? setClock(localStorage.getItem("clock"))
      : localStorage.setItem("clock", true);
    localStorage.getItem("canvas") !== null
      ? setCanvas(localStorage.getItem("canvas"))
      : localStorage.setItem("canvas", true);
    localStorage.getItem("audioVis") !== null
      ? setAudioVis(localStorage.getItem("audioVis"))
      : localStorage.setItem("audioVis", true);
  }, []);

  return (
    <div>
      {mode === "true" ? (
        <Light
          setColor={setColor}
          canvas={canvas}
          clock={clock}
          setMode={setMode}
          audioVis={audioVis}
          audioPlay={audioPlay}
        />
      ) : (
        <Dark
          clock={clock}
          canvas={canvas}
          audioVis={audioVis}
          audioPlay={audioPlay}
          setColor={setColor}
        />
      )}
      <Navigation
        mode={mode}
        setMode={setMode}
        color={color}
        setColor={setColor}
        clock={clock}
        setClock={setClock}
        canvas={canvas}
        setCanvas={setCanvas}
        audioPlay={audioPlay}
        setAudioPlayer={setAudioPlayer}
        audioVis={audioVis}
        setAudioVis={setAudioVis}
      />
    </div>
  );
};

export default Main;
