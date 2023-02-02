const sections = document.querySelectorAll('.main-container section');
const navLi = document.querySelectorAll('.navbar-menu li');

window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })
  
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)) {
      li.classList.add('active');
    }
  })
})


const mode = document.querySelector('#mobile-mode');
const menuLink = document.querySelector('.navbar-menu');

mode.addEventListener('click', function() {
    mode.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-container");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}

showSlides(slideIndex);
