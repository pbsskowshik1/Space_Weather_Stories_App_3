import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CaptainSkywave.css';

const CaptainSkywave = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/captain-skywave-intro.mp3');
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
    <div className="skywave-container">
      <header className="skywave-header">
        <h1>✈️ Captain Skywave&apos;s Silent Radio</h1>
        <p>
          High in the sky, Captain Skywave was flying when suddenly her radio
          filled with static…
        </p>
      </header>

      <section className="skywave-problem">
        <p>
          &quot;Ground control, this is Captain Skywave, do you copy?&quot;
          <br />
          &quot;Shhhhhhhhhh,&quot; came the reply – just fuzzy white noise.
        </p>
        <p>
          <span className="label">Problem:</span>{' '}
          Solar flares create ionospheric disturbances that block radio waves!
          Communication is lost!…
        </p>
      </section>

      <button
        className="skywave-cta"
        onClick={() => navigate('/captain-solution')}
      >
        Help Captain Skywave to fix this
      </button>
    </div>
  );
};

export default CaptainSkywave;
