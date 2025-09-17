
// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Datos de las habilidades para los modales
    const habilidades = {
        sobreMi: {
            img: '../img/manuel/img-sobreMi.png', // Cambiar por la imagen que tengas
            titulo: 'Sobre mí',
            descripcion: '\n• Nací en Monte Grande, provincia de Buenos Aires.\n• Tengo 35 años.\n• Hincha de Independiente.'
        },
        actualidad: {
            img: '../img/manuel/img-actualidad.png', // Cambiar por la imagen que tengas
            titulo: 'A qué me dedico',
            descripcion: '\n• Soy profesor de Educación Física\n• Entrenador de voley en Cañuelas Fútbol Club.'
        },
        objetivos: {
            img: '../img/manuel/img-objetivos.png', // Cambiar por la imagen que tengas
            titulo: 'Objetivos',
            descripcion: 'Mis principales objetivos son:\n\n• Terminar en tiempo y forma la tecnicatura\n\n• Cumplir los objetivos deportivos planteados con los equipos que dirijo\n\n• Adquirir la mayor cantidad de conocimientos y experiencias con la carrera'
        },
        hobbies: {
            img: '../img/manuel/img-hobbies.png', // Cambiar por la imagen que tengas
            titulo: 'Hobbies',
            descripcion: '\n• Soy amante de los deportes y los videojuegos.\n• También disfruto mucho de series y animes.'
        }
    };

    // Selección de elementos del DOM
    const fotoPerfil = document.getElementById('foto-perfil');
    const speechBubble = document.getElementById('speech-bubble');
    const pokebolasContainer = document.getElementById('pokebolas-container');
    const pokebolas = document.querySelectorAll('.pokebola');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementById('close-btn');

    // Variable para controlar si la interacción está activa
    let isActive = false;

    // Evento clic en foto de perfil - muestra pokebolas y globo
    fotoPerfil.addEventListener('click', function() {
        if (!isActive) {
            // Mostrar globo de diálogo y pokebolas
            speechBubble.style.display = 'block';
            pokebolasContainer.style.display = 'block';
            isActive = true;
        }
    });

    // Evento clic en el documento para cerrar pokebolas
    document.addEventListener('click', function(e) {
        if (isActive) {
            // Verificar si el clic NO fue en la foto de perfil o pokebolas
            const clickedOnProfile = fotoPerfil.contains(e.target);
            const clickedOnPokeball = Array.from(pokebolas).some(pokeball => pokeball.contains(e.target));
            
            if (!clickedOnProfile && !clickedOnPokeball) {
                // Ocultar globo de diálogo y pokebolas
                speechBubble.style.display = 'none';
                pokebolasContainer.style.display = 'none';
                isActive = false;
            }
        }
    });

    // Eventos clic en cada pokebola - abre modal con información
    pokebolas.forEach(function(pokebola) {
        pokebola.addEventListener('click', function() {
            const habilidad = pokebola.getAttribute('data-habilidad');
            const data = habilidades[habilidad];
            
            // Actualizar contenido del modal
            modalImg.src = data.img;
            modalTitle.textContent = data.titulo;
            modalDescription.textContent = data.descripcion;
            
            // Mostrar modal
            modal.style.display = 'flex';
        });
    });

    // Evento para cerrar modal con botón X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Evento para cerrar modal haciendo clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});