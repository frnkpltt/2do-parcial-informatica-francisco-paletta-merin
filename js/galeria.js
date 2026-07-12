// array de obras verticales con nombre, año e imagen
let obrasVerticales = [
    { nombre: 'Lolabelle in the Bardo', anio: 2011, imagen: 'img/anderson-1.jpg' },
    { nombre: 'Chalkroom', anio: 2017, imagen: 'img/anderson-2.jpg' },
    { nombre: 'Habeas Corpus', anio: 2015, imagen: 'img/anderson-3.jpg' },
    { nombre: 'United States Live', anio: 1983, imagen: 'img/obra3.jpg' }
];

// variable para controlar el estado del diseño (pequeño o grande)
let disenioGrande = false;

// funcion que genera el html de la galeria y lo inserta en el DOM
function generarGaleria() {
    let contenedor = document.getElementById('galeria');
    let html = '';

    // primera fila: img1 e img2
    html += '<div class="galeria-fila">';
    html += '<div class="tarjeta tarjeta-vertical">';
    html += '<img src="' + obrasVerticales[0].imagen + '" alt="' + obrasVerticales[0].nombre + '">';
    html += '<p class="obra-nombre">' + obrasVerticales[0].nombre + '</p>';
    html += '<p class="obra-anio">' + obrasVerticales[0].anio + '</p>';
    html += '</div>';
    html += '<div class="tarjeta tarjeta-vertical">';
    html += '<img src="' + obrasVerticales[1].imagen + '" alt="' + obrasVerticales[1].nombre + '">';
    html += '<p class="obra-nombre">' + obrasVerticales[1].nombre + '</p>';
    html += '<p class="obra-anio">' + obrasVerticales[1].anio + '</p>';
    html += '</div>';
    html += '</div>';

    // segunda fila: img3 e img4
    html += '<div class="galeria-fila">';
    html += '<div class="tarjeta tarjeta-vertical">';
    html += '<img src="' + obrasVerticales[2].imagen + '" alt="' + obrasVerticales[2].nombre + '">';
    html += '<p class="obra-nombre">' + obrasVerticales[2].nombre + '</p>';
    html += '<p class="obra-anio">' + obrasVerticales[2].anio + '</p>';
    html += '</div>';
    html += '<div class="tarjeta tarjeta-vertical">';
    html += '<img src="' + obrasVerticales[3].imagen + '" alt="' + obrasVerticales[3].nombre + '">';
    html += '<p class="obra-nombre">' + obrasVerticales[3].nombre + '</p>';
    html += '<p class="obra-anio">' + obrasVerticales[3].anio + '</p>';
    html += '</div>';
    html += '</div>';

    // foto horizontal que ocupa el ancho completo
    html += '<div class="tarjeta tarjeta-horizontal">';
    html += '<img src="img/obra2.jpg" alt="Big Science">';
    html += '<p class="obra-nombre">Big Science</p>';
    html += '<p class="obra-anio">1982</p>';
    html += '</div>';

    // video de youtube al final de la galeria
    html += '<div class="tarjeta tarjeta-video">';
    html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ABjmQCxA7UU?si=pQfa5QIlmllwyDUj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    html += '<p class="obra-nombre">Tiny Desk Home</p>';
    html += '<p class="obra-anio">2021</p>';
    html += '</div>';

    // insertamos todo el HTML generado en el contenedor
    contenedor.innerHTML = html;
}

// funcion que alterna el tamaño de las imagenes verticales
// usa la variable disenioGrande para saber si debe ponerlas grandes o pequeñas
function cambiarDisenio() {
    let imagenes = document.querySelectorAll('.tarjeta-vertical img');
    disenioGrande = !disenioGrande;

    for (let i = 0; i < imagenes.length; i++) {
        if (disenioGrande) {
            imagenes[i].style.width = '100%';
        } else {
            imagenes[i].style.width = '60%';
        }
    }
}

// cuanndo el DOM esta listo, generamos la galeria y asignamos el evento al boton
document.addEventListener('DOMContentLoaded', function() {
    generarGaleria();
    document.getElementById('btnCambioDiseno').addEventListener('click', cambiarDisenio);
});