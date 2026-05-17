async function proyecto() {
    const response = await fetch("https://raw.githubusercontent.com/AndresMartinM/concalma-web/refs/heads/main/concalma-manifiesto.txt");
    const texto = await response.text();

    document.querySelector("p").innerHTML = texto;

}

proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});