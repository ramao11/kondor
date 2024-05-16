

function cargar() {
  $.ajax({
    url: "./assets/noticias.json", //url al archivo json//
    type: "GET", //el tipo de envio, get o post//

    //si la carga del archivo es correcta ejecutara la siguiente funcion//
    success: function (data) {
      let objeto_json = data;

      //es un bucle for en el se que recorren los elementos del json y los imprime en pantalla//

      var cadena = "";
for (i = 0; i < objeto_json.noticias.length; i++) {
  cadena +=  "<strong>Titulo:</strong> " + objeto_json.noticias[i].titulo + "<br>";
  cadena +=  "<strong>Descripción:</strong> " + objeto_json.noticias[i].descripcion + "<br>";
  cadena +=  "<a href=" + data.noticias[i].enlace + "' target='_blank'>Leer más</a><br><br>"; // Agrega el enlace
}
$('#noticias').html(cadena);
    },
    error: function (xhr, status) {
      alert("Disculpe, existió un error");
    },
  });
}
