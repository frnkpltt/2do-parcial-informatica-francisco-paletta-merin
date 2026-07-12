// array con los datos curiosos
let datosCuriosos = [
    'Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.',
    'Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.',
    'Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.',
    'Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.',
    'En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.',
    'Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.',
    'Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.',
    'Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.',
    'Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.',
    'Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes.'
];

// funcion que elige un dato al azar y lo muestra en pantalla
function mostrarDatoCurioso() {
    // Math.random() genera un decimal entre 0 y 1
    // lo multiplicamos por la longitud del array y usamos Math.floor
    // para obtener un indice entero valido entre 0 y 9
    let indice = Math.floor(Math.random() * datosCuriosos.length);
    
    // mostramos el dato en el párrafo correspondiente
    document.getElementById('textoCurioso').textContent = datosCuriosos[indice];
}

// cuando el DOM esta listo, mostramos un dato inicial y asignamos el evento al boton
document.addEventListener('DOMContentLoaded', function() {
    // mostramos un dato al cargar la página para que no aparezca vacio
    mostrarDatoCurioso();
    
    // cada vez que el usuario aprieta el boton, se muestra un nuevo dato al azar
    document.getElementById('btnCurioso').addEventListener('click', mostrarDatoCurioso);
});