import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/StoryIntro.css';

const StoryIntro = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/story-intro.mp3'); // put file in public/
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
    <div className="story-page">
      <div className="story-layout">
        <img
          src="/canada-map.jpeg"
          alt="Map of Canada"
          className="story-map"
        />

        <div className="story-right">
          <div className="speech-bubble">
            <p>
              {`Hi! my name is Ravi. I live in a  small town called Yellowknife in Canada I came from a very special family where everyone had exciting jobs that connected them to the sky and space.`}
            </p>
          </div>

          <img
            src="/ravi-character.jpg"
            alt="Ravi"
            className="story-character"
          />
        </div>
      </div>

      <button
        className="story-next-btn"
        onClick={() => navigate('/story-next')}
      >
        Start the Solar Storm Adventure
      </button>
    </div>
  );
};

export default StoryIntro;
