import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
