import React from 'react';
import jsPDF from 'jspdf';
import { scrollToSection } from "./NavBar";

const Home = () => {


    const handleDownload = () => {
        // Create a new PDF document
        const doc = new jsPDF();
      
        // Add content to the PDF document
        doc.text('Hello, World!', 10, 10);
      
        // Save the PDF document as a blob
        const blob = doc.output('blob');
      
        // Create a temporary URL to the blob
        const url = window.URL.createObjectURL(blob);
      
        // Create a hidden <a> element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = 'document.pdf'; // Set the filename for the downloaded PDF
      
        // Append the <a> element to the document body and click it programmatically
        document.body.appendChild(link);
        link.click();
      
        // Clean up by revoking the temporary URL
        window.URL.revokeObjectURL(url);
      };
      

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
                            <a href="../assets/resume.pdf" download="resume.pdf">
                                <button className='DownBtn' >Download CV</button>
                            </a>
                            <button className='ContactBtn' onClick={() => scrollToSection("contact")}>Contact ME</button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;