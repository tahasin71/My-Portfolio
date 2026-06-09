document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 50) {
    navbar.style.top = "1rem";
  } else {
    navbar.style.top = "1.5rem";
  }
  backToTop.classList.toggle("show", window.scrollY > 400);
});

const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
let menuOpen = false;

mobileToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open", menuOpen);
  menuIcon.style.display = menuOpen ? "none" : "block";
  closeIcon.style.display = menuOpen ? "block" : "none";
});

mobileMenu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
});

document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        entry.target.querySelectorAll(".skill-fill").forEach((bar) => {
          bar.classList.add("animate");
        });
      }
    });
  },
  { threshold: 0.1 },
);

revealElements.forEach((el) => revealObserver.observe(el));

const form = document.getElementById("contactFormEl");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (!name) {
    document.getElementById("nameError").textContent = "Please enter your name";
    valid = false;
  }
  if (!email) {
    document.getElementById("emailError").textContent =
      "Please enter your email";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    valid = false;
  }
  if (!message) {
    document.getElementById("messageError").textContent =
      "Please enter your message";
    valid = false;
  }

  if (valid) {
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("successMessage").style.display = "block";
  }
});
