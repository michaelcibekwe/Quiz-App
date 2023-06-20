import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/Navbar";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                Home Container
            </div>
        </div>
    );
};

export default Home;