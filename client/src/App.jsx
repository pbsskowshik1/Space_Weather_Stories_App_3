import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import StoryIntro from './pages/StoryIntro';
import StoryNext from './pages/StoryNext';
import MagicalFriends from './pages/MagicalFriends';
import SunnySneezeIntro from './pages/SunnySneezeIntro';
import SunnySneezeAlert from './pages/SunnySneezeAlert';
import TopsyTurvy from './pages/TopsyTurvy';
import FollowGrandpa from './pages/FollowGrandpa';
import CaptainSkywave from './pages/CaptainSkywave';
import CaptainSkywaveSolution from './pages/CaptainSkywaveSolution';
import FollowGrandpaSolution from './pages/FollowGrandpaSolution';
import ProfessorPixel from './pages/ProfessorPixel';
import ProfessorPixelSolution from './pages/ProfessorPixelSolution';
import KiranAlert from './pages/KiranAlert';
import KiranSolution from './pages/KiranSolution';
import VirtualFamilyDinner from './pages/VirtualFamilyDinner';
import SpaceWeatherEvents from './pages/SpaceWeatherEvents';
import AuroraShow from './pages/AuroraShow';
import { Login, SignUP } from './components';

import { useNavigate } from 'react-router-dom';

const Adventure = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050826',
        color: '#fff',
        padding: '40px',
      }}
    >
      <h1>🚀 Adventure Begins!</h1>
      <p>Next part of the story goes here…</p>

      <button
        style={{
          marginTop: '24px',
          padding: '12px 28px',
          borderRadius: '999px',
          border: '2px solid #fff',
          background: 'transparent',
          color: '#fff',
          fontWeight: '600',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Go back to Home
      </button>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUP />} />

        {/* after login */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* story flow */}
        <Route path="/story-intro" element={<StoryIntro />} />
        <Route path="/story-next" element={<StoryNext />} />
        <Route path="/magical-friends" element={<MagicalFriends />} />
        <Route path="/sunny-sneeze" element={<SunnySneezeIntro />} />
        <Route path="/sunny-sneeze-alert" element={<SunnySneezeAlert />} />
        <Route path="/topsy-turvy" element={<TopsyTurvy />} />
        <Route path="/follow-grandpa" element={<FollowGrandpa />} />
        <Route path="/grandpa-solution" element={<FollowGrandpaSolution />} />
        <Route path="/follow-captain" element={<CaptainSkywave />} />
        <Route path="/captain-solution" element={<CaptainSkywaveSolution />} />
        <Route path="/follow-professor" element={<ProfessorPixel />} />
        <Route path="/professor-solution" element={<ProfessorPixelSolution />} />
        <Route path="/follow-kiran" element={<KiranAlert />} />
        <Route path="/kiran-solution" element={<KiranSolution />} />
        <Route path="/family-dinner" element={<VirtualFamilyDinner />} />
        <Route path="/space-events" element={<SpaceWeatherEvents />} />
        <Route path="/aurora-show" element={<AuroraShow />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </Router>
  );
};

export default App;
