async function proyectos() {

    // cargar el json de proyectos
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/proyectos.json");
    const data = await response.json();

    // seleccionar el contenedor de los proyectos
    const contenedor = document.querySelector("#proyectos");

    // crear las tarjetas de los proyectos
    data.forEach((x, i) => {
        contenedor.innerHTML += `
        <div class="col-md-4">
            <a class="card" href="proyecto.html?nro=` + i + `" style="background-color: ` + x.colorFondo + `; color: ` + x.colorTexto + `;">
                <img
                    class="card-img-top"
                    src="` + x.sneakPeek + `"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h4 class="card-title">` + x.titulo + `</h4>
                    <p class="card-text">` + x.era + `</p>
                </div>
            </a>
        </div>
        `;
    });


}

// esta parte es importantisima
proyectos().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});
