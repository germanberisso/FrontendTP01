document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnSaludo");
  const msg = document.getElementById("mensaje");

  btn.addEventListener("click", () => {
    msg.textContent = "¡Bienvenido a nuestro sitio web del grupo 3!";
  });
});
