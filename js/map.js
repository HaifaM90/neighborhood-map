var map;
var uluru ;
var initMap =function () {
uluru = {lat: 24.7366, lng: 46.6803};
map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

 places =places.forEach(function(place) {
  addMarker(place);
});

};
 var addMarker = function (place) {

     var marker = new google.maps.Marker({
     position:place.cords,
     map: map
   }
 );

marker.addListener('click', function() {

     this.setAnimation(google.maps.Animation.BOUNCE);

   getMoreInfo(place.id , this);

 });

 place.marker = marker;
};

var getMoreInfo = function (id, marker) {
  $.ajax('https://api.foursquare.com/v2/venues/'+id+'?v=20170101&client_id='+clientId+'&client_secret='+clientSecret,
  {
        success: function(data) {
        var info=  data.response.venue;
        new google.maps.InfoWindow({
               content: '<h4>'+info.name+'</h4> '+'<strong>Categories:</strong> '+ info.categories[0].name+'<br><strong>Rating:</strong> '
                + (info.rating?info.rating: ' ')
             }).open(map, marker);

        },
        error: function() {
          console.log("ERROR!");
        }
     });
   };
