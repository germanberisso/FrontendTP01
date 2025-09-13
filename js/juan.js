// Objeto que almacena los datos de las películas y discos para los modales
    const modalsData = {
      movie1: {
        img: './img/El-Padrino.png', // URL de la portada de El Padrino
        title: 'El Padrino (Francis Ford Coppola, 1972)', // Título de la película con director y año
        description: 'Un épico retrato de la mafia siciliana en Nueva York, centrado en la familia Corleone y su lucha por el poder.', // Descripción breve
        trailer: 'https://www.youtube.com/embed/iOyQx7MXaz0?si=LLiPF8A2Zonz9v_6?controls=1' // URL del tráiler de El Padrino con controles habilitados
      },
      movie2: {
        img: './img/Inception.png',
        title: 'El Origen (Christopher Nolan, 2010)', // Título de la película con director y año
        description: 'Un ladrón especializado en infiltrarse en sueños enfrenta el desafío definitivo: implantar una idea en la mente de una persona.',
        trailer: 'https://www.youtube.com/embed/OCEkhKvm-hU?controls=1' // URL del tráiler de El Origen con controles habilitados
      },
      movie3: {
        img: './img/Inland-Empire.jpeg',
        title: 'Inland Empire (David Lynch, 2006)', // Título de la película con director y año
        description: 'Una actriz se pierde en la realidad y la ficción mientras trabaja en una película maldita, en el estilo surrealista de Lynch.',
        trailer: 'https://www.youtube.com/embed/kS2v-icgBj4?controls=1' // URL del tráiler de Inland Empire con controles habilitados
      },
      album1: {
        img: 'https://via.placeholder.com/150x200?text=The+Bends',
        title: 'The Bends (Radiohead, 1995)',
        description: 'El segundo álbum de Radiohead, una obra maestra del rock alternativo con temas introspectivos y melodías icónicas.'
      },
      album2: {
        img: 'https://via.placeholder.com/150x200?text=Take+It+from+the+Man!',
        title: 'Take It from the Man! (The Brian Jonestown Massacre, 1996)',
        description: 'Un álbum psicodélico que captura la esencia del rock de los 60 con un toque moderno y experimental.'
      },
      album3: {
        img: 'https://via.placeholder.com/150x200?text=Play',
        title: 'Play (Moby, 1999)',
        description: 'Un álbum electrónico que mezcla samples de gospel y blues con beats modernos, un hito en la música electrónica.'
      }
    };

    // Selecciona el contenedor del modal por su ID
    const modal = document.getElementById('modal');
    // Selecciona la imagen del modal
    const modalImg = document.getElementById('modal-img');
    // Selecciona el título del modal
    const modalTitle = document.getElementById('modal-title');
    // Selecciona la descripción del modal
    const modalDescription = document.getElementById('modal-description');
    // Selecciona el contenedor del tráiler (subtítulo e iframe)
    const modalTrailer = document.getElementById('modal-trailer');
    // Selecciona el botón de cerrar del modal
    const closeBtn = document.querySelector('.close-btn');
    // Selecciona todas las imágenes de portadas
    const coverImages = document.querySelectorAll('.cover-img');

    // Añade un evento de clic a cada imagen de portada
    coverImages.forEach(img => {
      img.addEventListener('click', () => {
        const modalId = img.getAttribute('data-modal'); // Obtiene el identificador del modal
        const data = modalsData[modalId]; // Obtiene los datos correspondientes del objeto
        modalImg.src = data.img; // Actualiza la imagen del modal
        modalTitle.textContent = data.title; // Actualiza el título del modal
        modalDescription.textContent = data.description; // Actualiza la descripción del modal
        // Maneja el tráiler solo para elementos con la propiedad trailer
        modalTrailer.innerHTML = ''; // Limpia el contenedor del tráiler
        if (data.trailer) {
          modalTrailer.innerHTML = `
            <h4>Tráiler:</h4>
            <div class="video-container">
              <iframe src="${data.trailer}" title="YouTube video player" frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          `;
        }
        modal.style.display = 'flex'; // Muestra el modal
      });
    });

    // Añade un evento de clic al botón de cerrar para ocultar el modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalTrailer.innerHTML = ''; // Limpia el tráiler al cerrar para detener el video
    });

    // Añade un evento de clic al contenedor del modal para cerrarlo si se hace clic fuera del contenido
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modalTrailer.innerHTML = ''; // Limpia el tráiler al cerrar para detener el video
      }
    });