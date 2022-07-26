import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const src = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.oncanplaythrough = () => setIsLoading(false);
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  return (
    <div>
      <video ref={videoRef} width="280" height="185" allow="autoplay; fullscreen">
        <source src={src} />
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </div>
  );
};

export default VideoPlayer;
