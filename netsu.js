let prevScrollPos = window.pageYOffset;
const mainNav = document.getElementById("mainNav");
let isScrolledUp = false;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 1) {
        mainNav.style.top = "-12.5%";
        isScrolledUp = false;
    } else if (currentScrollPos < prevScrollPos && currentScrollPos > 0) {
        mainNav.style.top = "0";
        mainNav.classList.add('scrolled-up');
        mainNav.classList.add('scrolled-up-icons');
        isScrolledUp = true;
    } else if (currentScrollPos === 0 && isScrolledUp) {
        setTimeout(() => {
            mainNav.classList.remove('scrolled-up');
            mainNav.classList.remove('scrolled-up-icons');
            isScrolledUp = false;
        }, 1);
        mainNav.style.top = "0";
    } else if (currentScrollPos === 0) {
        mainNav.style.top = "0";
        mainNav.classList.remove('scrolled-up');
        mainNav.classList.remove('scrolled-up-icons');
        isScrolledUp = false;
    } else if (currentScrollPos > 50 && isScrolledUp && currentScrollPos <= prevScrollPos) {
        mainNav.classList.add('scrolled-up');
        mainNav.classList.add('scrolled-up-icons');
    }
    prevScrollPos = currentScrollPos;
});

const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');
const overlay = document.getElementById('overlay');
const    closeMenuBtn = document.getElementById('close-menu-btn');

menuToggle.addEventListener('click', function(event) {
    event.preventDefault();
    slideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    });

closeMenuBtn.addEventListener('click', function() {
    slideMenu.classList.remove('open');
    overlay.classList.remove('open');
});

document.addEventListener('click', function(event) {
    if (slideMenu.classList.contains('open') && !event.target.closest('.slide-menu') && event.target !== menuToggle && !event.target.closest('#mainNav')) {
        slideMenu.classList.remove('open');
        overlay.classList.remove('open');
    }
});

overlay.addEventListener('click', function() {
    slideMenu.classList.remove('open');
    overlay.classList.remove('open');
});


document.addEventListener('DOMContentLoaded', () => {
    const slideMenu = document.getElementById('slide-menu');
    const slideMenuCatalogo = document.getElementById('slide-menu-catalogo');
    const openCatalogoBtn = document.querySelector('#slide-menu ul li a[href="#"]');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    function closeMenus() {
        slideMenu.classList.remove('open', 'shifted');
        slideMenuCatalogo.classList.remove('open');
        document.removeEventListener('click', closeOnOutsideClick);
    }
    function closeOnOutsideClick(event) {
        if (!slideMenu.contains(event.target) && !slideMenuCatalogo.contains(event.target) && event.target !== openCatalogoBtn) {
            closeMenus();
        }
    }
    if (openCatalogoBtn) {
        openCatalogoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            slideMenuCatalogo.classList.add('open');
            slideMenu.classList.add('shifted');
            document.addEventListener('click', closeOnOutsideClick);
        });
    }
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            closeMenus();
        });
    }
});


const mapToggle = document.getElementById('map-toggle');
const slideMap = document.getElementById('slide-mapa');
const overlay1 = document.getElementById('overlay');
const closeMapBtn = document.getElementById('close-map-btn');

mapToggle.addEventListener('click', function(event) {
    event.preventDefault();
    slideMap.classList.toggle('open');
    overlay1.classList.toggle('open');
    });

closeMapBtn.addEventListener('click', function() {
    slideMap.classList.remove('open');
    overlay1.classList.remove('open');
});

document.addEventListener('click', function(event) {
    if (slideMap.classList.contains('open') && !event.target.closest('.slide-mapa') && event.target !== mapToggle && !event.target.closest('#mainNav')) {
        slideMap.classList.remove('open');
        overlay1.classList.remove('open');
    }
});

overlay.addEventListener('click', function() {
    slideMap.classList.remove('open');
    overlay1.classList.remove('open');
});

