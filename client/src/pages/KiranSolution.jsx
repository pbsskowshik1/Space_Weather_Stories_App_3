import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/KiranSolution.css';

const KiranSolution = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/kiran-solution.mp3'); // put this in public/
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
    <div className="kiran-sol-page">
      <div className="kiran-sol-top">
        <h2>Move to the shielded storm shelter module</h2>
        <p>Extra aluminium + polyethylene walls block radiation…</p>
      </div>

      <div className="kiran-sol-panel">
        <p>🎉 Astronaut Protected!</p>
        <p>
          ✅ Excellent safety decision! Kiran quickly floated to the specially
          designed storm shelter module. This module has extra layers of
          aluminum and polyethylene that block harmful solar radiation.
          He monitored the radiation levels on his tablet and waited safely
          until the solar storm passed.
        </p>
        <p>
          <strong>Science Note:</strong> Astronauts face the greatest danger
          from solar storms because they are outside Earth&apos;s protective
          atmosphere and magnetic field. The ISS has shielded areas, and
          astronauts use materials like aluminum, water, and polyethylene
          to block harmful solar radiation.
        </p>
      </div>

      <div className="kiran-sol-buttons">
        <button
          className="kiran-sol-btn"
          onClick={() => navigate('/aurora-show')}
        >
          {`✨ Activate Aurora's Light show(Ending)`}
        </button>
        <button
          className="kiran-sol-btn"
          onClick={() => navigate('/family-dinner')}
        >
          {`➜ Continue to Family Dinner(Family Dinner)`}
        </button>
      </div>
    </div>
  );
};

export default KiranSolution;
