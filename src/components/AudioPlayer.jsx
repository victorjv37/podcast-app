const AudioPlayer = ({ audioSrc }) => {
  return (
    <audio controls>
      <source src={audioSrc} type="audio/mpeg" />
      Tu navegador no soporta la etiqueta de audio.
    </audio>
  );
};

export default AudioPlayer;
