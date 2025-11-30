// src/pages/SunnySneezeIntro.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SunnySneeze.css';

const SunnySneezeIntro = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sunny-sneeze-intro.mp3');
      audioRef.current.volume = 0.8;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="sunny-page">
      <div className="sunny-top-card">
        <h2>🤧 Sunny&apos;s Big Sneeze!</h2>
        <p>One sunny morning, Sunny felt a big sneeze coming on…</p>
      </div>

      <button
        className="sunny-help-btn"
        onClick={() => navigate('/sunny-sneeze-alert')}
      >
        Help Sunny Sneeze!
      </button>
    </div>
  );
};

export default SunnySneezeIntro;
