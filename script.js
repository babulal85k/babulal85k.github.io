document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger_menu");
    const navBtn2 = document.querySelector(".nav_btn2");

    hamburgerMenu.addEventListener("click", toggleMenu);

    const navLinks = document.querySelectorAll(".nav_btn2 li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            navigateToSection(link);
            closeMenu();
        });
    });

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".hamburger_menu") && !event.target.closest(".nav_btn2")) {
            closeMenu();
        }
    });

    function toggleMenu() {
        hamburgerMenu.classList.toggle("active");
        navBtn2.classList.toggle("nav_btn2Go");

        // Toggle body scrolling
        document.body.style.overflow = navBtn2.classList.contains("nav_btn2Go") ? "hidden" : "auto";
    }

    function closeMenu() {
        hamburgerMenu.classList.remove("active");
        navBtn2.classList.remove("nav_btn2Go");
        document.body.style.overflow = "auto"; // Enable scrolling
    }

    function navigateToSection(link) {
        // Get the target section id from the href attribute
        const targetSectionId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            // Calculate the scroll position relative to the document
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;

            // Use smooth scrolling animation
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }
});

var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navContainer = document.getElementById("nav_bar");

    if (prevScrollPos != currentScrollPos) {
        navContainer.classList.add("blur", "border");
    } else {
        navContainer.classList.remove("blur", "border");
    }

    prevScrollPos = 0;
};

function downloadResume() {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var fileUrl = './BabuLalMandal-cap01_001.pdf';
    
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
  