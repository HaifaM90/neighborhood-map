var map;
var uluru ;
var markers =[] ;
var initMap =function () {
uluru = {lat: 24.7366, lng: 46.6803};
map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });

places.forEach(function(place) {
  addMarker(place);
});


};
 var addMarker = function (place) {

     var length = markers.push(new google.maps.Marker({
     position:place.cords,
     map: map
   }
 ));

 markers[length-1].addListener('click', function() {
   if (this.getAnimation() !== null)
   {
     this.setAnimation(null);
   }
   else
   {
     this.setAnimation(google.maps.Animation.BOUNCE);
   }

   //getInformation from ajex
   var info = getMoreInfo(place.id);
   new google.maps.InfoWindow({
          content: '<h4>'+info.venue.name+'</h4> '
          +'<strong>Categories:</strong> '+ info.venue.categories[0].name
          +'<br><strong>Rating:</strong> ' + info.venue.rating
        }).open(map, this);
 });
};

var getMoreInfo = function (id) {
  $.ajax('https://api.foursquare.com/v2/venues/'+id+'&client_id='+clientId+'&client_secret='+clientSecret,
  {
        success: function(data) {
           return data;
        },
        error: function() {
          console.log("ERROR!");
        }
     });
}
