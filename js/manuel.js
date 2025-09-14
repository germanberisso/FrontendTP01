document.addEventListener('DOMContentLoaded', function() {
  // Mostrar el selector de habilidades al hacer clic en la imagen principal
 document.getElementById('btn-habilidades').onclick = function() {
  document.getElementById('seleccion-habilidades').style.display = 'block';
  // No ocultes la imagen, así permanece visible
};
document.getElementById('cerrar-habilidades').onclick = function() {
  document.getElementById('seleccion-habilidades').style.display = 'none';
};

  // Descripciones de habilidades
  const descripciones = {
    resolucionDeProblemas: {
      img: 'img/manuel/img-resolucionDeProblemas.png',
      texto: 'Resolución de problemas: Especialista en el analisis de problemas complejos, descomponerlos en partes manejables y diseñar soluciones eficientes.'
    },
    lenguajesDeProgramacion: {
      img: 'img/manuel/img-lenguajesDeProgramacion.png',
      texto: 'Dominio de lenguajes de programación: Conocimiento profundo de lenguajes como Python, Java y C++ para escribir código limpio y funcional.'
    },
    pensamientoLogico: {
      img: 'img/manuel/img-pensamientoLogico.png',
      texto: 'Pensamiento lógico y estructurado: Poseo la habilidad de diseñar algoritmos y estructurar código de manera clara, optimizando rendimiento y mantenibilidad.'
    },
    trabajoEquipo: {
      img: 'img/manuel/img-trabajoEquipo.png',
      texto: 'Trabajo en equipo y comunicación: Colaboro eficazmente con otros desarrolladores, diseñadores y stakeholders, explicando ideas técnicas de forma clara.'
    }
  };

  // Mostrar descripción e imagen al elegir una habilidad
  document.querySelectorAll('.poke-habilidad').forEach(function(img) {
    img.onclick = function() {
      const hab = this.getAttribute('data-hab');
      const desc = descripciones[hab];
      document.getElementById('desc-habilidad').innerHTML =
        `<img src="${desc.img}" alt="" style="width:60px;vertical-align:middle;margin-right:10px;">${desc.texto}`;
    };
  });
});