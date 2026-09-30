// Theme toggle
const toggle = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme");
if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");

toggle?.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  }
});

// Highlight active nav link
document.querySelectorAll("nav a").forEach(a => {
  if (a.href === location.href) a.style.color = "var(--accent)";
});