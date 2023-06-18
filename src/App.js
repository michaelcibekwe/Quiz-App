import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Leaderboard from './pages/Leaderboard';
import SignUp from "./pages/SignUp";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/signup' element={<SignUp /> } />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
