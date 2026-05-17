async function proyectos() {

    // cargar el json de proyectos
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/proyectos.json");
    const data = await response.json();
    const carInd = document.querySelector("#ind");
    const carInn = document.querySelector("#inn");

    data.forEach((x, i) => {
        if (x == data[0]) {
            carInd.innerHTML += `
            <li
                data-bs-target="#carouselIndex"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="First slide"
            ></li>`;
            carInn.innerHTML += `
            <div class="carousel-item active" style="background-color: ` + x.colorFondo + ` !important; color: ` + x.colorTexto + ` !important;">
                <img src="` + x.sneakPeek + `" class="w-100 img-fluid d-block" alt="Slide element"/>
                <div class="carousel-caption indexCaption">
                    <h4>` + x.titulo + `</h4>
                    <a href="prototipo.html?nro=` + i + `" class="btn btn-light">Ver proyecto</a>
                </div>
            </div>`;
        } else {
            carInd.innerHTML += `
            <li 
            data-bs-target="#carouselIndex" 
            data-bs-slide-to="` + i + `" 
            class="active" 
            aria-current="true" 
            aria-label="Slide element"
            ></li>`;
            carInn.innerHTML += `
            <div class="carousel-item" style="background-color: ` + x.colorFondo + ` !important; color: ` + x.colorTexto + ` !important;">
                <img src="` + x.sneakPeek + `" class="w-100 img-fluid d-block" alt="Slide element"/>
                <div class="carousel-caption indexCaption">
                    <h4>` + x.titulo + `</h4>
                    <a href="prototipo.html?nro=` + i + `" class="btn btn-light">Ver proyecto</a>
                </div>
            </div>`;
        }
    });
}

// esta parte es importantisima
proyectos().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});
