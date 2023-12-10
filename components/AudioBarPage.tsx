import AudioBar from "../components/AudioBar";

export default function Home() {
  return (
    <div className="container">
      <h1>Audio Bar Demo</h1>
      {/* Use the AudioBar component with an audio source */}
      <AudioBar src="https://example.com/audio.mp3" />
    </div>
  );
}
