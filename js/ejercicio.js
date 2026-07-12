let cantidadObras = 0;
let obrasIngresadas = 0;
let obras = []; 



// Esperamos a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // conectamos el botón del paso 1 con la función
    document.getElementById('btnCantidad').addEventListener('click', confirmarCantidad);
    document.getElementById('btnObra').addEventListener('click', agregarObra);
    document.getElementById('btnCalcular').addEventListener('click', calcular);
    document.getElementById('btnReiniciar').addEventListener('click', reiniciar);
    
});

function confirmarCantidad() { 
    //leemos el valor del input
    let cantidad = document.getElementById('cantidadObras').value;

    //validamos que sea un numero y mayor a 0
    if (isNaN(cantidad) || cantidad <= 0 || cantidad === "") {
        alert('ingresa un numero mayor a 0');
        return;
    }

    //guardamos la cantidad como numero
    cantidadObras = Number(cantidad);
    console.log(obras);

    //desabilitamos el input y el boton del paso 1
    document.getElementById('cantidadObras').disabled = true;
    document.getElementById('btnCantidad').disabled = true;

    document.getElementById('paso2').style.display = 'block';
}

function agregarObra() { 
    let nombre = document.getElementById('nombreObra').value;
    let duracion = document.getElementById('duracionObra').value;
    let peso = document.getElementById('pesoObra').value;

    // validamos
    if (nombre === "" || isNaN(duracion) || duracion <= 0 || isNaN(peso) || peso <= 0) {
        alert('Completá todos los campos correctamente');
        return;
    }

    // creamos el objeto y lo agregamos al array
    let obra = { 
        nombre: nombre, 
        duracion: Number(duracion),
        peso: Number(peso)
    };
    obras.push(obra);
    obrasIngresadas++;

    // limpiamos los inputs
    document.getElementById('nombreObra').value = '';
    document.getElementById('duracionObra').value = '';
    document.getElementById('pesoObra').value = '';

    // actualizamos el contador — reemplaza el alert
    document.getElementById('contadorObras').textContent = 'Obra ' + obrasIngresadas + ' de ' + cantidadObras + ' ingresada.';

    // si ya ingresamos todas las obras
    if (obrasIngresadas === cantidadObras) {
        document.getElementById('nombreObra').disabled = true;
        document.getElementById('duracionObra').disabled = true;
        document.getElementById('pesoObra').disabled = true;
        document.getElementById('btnObra').disabled = true;
        document.getElementById('paso3').style.display = 'block';
    }
}

function calcular() {
    //leemos los valores
    let tiempoTransferencia = document.getElementById('tiempoTransferencia').value;
    let costoMensual = document.getElementById('costoMensual').value;

    //validamos
    if (isNaN(tiempoTransferencia) || tiempoTransferencia <= 0 || 
    isNaN(costoMensual) || costoMensual <= 0) {
        alert('completa todos los campos correctamente');
        return;
    }

    //convertimos a numero 
    tiempoTransferencia = Number(tiempoTransferencia);
    costoMensual = Number(costoMensual);

    //calculos

    //1. duracion total y promedio
    let duracionTotal = 0;
    for (let i = 0; i < obras.length; i++) {
        duracionTotal += obras[i].duracion;
    }
    let duracionPromedio = duracionTotal / obras.length;

    //2. obra de mayor duracion
    let obraMayor = obras[0]; //arrancamos asumiendo que la primera es la mayor
    for (let i = 1; i < obras.length; i++) {
        if (obras[i].duracion > obraMayor.duracion) {
            obraMayor = obras[i];
        }
    }
    //tiempo de transferencia de la obra mayor
    let tiempoDescarga = obraMayor.peso * tiempoTransferencia; 

    // 3. presupuesto anual
    let pesoTotal = 0;
    for (let i = 0; i < obras.length; i++) {
        pesoTotal += obras[i].peso;
    }
    let presupuestoAnual = pesoTotal * costoMensual * 12;

    // --- MOSTRAMOS RESULTADOS ---
    document.getElementById('duracionTotal').textContent = 'Duración total: ' + duracionTotal + ' minutos';
    document.getElementById('duracionPromedio').textContent = 'Duración promedio: ' + duracionPromedio + ' minutos';
    document.getElementById('obraMayor').textContent = 'Obra de mayor duración: ' + obraMayor.nombre;
    document.getElementById('tiempoDescarga').textContent = 'Tiempo de descarga: ' + tiempoDescarga + ' ms';
    document.getElementById('presupuestoAnual').textContent = 'Presupuesto anual: $' + presupuestoAnual;

    // mostramos la sección de resultados
    document.getElementById('resultados').style.display = 'block';

    // deshabilitamos el paso 3
    document.getElementById('tiempoTransferencia').disabled = true;
    document.getElementById('costoMensual').disabled = true;
    document.getElementById('btnCalcular').disabled = true;
}

function reiniciar() {
    // reseteamos las variables globales
    cantidadObras = 0;
    obrasIngresadas = 0;
    obras = [];

    // limpiamos y habilitamos el paso 1
    document.getElementById('cantidadObras').value = '';
    document.getElementById('cantidadObras').disabled = false;
    document.getElementById('btnCantidad').disabled = false;

    // limpiamos y ocultamos el paso 2
    document.getElementById('nombreObra').value = '';
    document.getElementById('duracionObra').value = '';
    document.getElementById('pesoObra').value = '';
    document.getElementById('nombreObra').disabled = false;
    document.getElementById('duracionObra').disabled = false;
    document.getElementById('pesoObra').disabled = false;
    document.getElementById('btnObra').disabled = false;
    document.getElementById('paso2').style.display = 'none';

    // limpiamos y ocultamos el paso 3
    document.getElementById('tiempoTransferencia').value = '';
    document.getElementById('costoMensual').value = '';
    document.getElementById('tiempoTransferencia').disabled = false;
    document.getElementById('costoMensual').disabled = false;
    document.getElementById('btnCalcular').disabled = false;
    document.getElementById('paso3').style.display = 'none';

    // limpiamos y ocultamos resultados
    document.getElementById('duracionTotal').textContent = '';
    document.getElementById('duracionPromedio').textContent = '';
    document.getElementById('obraMayor').textContent = '';
    document.getElementById('tiempoDescarga').textContent = '';
    document.getElementById('presupuestoAnual').textContent = '';
    document.getElementById('resultados').style.display = 'none';
}