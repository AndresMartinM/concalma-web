async function proyecto() {
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/manifiesto.md");
    const texto = await response.text();

    document.querySelector("md-block").innerHTML = texto;

}

proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});