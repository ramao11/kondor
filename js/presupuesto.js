var miBoton = document.querySelector("#enviar");
var miForm = document.querySelector("#formulario");

// Add event listeners to form elements for recalculating on change
document.getElementById("opciones1").addEventListener("change", calcula);
document.getElementById("plazo").addEventListener("change", calcula);
document.getElementById("opciones2").addEventListener("change", calcula);

miBoton.addEventListener("click", (evento) => {
  evento.preventDefault();

  // Validate and submit the form if valid
  if (validar()) {
    miForm.submit();
  }
});

function validar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellidos").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var privacidad = document.getElementById("privacidad");
  var producto = document.getElementById("opciones1").value;
  var plazo = document.getElementById("plazo").value;
  var extras = document.getElementById("opciones2").value;

  // Nombre validation
  if (nombre == null || nombre == "") {
    alert("El campo nombre no puede estar en blanco");
    return false;
  }
  let name_re = /^[a-zA-Z ]{0,15}$/;
  if (!name_re.exec(nombre)) {
    alert(
      "Sólo podrá contener letras y tendrá una longitud máxima de 15 caracteres."
    );
    return false;
  }

  // Apellido validation
  if (apellido == null || apellido == "") {
    alert("El campo apellido no puede estar en blanco");
    return false;
  }
  let app = /^[a-zA-Z ]{0,40}$/;
  if (!app.exec(apellido)) {
    alert(
      "Sólo podrá contener letras y tendrá una longitud máxima de 40 caracteres."
    );
    return false;
  }

  // Teléfono validation
  if (telefono == null || telefono == "") {
    alert("El campo teléfono no puede estar en blanco");
    return false;
  }
  let tel = /^[0-9]{9,9}$/;
  if (!tel.exec(telefono)) {
    alert(
      "Sólo podrá contener números y tendrá una longitud máxima de 9 dígitos."
    );
    return false;
  }

  // Correo validation
  if (correo == null || correo == "") {
    alert("El campo correo no puede estar en blanco");
    return false;
  }
  let corr = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!corr.exec(correo)) {
    alert(
      "Deberá cumplir con los estándares de un correo electrónico. Ejemplo: nnnnn_nnn@zzzzz.xxx"
    );
    return false;
  }

  // Llama a la función calcula() para calcular el presupuesto
  calcula();

  // Comprobación de que la casilla de privacidad esté marcada
  if (!privacidad.checked) {
    alert("Tiene que aceptar las condiciones de privacidad");
    return false;
  }

  return true;
}

function calcula() {
  var producto = document.getElementById("opciones1").value;
  var plazo = document.getElementById("plazo").value;
  var extras = document.getElementById("opciones2").value;

  let plazoValue;
  if (plazo == 1) {
    plazoValue = 500;
  } else if (plazo == 2) {
    plazoValue = 400;
  } else if (plazo == 3) {
    plazoValue = 300;
  } else if (plazo == 4) {
    plazoValue = 200;
  } else if (plazo == 5) {
    plazoValue = 100;
  } else {
    alert("El plazo debe comprenderse entre 1 y 5 meses.");
    return;
  }

  // Obtener los valores de los elementos producto, plazo y extras
  let productoValue = parseInt(producto);
  let valuePlazo = parseInt(plazoValue); //se han asignado dos variables diferentes para parsear y la válida
  let extrasValue = parseInt(extras);

  // Calcular el presupuesto sumando los valores obtenidos
  let presupuesto = productoValue + valuePlazo + extrasValue;

  // Mostrar el resultado en el elemento con id "presupuesto"
  document.getElementById("presupuesto").value = presupuesto + "€";
}
