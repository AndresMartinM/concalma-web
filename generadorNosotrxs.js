async function proyecto() {
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/nosotrxs.json");
    const data = await response.json();

    const perfilesContainer = document.getElementById("perfiles");
    data.forEach((perfil, i) => {
        perfilesContainer.innerHTML += `
        <div class="card col-lg-4">
                <div id="card-num` + i + `" class="card-body">
                    <h4 class="card-title">${perfil.nombre}</h4>
                    <p class="card-text">${perfil.descripcion}</p>
                </div>
            </div>
        `;
        let card = document.querySelector('#card-num' + i);

        data[i].redes.forEach((link) => {
            card.innerHTML += `
                <a href="` + link.url + `" class="btn btn-outline-primary btn-sm card-link">
                    <i class="` + link.icono + `"></i>
                </a>
            `;
        });
    });

}

proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});