import React from 'react';
import jsPDF from 'jspdf';
import { scrollToSection } from "./NavBar";

const Home = () => {


    function downloadResume() {
        // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
        var fileUrl = "https://drive.google.com/file/d/1yWmtDuNSKkK0jfMoV7kDkglV7VWtaW10/view?usp=sharing";
        
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
        <>
            <div id="home">
                <div className="home-container">
                    <div className="image-cover">
                        
                    </div>
                    <div className="welcome2">
                        <p>
                            <span className='hi'>Hello</span>
                            <br />
                            <span className="quotes">I AM</span>
                            <br />
                            <span className="name"> Babu Lal Mandal </span>
                            <br />
                            
                            <button className='DownBtn' onClick={ () => downloadResume() } >Download CV</button>
                            
                            <button className='ContactBtn' onClick={ () => scrollToSection("contact") }>Contact ME</button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;