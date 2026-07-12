// Variables globales para controlar el estado del programa
let cantidadObras = 0;      // cantidad total de obras a ingresar
let obrasIngresadas = 0;    // contador de obras ya ingresadas
let obras = [];             // array que almacena cada obra como objeto



// Esperamos a que el DOM esté completamente cargardo antes de asignar eventos
document.addEventListener('DOMContentLoaded', function() {
    
    // conectamos el botón del paso 1 con la función
    document.getElementById('btnCantidad').addEventListener('click', confirmarCantidad);
    document.getElementById('btnObra').addEventListener('click', agregarObra);
    document.getElementById('btnCalcular').addEventListener('click', calcular);
    document.getElementById('btnReiniciar').addEventListener('click', reiniciar);
    
});

// funcion para confirmar la cantidad de obras a ingresar
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
    // para que no se pueda modificar la cantidad una vez confirmada
    document.getElementById('cantidadObras').disabled = true;
    document.getElementById('btnCantidad').disabled = true;

    // hablilitamos el paso 2
    document.getElementById('paso2').style.display = 'block';
}

// funcion para agregar cada obra al array
function agregarObra() { 

    // leemos los valores del formulario
    let nombre = document.getElementById('nombreObra').value;
    let duracion = document.getElementById('duracionObra').value;
    let peso = document.getElementById('pesoObra').value;

    // validamos que todos los campos esten completos y sean validos
    if (nombre === "" || isNaN(duracion) || duracion <= 0 || isNaN(peso) || peso <= 0) {
        alert('Completá todos los campos correctamente');
        return;
    }

    // creamos un objeto con los datos de la obra y lo agregamos al array
    let obra = { 
        nombre: nombre, 
        duracion: Number(duracion),
        peso: Number(peso)
    };
    obras.push(obra);

    //incrementamos el contador de obras ingresadas
    obrasIngresadas++;

    // limpiamos los inputs para la siguiente obra
    document.getElementById('nombreObra').value = '';
    document.getElementById('duracionObra').value = '';
    document.getElementById('pesoObra').value = '';

    // actualizamos el contador visible para el usuario
    document.getElementById('contadorObras').textContent = 'Obra ' + obrasIngresadas + ' de ' + cantidadObras + ' ingresada.';

    // si ya ingresamos todas las obras, deshabiltiamos el paso 2 y habilitamos el paso 3
    if (obrasIngresadas === cantidadObras) {
        document.getElementById('nombreObra').disabled = true;
        document.getElementById('duracionObra').disabled = true;
        document.getElementById('pesoObra').disabled = true;
        document.getElementById('btnObra').disabled = true;
        document.getElementById('paso3').style.display = 'block';
    }
}

// Funcion que realiza todos los calculos y muestra los resultados
function calcular() {
    //leemos los valore globales del repositorio
    let tiempoTransferencia = document.getElementById('tiempoTransferencia').value;
    let costoMensual = document.getElementById('costoMensual').value;

    //validamos que sean numero validos y mayores a 0
    if (isNaN(tiempoTransferencia) || tiempoTransferencia <= 0 || 
    isNaN(costoMensual) || costoMensual <= 0) {
        alert('completa todos los campos correctamente');
        return;
    }

    //convertimos a numero 
    tiempoTransferencia = Number(tiempoTransferencia);
    costoMensual = Number(costoMensual);

    // 1. duracion total y promedio
    // recorremos el array sumando la duracion de cada obra
    let duracionTotal = 0;
    for (let i = 0; i < obras.length; i++) {
        duracionTotal += obras[i].duracion;
    }
    let duracionPromedio = duracionTotal / obras.length;

    //2 obra de mayor duracion
    //asumimos que la primera obra es la mayor y comparamos con el resto
    let obraMayor = obras[0]; //arrancamos asumiendo que la primera es la mayor
    for (let i = 1; i < obras.length; i++) {
        if (obras[i].duracion > obraMayor.duracion) {
            obraMayor = obras[i];
        }
    }
    //calculamos el tiempo de transferencia de la obra mayor
    let tiempoDescarga = obraMayor.peso * tiempoTransferencia; 

    // 3. presupuesto anual
    // sumamos el peso total de todas las obras y calculamos el costo anual
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

    // deshabilitamos el paso 3 para evitar récalculos
    document.getElementById('tiempoTransferencia').disabled = true;
    document.getElementById('costoMensual').disabled = true;
    document.getElementById('btnCalcular').disabled = true;
}

// Funcion que reinicia el programa al estado inicial
function reiniciar() {
    // reseteamos las variables globales
    cantidadObras = 0;
    obrasIngresadas = 0;
    obras = [];

    // limpiamos y habilitamos el paso 1
    document.getElementById('cantidadObras').value = '';
    document.getElementById('cantidadObras').disabled = false;
    document.getElementById('btnCantidad').disabled = false;

    // paso 2: limpiamos, habilitamos y ocultamos
    document.getElementById('nombreObra').value = '';
    document.getElementById('duracionObra').value = '';
    document.getElementById('pesoObra').value = '';
    document.getElementById('nombreObra').disabled = false;
    document.getElementById('duracionObra').disabled = false;
    document.getElementById('pesoObra').disabled = false;
    document.getElementById('btnObra').disabled = false;
    document.getElementById('paso2').style.display = 'none';

    // paso 3: limpiamos, habilitamos y ocultamos
    document.getElementById('tiempoTransferencia').value = '';
    document.getElementById('costoMensual').value = '';
    document.getElementById('tiempoTransferencia').disabled = false;
    document.getElementById('costoMensual').disabled = false;
    document.getElementById('btnCalcular').disabled = false;
    document.getElementById('paso3').style.display = 'none';

    // resultado: limpiamos y ocultamos
    document.getElementById('duracionTotal').textContent = '';
    document.getElementById('duracionPromedio').textContent = '';
    document.getElementById('obraMayor').textContent = '';
    document.getElementById('tiempoDescarga').textContent = '';
    document.getElementById('presupuestoAnual').textContent = '';
    document.getElementById('resultados').style.display = 'none';
}