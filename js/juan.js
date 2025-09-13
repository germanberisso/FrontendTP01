const modalsData = {
  movie1: {
    img: 'https://via.placeholder.com/150x200?text=El+Padrino',
    title: 'El Padrino (Francis Ford Coppola)',
    description: 'Un épico retrato de la mafia siciliana en Nueva York, centrado en la familia Corleone y su lucha por el poder.'
  },
  movie2: {
    img: 'https://via.placeholder.com/150x200?text=El+Origen',
    title: 'El Origen (Christopher Nolan)',
    description: 'Un ladrón especializado en infiltrarse en sueños enfrenta el desafío definitivo: implantar una idea en la mente de una persona.'
  },
  movie3: {
    img: 'https://via.placeholder.com/150x200?text=Inland+Empire',
    title: 'Inland Empire (David Lynch)',
    description: 'Una actriz se pierde en la realidad y la ficción mientras trabaja en una película maldita, en el estilo surrealista de Lynch.'
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

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');
const coverImages = document.querySelectorAll('.cover-img');

coverImages.forEach(img => {
  img.addEventListener('click', () => {
    const modalId = img.getAttribute('data-modal');
    const data = modalsData[modalId];
    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});