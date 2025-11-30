// src/pages/SunnySneezeAlert.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SunnySneeze.css';

const SunnySneezeAlert = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sunny-sneeze-alert.mp3');
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

      <button className="sunny-help-btn">
        Help Sunny Sneeze!
      </button>

      <div className="sunny-alert-card">
        <h3>⚡ SOLAR FLARE ALERT! ⚡</h3>
        <p>
          &quot;Ah… ah… ah… ACHOO!&quot; WHOOSH! A massive solar flare shot
          out from the Sun, racing toward Earth!
        </p>
      </div>

      <button
        className="sunny-earth-btn"
        onClick={() => navigate('/topsy-turvy')}
      >
        See What&apos;s happen on earth
      </button>
    </div>
  );
};

export default SunnySneezeAlert;
