import React, { useState, useEffect } from "react";
import "./style.css";

export function NavBar() {
    const [activeButton, setActiveButton] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section");
          sections.forEach((section) => {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= 0 && bottom > 0) {
              setActiveButton(section.id);
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveButton(id);
        }
    };

    return (
        <div className="nav-container">
            <div className="nav-bar">
                <div className="section">
                    <button className={activeButton === "about" ? "active aboutBtn" : "aboutBtn"} onClick={() => scrollToSection("about")}>
                        About
                    </button>
                    <button className={activeButton === "projects" ? "active projectBtn" : "projectBtn"} onClick={() => scrollToSection("projects")}>
                        Projects
                    </button>
                    <button className={activeButton === "skills" ? "active skillsBtn" : "skillsBtn"} onClick={() => scrollToSection("skills")}>
                        Skills
                    </button>
                </div>

                <div className="homeBtncontainer">
                    <button className={activeButton === "home" ? "active homeBtn" : "homeBtn"} onClick={() => scrollToSection("home")}>
                        Home
                    </button>
                </div>
                <div className="resumeSection">
                    <button className={ activeButton === "contact" ? "active contactBtn" : "contactBtn"} onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>
                    <button className="resumeBtn" onClick={() => scrollToSection("resume")}>
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};