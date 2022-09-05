import React, {useState, useRef, useEffect} from 'react';

const VideoPlayer = ({src, isPlayingProp}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(isPlayingProp);
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <video ref={videoRef} controls width="280" height="175" allow="autoplay; fullscreen" muted={true}>
        <source src={src} />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </div>
  );
};

export default VideoPlayer;
