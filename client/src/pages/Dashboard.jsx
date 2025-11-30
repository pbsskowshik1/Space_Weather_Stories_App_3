// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="space-adventure">
        <h1>Let's go on a Space Adventure!!</h1>
        <p className="subtitle">An Interactive Story</p>

        <div className="button-group">
          <button 
            className="btn yes-btn"
            onClick={() => navigate('/story-intro')}
          >
            YES :)
          </button>
          <button 
            className="btn no-btn"
            onClick={() => navigate('/')}
          >
            NO :(
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
