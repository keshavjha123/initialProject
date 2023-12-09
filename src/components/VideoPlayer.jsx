import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const handlePlaybackRateChange = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  return (
    <div style={{margin:"10px"}}>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=ST6T-RvfXno&t=39s&ab_channel=Keshav_Jha"  // Replace with your video URL
        playing={playing}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        controls
      />
      <div>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={handleMute}>{muted ? 'Unmute' : 'Mute'}</button>
        <input
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={playbackRate}
          onChange={handlePlaybackRateChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
