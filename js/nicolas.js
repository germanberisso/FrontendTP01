// Datos de las 14 estrellas de Estudiantes de La Plata (según la imagen)
const estrellas = [
  {
    id: 1,
    year: "1967",
    title: "Torneo Metropolitano",
    description: "Primer título de liga profesional en Argentina.",
  },
  {
    id: 2,
    year: "1968",
    title: "Copa Libertadores de América",
    description:
      "Primera Copa Libertadores, triunfo en la final ante Palmeiras.",
  },
  {
    id: 3,
    year: "1968",
    title: "Copa Intercontinental",
    description: "Campeón intercontinental al vencer al Manchester United.",
  },
  {
    id: 4,
    year: "1969",
    title: "Copa Interamericana",
    description: "Título internacional frente a Toluca de México.",
  },
  {
    id: 5,
    year: "1969",
    title: "Copa Libertadores de América",
    description:
      "Bicampeón de la Libertadores, venciendo a Nacional de Uruguay.",
  },
  {
    id: 6,
    year: "1970",
    title: "Copa Libertadores de América",
    description:
      "Tricampeón consecutivo de la Libertadores, venciendo a Peñarol.",
  },
  {
    id: 7,
    year: "1982",
    title: "Torneo Metropolitano",
    description: "Campeón del fútbol argentino tras una gran campaña.",
  },
  {
    id: 8,
    year: "1983",
    title: "Torneo Nacional",
    description: "Bicampeón consecutivo del fútbol argentino.",
  },
  {
    id: 9,
    year: "2006",
    title: "Torneo Apertura",
    description:
      "Título obtenido en una histórica definición ante Boca Juniors.",
  },
  {
    id: 10,
    year: "2009",
    title: "Copa Libertadores de América",
    description: "Campeón de América en Belo Horizonte, derrotando a Cruzeiro.",
  },
  {
    id: 11,
    year: "2010",
    title: "Torneo Apertura",
    description: "Quinto título oficial en la Primera División de Argentina.",
  },
  {
    id: 12,
    year: "2023",
    title: "Copa Argentina",
    description: "Campeón tras vencer a Defensa y Justicia en la final.",
  },
  {
    id: 13,
    year: "2024",
    title: "Copa de la Liga Profesional",
    description: "Consagración al vencer a Vélez Sarsfield en la final.",
  },
  {
    id: 14,
    year: "2024",
    title: "Trofeo de Campeones",
    description:
      "Título logrado frente a Vélez Sarsfield, cerrando el año como campeón absoluto.",
  },
];

// Función para abrir el modal
function openModal() {
  const modal = document.getElementById("estudiantesModal");
  const starsGrid = document.getElementById("starsGrid");

  // Generar las estrellas dinámicamente
  starsGrid.innerHTML = "";
  estrellas.forEach((estrella) => {
    const starElement = document.createElement("div");
    starElement.className = "stars__item";
    starElement.innerHTML = `
      <div class="stars__card" onclick="flipCard(this)">
        <div class="stars__front">
          <div class="stars__year">${estrella.year}</div>
          <div class="stars__title">${estrella.title}</div>
        </div>
        <div class="stars__back">
          <div class="stars__back-year">${estrella.year}</div>
          <div class="stars__back-title">${estrella.title}</div>
          <div class="stars__back-description">${estrella.description}</div>
        </div>
      </div>
    `;
    starsGrid.appendChild(starElement);
  });

  modal.classList.add("modal--active");
  document.body.style.overflow = "hidden";
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("estudiantesModal");

  const flippedCards = document.querySelectorAll(".stars__card--flipped");
  flippedCards.forEach((card) => {
    card.classList.remove("stars__card--flipped");
  });

  modal.classList.remove("modal--active");
  document.body.style.overflow = "auto";
}

function flipCard(card) {
  card.classList.toggle("stars__card--flipped");
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener("click", (event) => {
  const modal = document.getElementById("estudiantesModal");
  if (event.target === modal) {
    closeModal();
  }
});

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Función original para mantener compatibilidad (si existe en algún lugar)
function showAlert() {
  openModal();
}
