import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FollowGrandpa.css';

const FollowGrandpa = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Play audio with muted attribute first, then unmute
    const audio = new Audio('/grandpa-farm.mp3');
    audio.volume = 0.8;
    audio.play().catch(() => {
      console.log('Autoplay blocked - user interaction required');
    });
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="follow-grandpa-container">
      <div className="follow-grandpa-content">
        <div className="grandpa-header">
          <h1>{`🚜 Grandfather's Zigzag Farm`}</h1>
          <p>
            {`At the farm, Grandfather Orbit climbed into his GPS-guided tractor to plant corn in perfectly straight rows. But when the solar flare hit...`}
          </p>
        </div>

        <div className="grandpa-problem">
          <p>
            <strong>{`What in the world?`}</strong> {`chuckled Grandfather as his tractor started driving in loops and spirals! The GPS signals are completely scrambled!`}
          </p>
          <p>
            <strong>{`Problem:`}</strong> {`GPS satellites rely on precise timing signals. Solar flares disrupt these signals, causing navigation errors!`}
          </p>
        </div>

        <button 
          className="cta-btn" 
          onClick={() => handleNavigate('/grandpa-solution')}
        >
          {`Try to fix GPS System`}
        </button>
      </div>
    </div>
  );
};

export default FollowGrandpa;
