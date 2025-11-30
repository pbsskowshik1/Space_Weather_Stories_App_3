import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StoryNext.css';

const StoryNext = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/story-next.mp3'); // optional sound in public/
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
    <div className="story-next-page">

      <div className="family-card">
        <h2>Meet Ravi&apos;s Amazing Family! 👨‍👩‍👧‍👦</h2>
        <p>
          In a small town called Yellowknife in Canada lives a curious boy named Ravi.
          His family has the most exciting jobs connected to space and sky!
        </p>
      </div>

      <div className="family-list">
        <div className="family-item family-item--green">
          <div className="family-title">🚀 Kiran (Big Brother)</div>
          <div className="family-subtitle">
            Astronaut on the International Space Station
          </div>
        </div>

        <div className="family-item family-item--blue">
          <div className="family-title">✈️ Captain Skywave (Mom)</div>
          <div className="family-subtitle">Flies planes high in the clouds</div>
        </div>

        <div className="family-item family-item--black">
          <div className="family-title">🧑‍🏫 Professor Pixel (Dad)</div>
          <div className="family-subtitle">
            Teaches students worldwide using hologram screens
          </div>
        </div>

        <div className="family-item family-item--white">
          <div className="family-title">🚜 Farmer Orbit (Grandpa)</div>
          <div className="family-subtitle">
            Grows vegetables using GPS‑guided tractors
          </div>
        </div>
      </div>

      <button
        className="story-next-btn2"
        onClick={() => navigate('/magical-friends')}
      >
        Meet Ravi&apos;s Magical Friends
      </button>
    </div>
  );
};

export default StoryNext;
