var map;
var uluru ;
var marker ;
var initMap =function () {
uluru = {lat: 24.7366, lng: 46.6803};
map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

//addMarkers(markers);
}
 var addMarkers = function (places) {
   places.forEach(function(place) {
     marker= new google.maps.Marker({
     position:place.cords,
     map: map
   }
 );
});

 }
