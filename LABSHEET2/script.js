// Back to Top Button Logic
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "⬆️ Top";
backToTopBtn.id = "backToTop";
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  background-color: #333;
  color: white;
  cursor: pointer;
  z-index: 1000;
`;

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Spy for Active Navigation Highlight
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
