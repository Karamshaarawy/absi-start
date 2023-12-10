import React, { useState, useRef } from "react";

// This component takes an audio source as a prop
export default function AudioBar({ src }: any) {
  // Use state to track the playing status
  const [playing, setPlaying] = useState(false);
  // Use ref to access the audio element
  const audioRef = useRef(null);

  // Define a function to toggle the playing status
  const togglePlay = () => {
    // Get the audio element from the ref
    const audio: any = audioRef.current;
    // If the audio is playing, pause it
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      // If the audio is paused, play it
      audio.play();
      setPlaying(true);
    }
  };

  // Define a function to update the progress bar
  const updateProgress = () => {
    // Get the audio element from the ref
    const audio: any = audioRef.current;
    // Get the progress bar element by its id
    const progressBar: any = document.getElementById("progress-bar");
    // Calculate the percentage of the current time over the duration
    const percentage = (audio.currentTime / audio.duration) * 100;
    // Set the value of the progress bar to the percentage
    progressBar.value = percentage;
  };

  // Define a function to change the current time of the audio
  const changeTime = (e: any) => {
    // Get the audio element from the ref
    const audio: any = audioRef.current;
    // Get the progress bar element by its id
    const progressBar = document.getElementById("progress-bar");
    // Get the value of the progress bar from the event
    const value = e.target.value;
    // Calculate the new current time based on the value and the duration
    const newTime = (value / 100) * audio.duration;
    // Set the current time of the audio to the new time
    audio.currentTime = newTime;
  };

  // Return the JSX code for the audio bar component
  return (
    <div className="audio-bar">
      {/* Render the audio element with the src prop and some event listeners */}
      <audio
        src={src}
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onEnded={() => setPlaying(false)}
      ></audio>
      {/* Render a button to toggle the playing status */}
      <button onClick={togglePlay}>{playing ? "Pause" : "Play"}</button>
      {/* Render a progress bar to show and control the current time */}
      <input
        type="range"
        id="progress-bar"
        value="0"
        onChange={changeTime}
      ></input>
      {/* Add some CSS styles for the audio bar */}
      <style jsx>{`
        .audio-bar {
          display: flex;
          align-items: center;
        }
        button {
          margin-right: 10px;
        }
        input[type="range"] {
          width: 300px;
        }
      `}</style>
    </div>
  );
}
