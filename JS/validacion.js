/* este bloque corre en pagina CONTACTO*/ 

function calcularEstadia() {
  var nombre = document.getElementById("nombre").value;

  var fechaLlegadaInput = document.getElementById("fecha_llegada");
  var fechaSalidaInput = document.getElementById("fecha_salida");

  var fechaLlegada = new Date(fechaLlegadaInput.value);
  var fechaSalida = new Date(fechaSalidaInput.value);

  var precioDiario = 7500;
  var diasReserva = Math.round((fechaSalida - fechaLlegada) / (1000 * 60 * 60 * 24)) + 1;
  var precioTotal = diasReserva * precioDiario;

  if (document.getElementById("cuidados_especiales").checked) {
    precioTotal += 300 * diasReserva;
  }

  document.getElementById("total_dias").value = diasReserva;
  document.getElementById("total_monto").value = "$" + precioTotal;
}


