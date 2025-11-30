import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfessorPixelSolution.css';

const ProfessorPixelSolution = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/professor-solution.mp3'); // put file in public/
      audioRef.current.volume = 0.8;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // autoplay might wait for user interaction; this is fine
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="pixel-solution-bg">
      <div className="pixel-solution-card">
        <div className="pixel-solution-top">
          <h2>{`Switch to hardwired fiber‑optic connection`}</h2>
          <p>{`Underground cables aren’t affected by space weather…`}</p>
        </div>

        <div className="pixel-solution-panel">
          <p className="landing-title">{`🎉 Lesson Saved!`}</p>
          <p>
            {`✅ Brilliant solution! Professor Pixel connected his computer directly to the
            fiber-optic cable network. Since these cables are buried underground and don't
            rely on satellites, the connection was crystal clear! His hologram stabilized
            instantly.`}
          </p>
          <p>
            <strong>{`Science Note:`}</strong> {`Internet disruptions during solar storms mainly
            affect satellite communications and wireless signals. Wired connections (fiber
            optic cables, ethernet) are protected underground and work perfectly during
            space weather events!`}
          </p>
        </div>

        <div className="pixel-solution-buttons">
          <button
            className="solution-btn"
            onClick={() => navigate('/aurora-show')}
          >
            {`✨ Activate Aurora's Light show(Ending)`}
          </button>
          <button
            className="solution-btn"
            onClick={() => navigate('/topsy-turvy')}
          >
            {`➜ Next Family Member(Topsy-Turvy)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPixelSolution;
