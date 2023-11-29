const AudioPlayer = ({ audioSrc }) => {
  return (
    <div>
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </div>
  );
};

export default AudioPlayer;
