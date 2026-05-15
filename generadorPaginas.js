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
    document.querySelector("h1").innerHTML = proyectos[n].titulo;

    // objeto 360 https://www.cssscript.com/demo/360-degree-image-viewer-with-pure-javascript-circlr/

    // texto explicativo

    // carrusel de proceso y partes
}

// esta parte es importantisima
proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});