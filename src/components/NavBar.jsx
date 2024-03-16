import React, { useState, useEffect } from "react";
import "./style.css";

function NavBar() {
    const [activeButton, setActiveButton] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('div');
            let prevSection = null;

            sections.forEach(section => {
                const { top, bottom } = section.getBoundingClientRect();
                if (top <= 0 && bottom > 0) {
                    setActiveButton(section.id);
                    prevSection = section;
                }
            });

            if (prevSection) {
                setActiveButton(prevSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    function downloadResume() {
        // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
        var fileUrl = '../assets/resume.pdf';

        // Create a link element
        var downloadLink = document.createElement('a');

        // Set the href attribute to the file path
        downloadLink.href = fileUrl;

        // Set the download attribute with the desired filename
        downloadLink.download = 'Babu_Lal_Mandal_Resume.pdf';

        // Append the link to the body
        document.body.appendChild(downloadLink);

        // Trigger a click on the link to start the download
        downloadLink.click();

        // Remove the link from the body
        document.body.removeChild(downloadLink);
    }

    return (
        <div className="nav-container">
            <div className="nav-bar">
                <div className="homeBtncontainer">
                    <button className={activeButton === "home" ? "active homeBtn" : "homeBtn"} onClick={() => scrollToSection("home")}>
                        Home
                    </button>
                </div>
                <div className="section">
                    <button className={activeButton === "about" ? "active aboutBtn" : "aboutBtn"} onClick={() => scrollToSection("about")}>
                        About
                    </button>
                    <button className={activeButton === "skills" ? "active skillsBtn" : "skillsBtn"} onClick={() => scrollToSection("skills")}>
                        Skills
                    </button>
                    <button className={activeButton === "projects" ? "active projectBtn" : "projectBtn"} onClick={() => scrollToSection("projects")}>
                        Projects
                    </button>
                </div>

                
                <div className="resumeSection">
                    <button className={activeButton === "contact" ? "active contactBtn" : "contactBtn"} onClick={() => scrollToSection("contact")}>
                        Contact
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveButton(id);
    }
};

export { NavBar, scrollToSection }