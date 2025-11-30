import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FollowGrandpaSolution.css';

const FollowGrandpaSolution = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/grandpa-solution.mp3');
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
    <div className="solution-container">
      <div className="solution-content">
        <div className="solution-box">
          <h2>{`Switch to manual steering mode + Use compass navigation`}</h2>
          <p>{`Turn off GPS and use traditional navigation`}</p>
        </div>

        <div className="problem-solved-box">
          <p>
            <span className="checkmark">{`Problem Solved!`}</span>
            <span className="solution-icon">{`🎉`}</span>
          </p>
          <p>
            {`✔️Great choice! Grandfather switched off the GPS and grabbed his old compass. Using the sun's position and his years of farming experience, he steered the tractor manually along straight lines. Sometimes the old ways are the best ways! he smiled. The corn row was planted perfectly!`}
          </p>
          <p>
            <strong>{`Science Note:`}</strong> {`GPS relies on satellites that use precise atomic clocks. Solar flares disrupt radio signals from satellites, but ground-based navigation methods (compass, landmarks, manual steering) aren't affected by space weather!`}
          </p>
        </div>

        <div className="buttons-container">
          <button className="choice-btn btn-aurora" onClick={() => navigate('/aurora-show')}>
            {`✨ Activate Aurora's Light show(Ending)`}
          </button>
          <button className="choice-btn btn-next" onClick={() => navigate('/topsy-turvy')}>
            {`➜ Next Family Member(Topsy-Turvy)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowGrandpaSolution;
