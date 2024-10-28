import { useNavigate } from 'react-router-dom';
import './App.css';
import backgroundVideo from './background.mp4'; // Make sure the video file is placed in the src folder

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="App-header">
        <h1>Welcome to ReactApp</h1>
        <button className='users-button' onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
