import { useState, useRef, useEffect } from 'react';

const OptimizedVideo = ({ 
  src, 
  className = '', 
  poster,
  autoplay = false,
  muted = true,
  controls = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={videoRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoplay}
          muted={muted}
          controls={controls}
          onLoadedData={handleLoadedData}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          preload="metadata"
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedVideo;
