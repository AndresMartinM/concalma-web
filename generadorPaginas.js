var liNumber = 0;

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

    document.querySelector("#image360").innerHTML += `
        <ul class="orbit">
        </ul>
    `;

    proyectos[n].imagenes360.forEach((x) =>{
        document.querySelector(".orbit").innerHTML += `
         <li><img src="` + x + `" /></li>
        `
    });

    liNumber = proyectos[n].imagenes360.lenght -1;


    // texto explicativo
    document.querySelector("#descripcion").innerHTML = proyectos[n].descripcion;

    // carrusel de proceso y partes

    
}

// esta parte es importantisima
proyecto().catch((error) => {
    console.error("Error al cargar el proyecto:", error);
});

$(function orbit(){
	var pic_X=$('.orbit').offset().left;
	var pic_Y=$('.orbit').offset().top;
	var pic_W=$('.orbit').width()/2;
	var pic_H=$('.orbit').height()/2;
	var center_X=pic_X+pic_W;
	var center_Y=pic_Y+pic_H;
	var movestop=pic_W/10;
	$('orbit').mousemove(function(event){
		var mouse_X=event.pageX;
		var mouse_Y=event.pageY;
		if(mouse_X-center_X<=0){
			moveImg(mouse_X,mouse_Y,'left')
		}else{
			moveImg(mouse_X,mouse_Y)
		}
	});
	function moveImg(m_X,m_Y,dir){
		var index=Math.ceil(Math.abs(m_X-center_X)/movestop);
		if(dir){
			$('.orbit li').eq(index).show().siblings().hide();
		}else{
			$('.orbit li').eq(liNumber-index).show().siblings().hide();
		}
	}
})
