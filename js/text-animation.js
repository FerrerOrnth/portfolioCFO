// Texto presentación:

$(window).scroll(function(e){parallaxScroll();});
  function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.y1').css({'transform': 'translate3d(0,' + scrolled * 0.01 + 'px, 0)'});
    $('.y2').css({'transform': 'translate3d(0,' + scrolled * 0.05 + 'px, 0)'});
    $('.y3').css({'transform': 'translate3d(0,' + scrolled *  0.1 + 'px, 0)'});
    $('.y4').css({'transform': 'translate3d(0,' + scrolled *  0.2 + 'px, 0)'});
    $('.y5').css({'transform': 'translate3d(0,' + scrolled *  0.3 + 'px, 0)'});
    $('.y6').css({'transform': 'translate3d(0,' + scrolled *  0.4 + 'px, 0)'});
  };

// Funcion para colorear menú activo:

  $(function() {
    $("#nav-two > li").click(function() {
    //Busca todos los elementos del nav que tengan la clase activo y los elimina
  $(this).closest('#nav-two').find('li').removeClass('activo');
  //Al elemento seleccionado agrega la clase activo
          $(this).addClass('activo');
      });
});

// Iniciar con enlace Home seleccionado:

window.onload = function(){
  document.getElementById('marcado').click();
};

// Marcar en el menú la posición al scrollear:


var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting)
	{
           asignarClase(entries[0].target);
         }

}, { threshold: [0.1] });


observer.observe(document.querySelector("#inicio"));
observer.observe(document.querySelector("#portfolio"));
observer.observe(document.querySelector("#about"));
observer.observe(document.querySelector("#educacionIT"));
observer.observe(document.querySelector("#contacto"));



function asignarClase(target){
//obtener los elementos del menu
var elementosMenu = document.querySelectorAll("ul li a");

//actualizar clase current
elementosMenu.forEach(e => {
  //extraer el valor del  href del elemento del menu
  valorhref = e.href.split("#")[1]
  //si el valor del href es igual al id del target agregar
  //clase current
 if(valorhref === target.id){
    e.parentNode.classList.add("activo");
 }else{
  //si el valor no es igual remover clase current
  e.parentNode.classList.remove("activo");
 }
 
})

}

// HAMBURGUESA

// document.addEventListener("DOMContentLoaded", function() {

// 	document.querySelector('.hamburger').addEventListener("click", function() {
// 		this.classList.toggle("hamburger--active");
// 		document.querySelector(".nav-fullscreen").classList.toggle("nav-fullscreen--open");
// 	});
	
// });

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});


// Animar titulos secciones:

let animado = document.querySelectorAll(".mi");
let animado2 = document.querySelectorAll(".port");
let animado3 = document.querySelectorAll(".fo");
let animado4 = document.querySelectorAll(".lio");
let animado5 = document.querySelectorAll(".parrafo-portfolio");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if(alturaAnimado -500 < scrollTop) {
      animado[i].classList.add("mi-activo");
    }
  } 
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado2[i].offsetTop;
    if(alturaAnimado -500 < scrollTop) {
      animado2[i].classList.add("port-activo");
    }
  } 
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado3[i].offsetTop;
    if(alturaAnimado -500 < scrollTop) {
      animado3[i].classList.add("fo-activo");
    }
  }
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado4[i].offsetTop;
    if(alturaAnimado -500 < scrollTop) {
      animado4[i].classList.add("lio-activo");
    }
  } 
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado5[i].offsetTop;
    if(alturaAnimado -500 < scrollTop) {
      animado5[i].classList.add("parrafo-portfolio-activo");
    }
  }   
}

window.addEventListener('scroll', mostrarScroll); 

// BACKGROUND ANIMADO
particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":1199.520191923231}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":180}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

particlesJS("particles-js", {
  "interactivity": {
    "detect_on": "window", // "canvas" or "window"
  }
});

particlesJS.load('particles-js', '/vendors/particles.js-master/particles.json', function() {
  console.log('callback - particles.js config loaded');
  let el = document.querySelector(".particles-js-canvas-el"); 
  el.setAttribute("height", "180%");
});




