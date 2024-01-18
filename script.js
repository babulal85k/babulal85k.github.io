document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger_menu");
    const navBtn2 = document.querySelector(".nav_btn2");

    hamburgerMenu.addEventListener("click", toggleMenu);

    const navLinks = document.querySelectorAll(".nav_btn2 li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            navigateToSection(link);
            closeMenu();
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".hamburger_menu") && !event.target.closest(".nav_btn2")) {
            closeMenu();
        }
    });

    function toggleMenu() {
        hamburgerMenu.classList.toggle("active");
        navBtn2.classList.toggle("nav_btn2Go");
        document.body.style.overflow = navBtn2.classList.contains("nav_btn2Go") ? "hidden" : "auto";
    }

    function closeMenu() {
        hamburgerMenu.classList.remove("active");
        navBtn2.classList.remove("nav_btn2Go");
        document.body.style.overflow = "auto";
    }

    function navigateToSection(link) {
        const targetSectionId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
    }
});

var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var navContainer = document.getElementById("nav_bar");

    if (prevScrollPos < currentScrollPos) {
        navContainer.classList.add("blur", "border");
    } else {
        navContainer.classList.remove("blur", "border");
    }

    prevScrollPos = 0;
};

function downloadResume() {
    var fileUrl = './BabuLalMandal-cap01_001.pdf'; // Ensure this path is correct
    var downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'Babu_Lal_Mandal_Resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatWindow = document.getElementById('chat-window');

    sendButton.addEventListener('click', async function () {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('You', message);
            userInput.value = '';
            const response = await fetchChatResponse(message);
            appendMessage('ChatGPT', response.reply);
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    async function fetchChatResponse(message) {
        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            return { reply: 'Error communicating with the chat service.' };
        }
    }
    
});
