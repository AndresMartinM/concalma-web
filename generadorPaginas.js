var framesCount = 0;
var images = [];

async function proyecto() {

    var n = new URLSearchParams(window.location.search).get("nro");
    n = Number(n);
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/proyectos.json");
    const proyectos = await response.json();

    // carrusel imagenes del objeto completo y en uso

    const carObjInd = document.querySelector("#carouselObj-ind");
    const carObjInn = document.querySelector("#carouselObj-inn");

    proyectos[n].imagenesCompleto.forEach((x,i) => {
        if (x == proyectos[n].imagenesCompleto[0]) {
            carObjInd.innerHTML += `
            <li
                data-bs-target="#carouselObj"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="First slide"
            ></li>`;
        } else {
        carObjInd.innerHTML += `
        <li 
        data-bs-target="#carouselObj" 
        data-bs-slide-to="` + i + `" 
        class="active" 
        aria-current="true" 
        aria-label="Slide element"
        ></li>`;
        }
    });
    proyectos[n].imagenesCompleto.forEach((x) => {
        if (x == proyectos[n].imagenesCompleto[0]) {
            carObjInn.innerHTML += `
            <div class="carousel-item active">
            <img src="` + x + `" class="w-100 d-block" alt="Slide element"/>
            </div>`;
        } else {
        carObjInn.innerHTML += `
        <div class="carousel-item">
        <img src="` + x + `" class="w-100 d-block" alt="Slide element"/>
        </div>`;
        }
    });

    // titulo del proyecto
    document.querySelector("title").innerHTML = proyectos[n].titulo;
    document.querySelector("h1").innerHTML = proyectos[n].titulo;

    // objeto 360 https://www.cssscript.com/demo/360-degree-image-viewer-with-pure-javascript-circlr/ https://www.jqueryscript.net/demo/Super-Tiny-jQuery-360-Degrees-Product-Image-Viewer/
/*
    document.querySelector("#image360").innerHTML += `
        <div class="orbit">
        <img id="spin-image">
        </div>
    `;
*/
    proyectos[n].imagenes360.forEach((x) =>{
        images.push(x);
        /*document.querySelector(".orbit").innerHTML += `
         <img src="` + x + `" />
        `*/
    });

    framesCount = proyectos[n].imagenes360.lenght;


    // texto explicativo
    document.querySelector("#descripcion").innerHTML = proyectos[n].descripcion;

    // carrusel de proceso y partes

    
}

// esta parte es importantisima
proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});

const imageContainer = document.getElementById('image360');
const imageEl = document.getElementById('spin-image');
const totalFrames = framesCount; // Number of images in your sequence


let isDragging = false;
let startX = 0;
let currentFrame = 0;

// 1. Preload the images

// 2. Event Listeners
imageContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

imageContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    // Adjust the divisor (e.g., 10) to change rotation sensitivity
    if (Math.abs(deltaX) > 3) { 
        if (deltaX > 0) {
            currentFrame = (currentFrame - 1 + totalFrames) % totalFrames;
        } else {
            currentFrame = (currentFrame + 1) % totalFrames;
        }
        imageEl.src = images[currentFrame].src;
        startX = e.clientX; // Reset start position
    }
});
