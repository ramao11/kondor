
/*var map = L.map("map").setView([41.59282,-4.11847], 15);



var popup = L.popup()
  .setLatLng([41.59282, -4.11847])
  .setContent('<a href="https://www.youtube.com/watch?v=6peMik4tpLA" target="_blank"');

var greenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize: [38, 95],
  shadowSize: [50,64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
});

var marker = L.marker([41.59282, -4.11847])
  .addTo(map)
  .bindPopup("Kondor Containers S.L.");*/

  /*navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    let map = L.map("map", {
      center: [latitude, longitude],
      zoom: 12,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let control = L.Routing.control({
      waypoints: [
        L.latLng(latitude, longitude),
        L.latLng(41.59282, -4.11847)],
      language: "es",
      show: true,
      autoRoute: true
    }).addTo(map);*/

    //opciones de la localizacion dependiento de si el usuario activa la ubicación
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(sucess,error,options);
      }else{
        alert("Geolocalización no disponible")
      }

      var options = {
        enableHighAccuracy: true, //la mayor precisión posible
        timeout: 5000, //valor por defecto
        maximumAge: 0 //sin caché
      }
//si tenemos la ubicacion se hace una ruta desde donde se encuentre el usuario a la ubicación proporcionada
      function sucess(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

//iniciamos mapa en las coordenadas del usuario
        let map = L.map('map', {
          center: [latitude, longitude],
          zoom: 14
        });

//aplicamos el tipo de mapa
         L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
           attribution:
             '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
             maxZoom:18
         }).addTo(map);

         let control = L.Routing.control({
           waypoints: [
             L.latLng(latitude, longitude),
             L.latLng(41.59282, -4.11847),
           ],
           language: "es",
           show: true,
           autoRoute: true,
         }).addTo(map);
        }
//si no tenemos ubicacion se carga este otro mapa por defecto con nuestra ubicacion
        function error(){
          var map = L.map("map", {
            center: [41.59282, -4.11847],
            zoom: 17,
          });

          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map);
        };
