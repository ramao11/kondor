var indexValue = 1; //se da el valor de 1 para asociarlo a la primera imagen y se le pasa el valor de index value//
showImg(indexValue);

const izq = document.querySelector(".left"); //la flecha izquierda de la galeria//
const dcha = document.querySelector(".right"); //la flecha derecha de la galeria//

//cuando con el addEventListener se detecte click ejecutará la funcion anónima que resta en 1 el valor del indexValue cada vez que se presiona//
izq.addEventListener("click", () => {
  showImg((indexValue += -1));
});

//cuando con el addEventListener se detecte click ejecutará la funcion anónima que suma en 1 el valor del indexValue cada vez que se presiona//
dcha.addEventListener("click", () => {
  showImg((indexValue += 1));
});

let array = document.querySelectorAll(".btn"); //selecciona todos los botones de abajo//

array.forEach((item, index) => {   //  hace un bucle en el que devuelve el elemento //
  item.addEventListener("click", (e) => { // cada vez que se haga una pasada del bucle se ejecutara la función anónima //
    showImg((indexValue = e.target.id.substr(-1))); /*se busca el nombre que se le ha dado a la etiqueta html, más en concreto el valor numérico, 
    se le dice que queremos el ultimo elemento del nombre con el "(-1)"*/
  });
});

function showImg(foto) {
  var i;
  const img = document.querySelectorAll(".galeria");
  const slider = document.querySelectorAll(".btm-slides span");//selecciona todos los botones de abajo//

  if (foto > img.length) { //si la longitud de imágenes es superior a la cantidad máxima entonces el valor será 1//
    indexValue = 1;
  }
  if (foto < 1) { //si la longitud de imágenes es inferior a la cantidad mínima entonces el valor será img.length//
    indexValue = img.length;
  }

  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none"; //ocultar todas las imágenes//
  }

  for (i = 0; i < slider.length; i++) { //para rellenar el background de color transparente cuando va a la izquierda//
    img[i].style.background = "rgba(0,0,0,0.1 )";
  }

  img[indexValue - 1].style.display = "block"; //enseñamos la foto que corresponde//
  slider[indexValue - 1].style.background = "black"; //haciendo que el background de las pelotas de la galería sean de color negro cuando va a la derecha//
}
