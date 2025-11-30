import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TopsyTurvy.css';

const TopsyTurvy = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/topsy-turvy.mp3');
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
    <div className="topsy-site">
      <header className="topsy-site-header">
        <h1>🌀 The Topsy‑Turvy Effects!</h1>
        <p>Choose which family member to follow during the solar storm:</p>
      </header>

      <main className="topsy-site-buttons">
        <button
          className="topsy-btn topsy-btn--red"
          onClick={() => navigate('/follow-grandpa')}
        >
          🚜 FOLLOW GRAND FATHER AT THE FARM
        </button>

        <button
          className="topsy-btn topsy-btn--white"
          onClick={() => navigate('/follow-captain')}
        >
          ✈️ FOLLOW CAPTAIN SKYWAVE IN THE SKY
        </button>

        <button
          className="topsy-btn topsy-btn--yellow"
          onClick={() => navigate('/follow-professor')}
        >
          🎓 FOLLOW PROFESSOR PIXEL AT UNIVERSITY
        </button>

        <button
          className="topsy-btn topsy-btn--orange"
          onClick={() => navigate('/follow-kiran')}
        >
          🚀 FOLLOW KIRAN IN SPACE
        </button>
      </main>
    </div>
  );
};

export default TopsyTurvy;
