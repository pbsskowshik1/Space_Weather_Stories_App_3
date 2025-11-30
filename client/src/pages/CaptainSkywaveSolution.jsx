import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CaptainSkywaveSolution.css';

const CaptainSkywaveSolution = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/captain-solution.mp3'); // put file in public/
      audioRef.current.volume = 0.8;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // autoplay may wait for user interaction; this is normal
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="skywave-solution-bg">
      <div className="skywave-solution-card">
        <div className="skywave-solution-top">
          {`Activate analog backup instrument + Use paper map`}
        </div>

        <div className="skywave-solution-panel">
          <p className="landing-title">🎉 Safe Landing!</p>
          <p>
            {`✅ Perfect decision! Captain Skywave switched to her analog backup
            instruments - altimeter, compass, and artificial horizon. Using her
            pre - flight map and calculating wind speed, she navigated safely to
            the airport.`}
          </p>
          <p>
            <strong>{`Science Note:`}</strong> {`Solar flares create disturbances in
            the ionosphere that block HF radio waves. Pilots have backup
            systems: VHF radios, analog instruments, and visual navigation to
            stay safe during solar storms!`}
          </p>
        </div>

        <div className="skywave-solution-buttons">
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

export default CaptainSkywaveSolution;
