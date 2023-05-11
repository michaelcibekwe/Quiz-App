import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <h1> Landing Page </h1>
            <br />
            <u1>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/leaderboard">Leaderboards</Link>
                </li>
            </u1>
        </div>
    );
};

export default Landing;