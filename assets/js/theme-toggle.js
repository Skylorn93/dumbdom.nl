document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if user has a saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️"; // Light mode icon
    } else {
        themeToggle.textContent = "🌙"; // Dark mode icon
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️"; // Light mode icon
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙"; // Dark mode icon
        }
    });
});