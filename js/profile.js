// Funciones para las páginas individuales de cada miembro

// Función para mostrar/ocultar películas (Ana)
function toggleMovies() {
  const moviesSection = document.getElementById("movies");
  if (moviesSection) {
    if (moviesSection.style.display === "none") {
      moviesSection.style.display = "block";
      moviesSection.style.animation = "slideDown 0.3s ease-in-out";
    } else {
      moviesSection.style.display = "none";
    }
  }
}

// Función para cambiar colores (Carlos)
function changeColors() {
  const profileCard = document.querySelector(".profile__card");
  const colors = [
    "profile--blue",
    "profile--green",
    "profile--purple",
    "profile--orange",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Remover clases de color anteriores
  colors.forEach((color) => profileCard.classList.remove(color));

  // Agregar nueva clase de color
  profileCard.classList.add(randomColor);

  // Mostrar mensaje
  alert("¡Colores cambiados! 🎨");
}

// Función para animar habilidades (María)
function animateSkills() {
  const skillItems = document.querySelectorAll(".skills__item");

  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("skills__item--animated");

      // Remover la clase después de la animación
      setTimeout(() => {
        item.classList.remove("skills__item--animated");
      }, 600);
    }, index * 100);
  });
}

// Función para mostrar información extra (Diego)
function showAlert() {
  const extraInfo = `
    🚀 Información adicional sobre Diego:
    
    • Certificado en Project Management Professional (PMP)
    • 5+ años de experiencia liderando equipos
    • Especialista en metodologías ágiles
    • Apasionado por la innovación tecnológica
    `;

  alert(extraInfo);
}

// Animaciones CSS adicionales
const additionalStyles = document.createElement("style");
additionalStyles.textContent = `
    @keyframes slideDown {
        from { 
            opacity: 0; 
            transform: translateY(-20px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
`;
document.head.appendChild(additionalStyles);
