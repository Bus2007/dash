let prevScrollPos = window.pageYOffset;
const mainNav = document.getElementById("mainNav");
let isScrolledUp = false;

window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        mainNav.style.top = "-60px";
        mainNav.classList.remove('scrolled-up');
        mainNav.classList.remove('scrolled-up-icons');
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
        }, 150);
        mainNav.style.top = "0";
    } else if (currentScrollPos === 0) {
        mainNav.style.top = "0";
        mainNav.classList.remove('scrolled-up');
        mainNav.classList.remove('scrolled-up-icons');
        isScrolledUp = false;
    }
    prevScrollPos = currentScrollPos;
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






