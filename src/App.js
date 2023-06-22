import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Leaderboard from './pages/Leaderboard';
import SignUp from "./pages/SignUp";
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Navbar from './components/navbar/Navbar';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#2F4858',
        },
        secondary: {
          main: '#86BBD8',
          contrastText: 'rgba(253,253,253,0.87)',
        },
        background: {
          paper: '#EFF1ED',
        },
      },
    });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/signup' element={<SignUp /> } />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
