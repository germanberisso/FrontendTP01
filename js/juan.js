document.addEventListener('DOMContentLoaded', () => {
  // Escucha el evento 'DOMContentLoaded' para ejecutar el código cuando el DOM esté completamente cargado

  const modal = document.getElementById('modal');
  // Obtiene el elemento del modal por su ID para controlarlo

  const modalImg = document.querySelector('.modal-img');
  // Selecciona la imagen dentro del modal por su clase para actualizarla dinámicamente

  const modalTitle = document.querySelector('.modal-content h3');
  // Selecciona el título dentro del contenido del modal por su selector para actualizarlo

  const modalDescription = document.querySelector('.modal-content p');
  // Selecciona la descripción dentro del contenido del modal por su selector para actualizarla

  const modalMedia = document.getElementById('modal-media');
  // Obtiene el contenedor de medios (iframe) por su ID para insertar contenido multimedia

  const closeBtn = document.querySelector('.close-btn');
  // Selecciona el botón de cerrar del modal por su clase para manejarlo

  // Función para abrir el modal
  function openModal(imgSrc, title, description, mediaUrl, isAlbum) {
    // Define una función que recibe la fuente de la imagen, título, descripción, URL de medios y un booleano para indicar si es un álbum
    modalImg.src = imgSrc;
    // Asigna la fuente de la imagen al elemento modalImg
    modalImg.alt = `Portada de ${title}`;
    // Establece el atributo alt de la imagen con un texto descriptivo
    modalTitle.textContent = title;
    // Actualiza el texto del título con el valor proporcionado
    modalDescription.textContent = description;
    // Actualiza el texto de la descripción con el valor proporcionado
    
    if (mediaUrl) {
      // Verifica si hay una URL de medios disponible
      const mediaType = isAlbum ? 'Lista de reproducción:' : 'Tráiler:';
      // Determina el tipo de medio (álbum o trailer) basado en el parámetro isAlbum
      const iframeSrc = isAlbum ? mediaUrl : mediaUrl;
      // Asigna la URL de medios como fuente del iframe (misma URL para ambos casos en este contexto)
      const iframeHeight = isAlbum ? '352px' : '315px';
      // Define la altura del iframe según si es un álbum (352px) o un trailer (315px)
      modalMedia.innerHTML = `
        <h4>${mediaType}</h4>
        <div class="video-container" style="${isAlbum ? 'height: 352px;' : ''}">
          <iframe src="${iframeSrc}" width="100%" height="${iframeHeight}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
      `;
      // Inserta dinámicamente un encabezado y un iframe en el contenedor de medios con las propiedades especificadas
    } else {
      modalMedia.innerHTML = '';
      // Si no hay URL de medios, limpia el contenido del contenedor
    }
    
    modal.style.display = 'flex';
    // Muestra el modal estableciendo su estilo de visualización a 'flex'
  }

  // Añadir event listeners a las portadas de películas
  document.querySelectorAll('.movie').forEach(movie => {
    // Selecciona todos los elementos con clase 'movie' y recorre cada uno
    movie.addEventListener('click', () => {
      // Añade un evento de clic a cada elemento 'movie'
      const imgSrc = movie.querySelector('img').src;
      // Obtiene la fuente de la imagen dentro del elemento 'movie'
      const title = movie.dataset.title;
      // Obtiene el título desde el atributo data-title
      const description = movie.dataset.description;
      // Obtiene la descripción desde el atributo data-description
      const trailer = movie.dataset.trailer;
      // Obtiene la URL del trailer desde el atributo data-trailer
      openModal(imgSrc, title, description, trailer, false);
      // Llama a la función openModal con los datos obtenidos, indicando que no es un álbum
    });
  });

  // Añadir event listeners a las portadas de discos
  document.querySelectorAll('.album').forEach(album => {
    // Selecciona todos los elementos con clase 'album' y recorre cada uno
    album.addEventListener('click', () => {
      // Añade un evento de clic a cada elemento 'album'
      const imgSrc = album.querySelector('img').src;
      // Obtiene la fuente de la imagen dentro del elemento 'album'
      const title = album.dataset.title;
      // Obtiene el título desde el atributo data-title
      const description = album.dataset.description;
      // Obtiene la descripción desde el atributo data-description
      const playlist = album.dataset.playlist;
      // Obtiene la URL de la playlist desde el atributo data-playlist
      openModal(imgSrc, title, description, playlist, true);
      // Llama a la función openModal con los datos obtenidos, indicando que es un álbum
    });
  });

  // Cerrar modal al hacer clic en el botón de cerrar
  closeBtn.addEventListener('click', () => {
    // Añade un evento de clic al botón de cerrar
    modal.style.display = 'none';
    // Oculta el modal estableciendo su estilo de visualización a 'none'
    modalMedia.innerHTML = ''; // Detiene el audio/video al cerrar
    // Limpia el contenido del contenedor de medios para detener la reproducción
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener('click', (e) => {
    // Añade un evento de clic al modal
    if (e.target === modal) {
      // Verifica si el clic fue fuera del contenido del modal (en el fondo)
      modal.style.display = 'none';
      // Oculta el modal estableciendo su estilo de visualización a 'none'
      modalMedia.innerHTML = ''; // Detiene el audio/video al cerrar
      // Limpia el contenido del contenedor de medios para detener la reproducción
    }
  });
});