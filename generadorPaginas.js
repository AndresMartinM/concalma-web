
async function proyecto() {

    // reconocer el numero de proyecto
    var n = new URLSearchParams(window.location.search).get("nro");
    n = Number(n);

    // cargar el json de proyectos
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/proyectos.json");
    const proyectos = await response.json();

    // asignar el color del fondo y del texto
    const main = document.querySelector("main");
    document.body.style.backgroundColor = proyectos[n].colorFondo;
    document.body.style.color = proyectos[n].colorTexto;

    // carrusel imagenes del objeto completo y en uso
    const carObjInd = document.querySelector("#carouselObj-ind");
    const carObjInn = document.querySelector("#carouselObj-inn");

    proyectos[n].imagenesCompleto.forEach((x, i) => {
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

    // objeto 360
    var images = [];
    
    document.querySelector("#image360").innerHTML += `
        <div class="orbit">
        <img id="spin-image" src="` + proyectos[n].imagenes360[0] + `">
        </div>
    `;

    const imageContainer = document.getElementById('image360');
    const imageEl = document.getElementById('spin-image');
    var framesCounter = proyectos[n].imagenes360.length;

    let startX = 0;
    let currentFrame = 0;

    proyectos[n].imagenes360.forEach((x) => {
        images.push(x);
    });

    // evento para objeto 360
    imageContainer.addEventListener('mousemove', (e) => {
        totalFrames = framesCounter;
        const deltaX = e.screenX - startX;
        if (Math.abs(deltaX) > 30) {
            if (deltaX > 0) {
                currentFrame = (currentFrame - 1 + totalFrames) % totalFrames;
            } else {
                currentFrame = (currentFrame + 1) % totalFrames;
            }
            imageEl.src = images[currentFrame];
            startX += deltaX;
        }
    });


    // texto explicativo
    document.querySelector("#descripcion").innerHTML = proyectos[n].descripcion;

    // carrusel de proceso y partes
    const carPartInd = document.querySelector("#carouselPart-ind");
    const carPartInn = document.querySelector("#carouselPart-inn");

    proyectos[n].imagenesSlide.forEach((x, i) => {
        if (x == proyectos[n].imagenesSlide[0]) {
            carPartInd.innerHTML += `
            <li
                data-bs-target="#carouselPart"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="First slide"
            ></li>`;
        } else {
            carPartInd.innerHTML += `
        <li 
        data-bs-target="#carouselPart" 
        data-bs-slide-to="` + i + `" 
        class="active" 
        aria-current="true" 
        aria-label="Slide element"
        ></li>`;
        }
    });
    proyectos[n].imagenesSlide.forEach((x) => {
        if (x == proyectos[n].imagenesSlide[0]) {
            carPartInn.innerHTML += `
            <div class="carousel-item active">
            <img src="` + x.src + `" class="w-100 d-block" alt=""/>
            <div class="carousel-caption">
            <p>` + x.texto + `</p>
            </div>
            </div>`;
        } else {
            carPartInn.innerHTML += `
        <div class="carousel-item">
        <img src="` + x.src + `" class="w-100 d-block" alt="Slide element"/>
        <div class="carousel-caption">
        <p>` + x.texto + `</p>
        </div>
        </div>`;
        }
    });
    

}

// esta parte es importantisima
proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});
