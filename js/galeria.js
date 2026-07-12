let obrasVerticales = [
    { nombre: 'Lolabelle in the Bardo', anio: 2011, imagen: 'img/anderson-1.jpg' },
    { nombre: 'Chalkroom', anio: 2017, imagen: 'img/anderson-2.jpg' },
    { nombre: 'Habeas Corpus', anio: 2015, imagen: 'img/anderson-3.jpg' },
    { nombre: 'United States Live', anio: 1983, imagen: 'img/obra3.jpg' }
];

let disenioGrande = false;

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

    // foto horizontal
    html += '<div class="tarjeta tarjeta-horizontal">';
    html += '<img src="img/obra2.jpg" alt="Big Science">';
    html += '<p class="obra-nombre">Big Science</p>';
    html += '<p class="obra-anio">1982</p>';
    html += '</div>';

    // video
    html += '<div class="tarjeta tarjeta-video">';
    html += '<iframe src="https://www.youtube.com/embed/CEHm9LK9vtU?si=oSGivQp0p9AKxTBz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    html += '<p class="obra-nombre">O Superman</p>';
    html += '<p class="obra-anio">1981</p>';
    html += '</div>';

    contenedor.innerHTML = html;
}

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

document.addEventListener('DOMContentLoaded', function() {
    generarGaleria();
    document.getElementById('btnCambioDiseno').addEventListener('click', cambiarDisenio);
});