async function proyecto() {
    var numero = new URLSearchParams(window.location.search).get("nro");
    numero = Number(numero);
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/proyectos.json");
    const proyectos = await response.json();

    // carrusel imagenes del objeto completo y en uso

    proyectos[numero].imagenesCompleto.forEach((x) => {
        document.querySelector("#carouselObj-ind").innerHTML += `
        <li data-bs-target="#carouselObj" data-bs-slide-to="` + x + `" class="active" aria-current="true" aria-label="Slide element"></li>`;
    });
    proyectos[numero].imagenesCompleto.forEach((x) => {
        if (x == proyectos[numero].imagenesCompleto[0]) {
            document.querySelector("#carouselObj-inn").innerHTML += `
            <div class="carousel-item active"><img src="` + x + `" class="w-100 d-block" alt="Slide element"/></div>`;
        }
        document.querySelector("#carouselObj-inn").innerHTML += `
        <div class="carousel-item"><img src="` + x + `" class="w-100 d-block" alt="Slide element"/></div>`;
    });


    // titulo

    // objeto 360

    // texto explicativo

    // carrusel de proceso y partes
}