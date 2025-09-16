// Función para mostrar mensaje de bienvenida en la página principal
document.addEventListener("DOMContentLoaded", () => {
  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (welcomeBtn && welcomeMessage) {
    welcomeBtn.addEventListener("click", () => {
      if (
        welcomeMessage.style.display === "none" ||
        welcomeMessage.style.display === ""
      ) {
        welcomeMessage.style.display = "block";
        welcomeMessage.style.animation = "fadeIn 0.5s ease-in-out";
        welcomeBtn.textContent = "¡Gracias por visitarnos!";
      } else {
        welcomeMessage.style.display = "none";
        welcomeBtn.textContent = "¡Conoce más sobre nosotros!";
      }
    });
  }
});

// Animación de fade in
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
