// Hide all screens and show only the selected one
function nextScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.classList.add("hidden"));

  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");
}

// Simulate app exit (only alerts on web)
function exitApp() {
  alert("App will now close. (Simulation in browser)");
  // In real apps, you might call window.close(), but it's blocked in most browsers
}

// Start by showing only the first screen
document.addEventListener("DOMContentLoaded", () => {
  nextScreen("exit-screen"); // or change to another screen if needed
});
