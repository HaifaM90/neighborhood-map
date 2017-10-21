var map;
var uluru ;
var markers =[] ;
var initMap =function () {
uluru = {lat: 24.7366, lng: 46.6803};
map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });



}
 var addMarker = function (place) {

     var length = markers.push(new google.maps.Marker({
     position:place.cords,
     map: map
   }
 ));
 markers[length-1].addListener('click', function() {
   console.log(this.getPosition());
   this.setAnimation(google.maps.Animation.BOUNCE);
   //getInformation from ajex
   new google.maps.InfoWindow({
          content: this.getPosition() + " "
        }).open(map, this);
 });
}



// var clearMarkers = function() {
//   for (var i = 0; i < markers.length; i++) {
//             markers[i].setMap(null);
//         }
//     markers = [];
// }
