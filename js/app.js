var map;
var uluru ;
var initMap =function () {
uluru = {lat: 24.7366, lng: 46.6803};
map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

        markers();
}
var markers = function () {
  var marker = new google.maps.Marker({
 position: uluru,
 map: map
});
}

var viewModel = function (){

var location = places;
}

viewModel();
