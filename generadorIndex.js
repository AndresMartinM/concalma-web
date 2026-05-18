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
            <div class="carousel-item indexCarousel-item active" >
                <img src="` + x.sneakPeek + `" class="d-block" alt="Slide element"/>
                <div class="carousel-caption indexCaption" style="background-color: ` + hexToRgbA(x.colorTexto) + ` !important; color: ` + x.colorFondo + ` !important;">
                    <h4>` + x.titulo + `</h4>
                    <a href="proyecto.html?nro=` + i + `" class="btn btn-outline-light">ver proyecto</a>
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
            <div class="carousel-item indexCarousel-item">
                <img src="` + x.sneakPeek + `" class=d-block" alt="Slide element"/>
                <div class="carousel-caption indexCaption" style="background-color: ` + hexToRgbA(x.colorTexto) + ` !important; color: ` + x.colorFondo + ` !important;">
                    <h4>` + x.titulo + `</h4>
                    <a href="proyecto.html?nro=` + i + `" class="btn btn-outline-light">ver proyecto</a>
                </div>
            </div>`;
        }
    });
}

// esta parte es importantisima
proyectos().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});

function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.6)';
    }
    console.error('Bad Hex');
}