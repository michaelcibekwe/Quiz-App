import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">container</div>
        </div>
    );
};

export default Home;