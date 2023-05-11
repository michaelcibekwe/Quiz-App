import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path="*" element={<Landing/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
