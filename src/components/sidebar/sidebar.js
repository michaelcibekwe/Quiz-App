import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Quiz App</span>
            </div>
            <hr />
            <div className="center">
                <ul className="slist">
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Leaderboard</span>
                    </li>
                    <li>
                        <span>Edit Quiz</span>
                    </li>
                    <li>
                        <span>Take Quiz</span>
                    </li>
                    <li>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;