const contactToggle = document.getElementById('contact-toggle');
const slideContact = document.getElementById('slide-contacto');
const overlay2 = document.getElementById('overlay');
const closeContactBtn = document.getElementById('close-contacto-btn');

contactToggle.addEventListener('click', function(event) {
    event.preventDefault();
    slideContact.classList.toggle('open');
    overlay2.classList.toggle('open');
    });

closeContactBtn.addEventListener('click', function() {
    slideContact.classList.remove('open');
    overlay2.classList.remove('open');
});

document.addEventListener('click', function(event) {
    if (slideContact.classList.contains('open') && !event.target.closest('.slide-contacto') && event.target !== contactToggle && !event.target.closest('#mainNav')) {
        slideContact.classList.remove('open');
        overlay2.classList.remove('open');
    }
});

overlay.addEventListener('click', function() {
    slideContact.classList.remove('open');
    overlay2.classList.remove('open');
});

const frases = ["Pro A/V", "IT cómputo", "Consumo", "Servicios de Valor"];
let index = 0;
let charIndex = 0;
const rotador = document.getElementById("rotador-js");

function escribirFrase() {
    if (!rotador) return;

    if (charIndex <= frases[index].length) {
        rotador.textContent = frases[index].substring(0, charIndex);
        charIndex++;
        setTimeout(escribirFrase, 40);
    } else {
        setTimeout(borrarFrase, 1000);
    }
}

function borrarFrase() {
    if (!rotador) return;

    if (charIndex > 0) {
        rotador.textContent = frases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(borrarFrase, 50);
    } else {
        index = (index + 1) % frases.length;
        setTimeout(escribirFrase, 500);
    }
}

escribirFrase();

const irseccion5 = document.getElementById('irseccion5');
const sec5 = document.getElementById('sec5');

irseccion5.addEventListener('click', function(e) {
    e.preventDefault();

const targetPosition = sec5.offsetTop;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
    const duration = 1000;
let start = null;

function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

    if (progress < duration) {
    window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};

window.requestAnimationFrame(step);
});


const scrollContainer = document.getElementById("marcas-scroll");
const marcas = document.getElementById("contenedor-marcas");

if (scrollContainer && marcas) {
    marcas.innerHTML += marcas.innerHTML;

    const velocidad = 1.8;
    let animationActive = true;

    function scrollMarcas() {
        if (animationActive) {
            scrollContainer.scrollLeft += velocidad;
            if (scrollContainer.scrollLeft >= marcas.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }
        }
        requestAnimationFrame(scrollMarcas);
    }

    scrollMarcas();

    let isUserInteracting = false;
    let startX, scrollLeft;

    scrollContainer.addEventListener("mousedown", (e) => {
        isUserInteracting = true;
        animationActive = false;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isUserInteracting = false;
        animationActive = true;
    });

    scrollContainer.addEventListener("mouseup", () => {
        isUserInteracting = false;
        animationActive = true;
    });

    scrollContainer.addEventListener("mousemove", (e) => {
        if (!isUserInteracting) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    scrollContainer.addEventListener("wheel", () => {
        animationActive = false;
        setTimeout(() => animationActive = true, 100);
    });

    scrollContainer.addEventListener("touchstart", () => {
        animationActive = false;
    });

    scrollContainer.addEventListener("touchend", () => {
        setTimeout(() => animationActive = true, 100);
    });

    scrollContainer.addEventListener("touchmove", () => {});
}

let currentIndex = 0;
const productos = document.getElementById("productos");
const puntos = document.querySelectorAll(".punto");

function updateCarrusel() {
    productos.style.transform = `translateX(-${currentIndex * 25}%)`;
    puntos.forEach(p => p.classList.remove("activo"));
    puntos[currentIndex].classList.add("activo");
}

puntos.forEach(punto => {
    punto.addEventListener("click", () => {
        currentIndex = parseInt(punto.getAttribute("data-index"));
        updateCarrusel();
    });
});

