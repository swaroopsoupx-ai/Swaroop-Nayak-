// 1. Cyberpunk Typing Effect
const textToType = "Freelance Developer | Clean Code & Automation";
const typingSpeed = 50; // Speed in milliseconds
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        document.getElementById("typing-text").innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Add a blinking cursor at the end once finished
        document.getElementById("typing-text").innerHTML += '<span style="animation: blink 1s infinite;">_</span>';
    }
}

// Add CSS for the blinking cursor dynamically via JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Start typing effect when the window loads
window.onload = typeWriter;

// 2. Smooth Scrolling logic for the DM button
document.getElementById("scroll-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default instant jump
    const target = document.getElementById("contact");
    target.scrollIntoView({ behavior: "smooth" }); // Glide smoothly to contact section
});
