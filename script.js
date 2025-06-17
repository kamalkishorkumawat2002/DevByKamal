// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Kamal";
  const speed = 100;
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll-triggered reveal animations with delays
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const delay = el.getAttribute("data-delay") || 0;
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("active");
    } else {
      el.classList.remove("active");
      el.style.transitionDelay = "0ms";
    }
  });
});

// Signup form
document.getElementById("signup-form").addEventListener("submit", e => {
  e.preventDefault();
  const user = e.target.username.value;
  localStorage.setItem("devUser", user);
  alert(`🎉 Welcome, ${user}! Your DevByKamal account has been created.`);
  e.target.reset();
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.name.value;
  alert(`✅ Thanks, ${name}! I’ll be in touch soon.`);
  e.target.reset();
});
