document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("input");
  
    // Function to toggle dark/light mode
    function toggleTheme() {
      if (themeToggle.checked) {
        // Dark mode
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        // Light mode
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
    }
  
    // Set initial theme based on checkbox state
    toggleTheme();
  
    // Add event listener for changes
    themeToggle.addEventListener("change", toggleTheme);
  
    // Infinity button functionality
    const infinityBtn = document.querySelector(".infinity-btn");
    const mainLogo = document.querySelector(".container img");
  
    infinityBtn.addEventListener("click", function () {
      mainLogo.classList.toggle("rotate-180");
    });
  });