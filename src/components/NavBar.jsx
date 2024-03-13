import React from "react";
import "./style.css";

export function NavBar() {
    return (
        <>
            <div className="nav-container">
                <div className="nav-bar">
                    <div className="section">
                        <button className="aboutBtn">About</button>
                        <button className="projectBtn">Projects</button>
                        <button className="skillsBtn">Skills</button>
                    </div>
                    
                    <div className="home-container">
                        <button className="homeBtn">Home</button>
                    </div>
                    <div className="resumeSection">
                        <button className="contactBtn">Contact</button>
                        <button className="resumeBtn">Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
};