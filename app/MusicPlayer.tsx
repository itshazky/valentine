"use client";
import { useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  return (
    <div>
      <button onClick={playMusic}>
        Play Music 💕
      </button>

      <audio ref={audioRef} src="/pretty.mp3" />
    </div>
  );
}