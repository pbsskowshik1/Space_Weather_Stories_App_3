// src/pages/AuroraShow.jsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuroraShow.css';

const AuroraShow = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/aurora-show.mp3'); // put this in public/
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
    <div className="aurora-page">
      <header className="aurora-header">
        <h1>🌟 Is It?</h1>
      </header>

      <section className="aurora-main-text">
        <p>
          Ravi looked up at the sky, where Aurora was still painting faint green
          streaks across the stars.
        </p>
        <p>
          &quot;Space weather is pretty amazing,&quot; Ravi said.
          &quot;It connects the Sun, Earth, and all of us together in one big
          cosmic family!&quot;
        </p>
      </section>

      <p className="aurora-bottom-text">
        And from that day on, whenever Sunny felt a sneeze coming, she always
        warned her friends so they could be ready for another space weather
        adventure.
      </p>

      <button
        className="aurora-btn"
        onClick={() => navigate('/adventure')}
      >
        Go back to Adventure again
      </button>
    </div>
  );
};

export default AuroraShow;
