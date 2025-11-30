import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MagicalFriends.css';

const MagicalFriends = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/magical-friends.mp3'); // optional sound in public/
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
    <div className="mf-page">

      <div className="mf-title-card">
        Ravi&apos;s Magical Friends
      </div>

      <div className="mf-list">
        <div className="mf-item mf-item--sunny">
          <div className="mf-name">☀️ Sunny</div>
          <div className="mf-desc">
            Controls the Sun and sometimes sneezes solar flares!
          </div>
        </div>

        <div className="mf-item mf-item--maggie">
          <div className="mf-name">🛡 Maggie</div>
          <div className="mf-desc">
            Protects Earth with her invisible magnetic shield.
          </div>
        </div>

        <div className="mf-item mf-item--aurora">
          <div className="mf-name">🌈 Aurora</div>
          <div className="mf-desc">
            Paints beautiful colorful lights across the night sky…
          </div>
        </div>
      </div>

      <button
        className="mf-start-btn"
        onClick={() => navigate('/sunny-sneeze')}
      >
        Start Adventure
      </button>
    </div>
  );
};

export default MagicalFriends;
