import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VirtualFamilyDinner.css';

const VirtualFamilyDinner = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/family-dinner.mp3'); // put this in public/
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
    <div className="dinner-page">
      <header className="dinner-header">
        <h1>🍽 Virtual Family Dinner</h1>
        <p>
          That evening, the whole family gathered for a special dinner.
          Professor Pixel set up his hologram screen, and Kiran appeared
          as a life‑sized hologram from space!
        </p>
      </header>

      <section className="dinner-dialog">
        <p>
          &quot;It&apos;s almost like you&apos;re right here with us!&quot;
          said Ravi.
        </p>
        <p>
          &quot;I can see all of you perfectly,&quot; Kiran smiled.
          &quot;And I brought space pizza!&quot;
        </p>
      </section>

      <button
        className="dinner-cta"
        onClick={() => navigate('/space-events')}
      >
        Hear Grand father&apos;s Historical Space Weather Stories
      </button>
    </div>
  );
};

export default VirtualFamilyDinner;
