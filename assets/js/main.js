// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
  navMenu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => navMenu.classList.remove("open"))
  );
}

// Theme toggle (persist to localStorage)
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const applyTheme = (mode) => {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
  if (themeIcon) themeIcon.className = mode === "light" ? "ri-moon-line" : "ri-sun-line";
};
applyTheme(localStorage.getItem("theme") || "dark");
themeBtn?.addEventListener("click", () => {
  const mode = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(mode);
});

// ScrollReveal (guarded)
try {
  if (window.ScrollReveal) {
    ScrollReveal().reveal(".section h2", { distance: "20px", origin: "bottom", interval: 80 });
    ScrollReveal().reveal(".card", { distance: "20px", origin: "bottom", interval: 60 });
  }
} catch { /* no-op */ }

// EmailJS (optional; won’t error if you don’t set a key)
try {
  if (window.emailjs) {
    // TODO: replace with your public key: emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
  }
} catch { /* no-op */ }

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";
  // Dummy delay to show it works (replace with actual EmailJS send)
  await new Promise(r => setTimeout(r, 500));
  statusEl.textContent = "Thanks! Message queued (demo).";
  form.reset();
});
