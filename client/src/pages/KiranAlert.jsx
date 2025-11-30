import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/KiranAlert.css';

const KiranAlert = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/kiran-alert.mp3'); // put this in public/
      audioRef.current.volume = 0.8;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // autoplay may wait for user interaction – normal for browsers
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="kiran-page">
      <div className="kiran-card">
        <header className="kiran-header">
          <h1>🚀 Kiran&apos;s Space Station Alert</h1>
          <p>Up in space, astronaut Kiran received an urgent alert..</p>
        </header>

        <section className="kiran-alert-box">
          <p>
            &quot;⚠️ RADIATION LEVELS RISING – DANGEROUS SOLAR PROTON EVENT ⚠️&quot;
          </p>
          <p>
            <span className="label">Problem:</span> Without Earth&apos;s atmosphere and full
            magnetic shield, astronauts face dangerous radiation exposure from solar
            particles!
          </p>
          <p>🛰️ RADIATION EXPOSURE: HIGH – ACT FAST!</p>
        </section>

        <button
          className="kiran-cta"
          onClick={() => navigate('/kiran-solution')}
        >
          HELP KIRAN PROTECT HIMSELF!
        </button>
      </div>
    </div>
  );
};

export default KiranAlert;
