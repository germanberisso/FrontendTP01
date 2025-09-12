document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnHabilidades");
  const listaHabilidades = document.querySelector(".tarjeta ul");

  btn.addEventListener("click", () => {
    if (listaHabilidades.style.display === "none") {
      listaHabilidades.style.display = "block";
      btn.textContent = "Ocultar Habilidades";
    } else {
      listaHabilidades.style.display = "none";
      btn.textContent = "Mostrar Habilidades";
    }
  });
});