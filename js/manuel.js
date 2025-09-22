// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Datos de las habilidades para los modales
    const habilidades = {
        sobreMi: {
            img: '../img/manuel/img-sobreMi.png', // Cambiar por la imagen que tengas
            titulo: 'Sobre mí',
            descripcion: '\n• Nací en Monte Grande, provincia de Buenos Aires.\n\n• Tengo 35 años.\n\n• Hincha de Independiente.'
        },
        actualidad: {
            img: '../img/manuel/img-actualidad.png', // Cambiar por la imagen que tengas
            titulo: 'A qué me dedico',
            descripcion: '\n• Soy profesor de Educación Física\n\n• Entrenador de voley en Cañuelas Fútbol Club.'
        },
        objetivos: {
            img: '../img/manuel/img-objetivos.png', // Cambiar por la imagen que tengas
            titulo: 'Música Favorita',
            descripcion: 'Mis artistas musicales favoritos son:\n\n• Sin Banderas\n\n• Serrat\n\n• Agapornis'
        },
        hobbies: {
            img: '../img/manuel/img-hobbies.png', // Cambiar por la imagen que tengas
            titulo: 'Peliculas Favoritas',
            descripcion: '\n• Shrek\n\n• Todas las del universo Marvel\n\n• Toy Story'
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

    // Evento clic en foto de perfil - muestra/oculta pokebolas y globo
    fotoPerfil.addEventListener('click', function() {
        if (!isActive) {
            // Mostrar globo de diálogo y pokebolas
            speechBubble.style.display = 'block';
            pokebolasContainer.style.display = 'block';
            isActive = true;
        } else {
            // Ocultar globo de diálogo y pokebolas
            speechBubble.style.display = 'none';
            pokebolasContainer.style.display = 'none';
            isActive = false;
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