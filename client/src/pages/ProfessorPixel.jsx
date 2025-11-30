import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfessorPixel.css';

const ProfessorPixel = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/professor-intro.mp3'); // put this file in public/
      audioRef.current.volume = 0.8;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // autoplay may be blocked until user clicks somewhere
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="pixel-page">
      <div className="pixel-card">
        <header className="pixel-header">
          <h1>🧑‍🏫 Professor Pixel&apos;s Flickering Lessons</h1>
          <p>
            At the university, Professor Pixel was teaching through hologram screens when
            the internet got scrambled…
          </p>
        </header>

        <section className="pixel-problem">
          <p>
            &quot;Today we&apos;re going to learn about… zzzzt… the solar… bzzt… flare effects
            on…&quot;
            <br />
            His hologram kept flickering and cutting out!
          </p>
          <p>
            <span className="label">Problem:</span> Solar storms disrupt satellite communications
            and internet infrastructure causing data packet loss!
          </p>
        </section>

        <button
          className="pixel-cta"
          onClick={() => navigate('/professor-solution')}
        >
          Help Professor Pixel fix this!
        </button>
      </div>
    </div>
  );
};

export default ProfessorPixel;
