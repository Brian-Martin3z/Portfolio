// Variables
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Desplegar el menu hamburguesa
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

/* Validar Formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (name === '' || email === '' || message === '') {
    alert('Por favor, complete todos los campos');
  } else {
    alert(`Gracias por su mensaje, ${name}!`);
    form.reset();
  }
}); */

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("photoshop");
      habilidades[3].classList.add("wordpress");
/*      habilidades[4].classList.add("drupal");
      habilidades[5].classList.add("comunicacion");
      habilidades[6].classList.add("trabajo");
      habilidades[7].classList.add("creatividad");
      habilidades[8].classList.add("dedicacion");
      habilidades[9].classList.add("proyect"); */
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
  efectoHabilidades();
} 

const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
