import React from "react";

const ChisatoLight = (props) => {
  const audioVoice = React.useRef(new Audio());
  const [audioReady, setAudioReady] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [hover, setHover] = React.useState(true);
  let chisatoVoice = ["Ahoo", "Dama", "Neee", "Wooo"];

  const onHover = () => {
    setError(false);
    if (audioReady === true) {
      setHover(false);
      audioVoice.current.src = `./assets/audios/${
        chisatoVoice[Math.floor(Math.random() * chisatoVoice.length)]
      }.mp3`;
      audioVoice.current.volume = 0.5;
      audioVoice.current.play().catch(() => {
        setTimeout(() => {
          setHover(true);
        }, 3000);
        setError(true);
      });
    }
    error
      ? setTimeout(() => {
          setAudioReady(true);
        }, 500)
      : setAudioReady(false);
  };

  const clickEvent = () => {
    props.setCharacter("takina");
    props.setColor("dark");
  };

  //Moves Picture if ready
  audioVoice.current.onended = () => {
    setHover(true);
    setTimeout(() => {
      setAudioReady(true);
    }, 500);
  };

  React.useEffect(() => {
    props.setColor("light");
  }, []);

  return (
    <div>
      {hover ? (
        <img
          className="absolute h-screen w-screen"
          src={`./assets/images/chisato.png`}
          alt="chisato"
        />
      ) : null}
      {hover ? (
        <div className="hoverMain absolute" onMouseEnter={onHover}></div>
      ) : (
        <img
          className="absolute h-screen w-screen"
          src={`./assets/images/chisatoHover.png`}
          alt=""
        />
      )}
    </div>
  );
};

export default ChisatoLight;
