// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.
// Costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Aggiungere il ciclo infinito del carosello

const images = [ 
  { 
    image: 'img/01.webp', 
    title: 'Marvel\'s Spiderman Miles Morale', 
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
  }, 

  { 
    image: 'img/02.webp', 
    title: 'Ratchet & Clank: Rift Apart', 
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
  },

  { 
    image: 'img/03.webp', 
    title: 'Fortnite', 
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
  }, 

  { 
    image: 'img/04.webp', 
    title: 'Stray', 
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
  }, 

  { 
    image: 'img/05.webp', 
    title: "Marvel's Avengers", 
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
  } 
];

// Dichiarazione .item
const items = document.getElementsByClassName('item');

// Dichiarazione Arrow Down
const arrowDown = document.querySelector('.next');

// Dichiarazione Arrow Up
const arrowUp = document.querySelector('.previous');

let activeItem = 0;

arrowDown.addEventListener('click', function() {

  if (activeItem < items.length - 1) {

    items[activeItem].classList.remove('active');

    activeItem++;

    items[activeItem].classList.add('active');

  } else if (activeItem === items.length - 1) {

    items[activeItem].classList.remove('active');

    activeItem = 0;

    items[activeItem].classList.add('active');

  }

 

})

arrowUp.addEventListener('click', function() {
  
  if (activeItem > 0) {

    items[activeItem].classList.remove('active');
  
    activeItem--;
  
    items[activeItem].classList.add('active');

  } else if (activeItem === 0) {

    items[activeItem].classList.remove('active');

    activeItem = items.length - 1;

    items[activeItem].classList.add('active');

  }

 

})

const container = document.querySelector('.container');

for (let i = 0; i < images.length; i++) {

  let imageIndex = images[i];
  // console.log(imageIndex);

  let imagePath = imageIndex.image;
  // console.log(imagePath);

  let titleImage = imageIndex.title;
  // console.log(titleImage);

  let textImage = imageIndex.text;
  // console.log(textImage);

  // Il primo elemento ha classe .active
  let activeClass = '';
  if (i === 0) {
    activeClass = 'active';
  }

  container.innerHTML += 
  `<div class="item ${activeClass}">

    <img src="${imagePath}" alt="">

    <div class="description">
      <h2>${titleImage}</h2>
      <p>${textImage}</p>
    </div>
    
  </div>`

}

