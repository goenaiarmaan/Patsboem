const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    item.classList.toggle("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function handleForm(event) {
  event.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = "Bedankt. Dit is nu een demoformulier. Koppel dit later aan een echte formulierdienst om inzendingen te ontvangen.";
}
