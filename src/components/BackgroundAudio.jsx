import React, { useRef, useState } from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import "../components/styles/BackgroundAudio.css";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className='background-audio'>
      <audio ref={audioRef} src="/audio/BambooFlute.mp3" loop muted={isMuted} />
      <button className='mute-button' data-testid="test-mute-button" role='button' type='button' onClick={toggleMute}>
        {isMuted ? <VolumeOffIcon aria-label='VolumeOffIcon'/> : <VolumeMuteIcon aria-label='VolumeMuteIcon'/>}
      </button>
    </div>
  );
};

export default BackgroundAudio;