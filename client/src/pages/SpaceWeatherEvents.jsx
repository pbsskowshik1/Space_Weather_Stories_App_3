import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SpaceWeatherEvents.css';

const SpaceWeatherEvents = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/space-events.mp3'); // put in public/
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
    <div className="events-page">
      <header className="events-header">
        <h1>📚 Famous Space Weather Events</h1>
      </header>

      <section className="events-card">
        <h2>⚡ The Carrington Event (1859)</h2>
        <p>
          The most powerful geomagnetic storm in recorded history! Telegraph
          wires sparked and caught fire, and some telegraphs worked without
          power – the aurora provided electricity!
        </p>
      </section>

      <section className="events-card events-card--purple">
        <h2>📙 The Quebec Blackout (1989)</h2>
        <p>
          A solar storm caused 6 million people to lose power for 9 hours!
          An entire province went dark because of something that happened on
          the Sun, 93 million miles away.
        </p>
      </section>

      <button
        className="events-cta"
        onClick={() => navigate('/story-ending')}
      >
        Continue to the Story Ending
      </button>
    </div>
  );
};

export default SpaceWeatherEvents;
