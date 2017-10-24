
function ViewModel  (){
  var self = this;
  self.locations = ko.observableArray(places);
  // filter input
  self.filter = ko.observable('');

  //filter function
  self.filterdLocations = ko.computed(function () {
    var filter = this.filter().toLowerCase();
    return ko.utils.arrayFilter(self.locations(),function (location,i) {
      if(location.name.toLowerCase().indexOf(filter) !== -1){
        if (location.marker){
          location.marker.setVisible(true);
        }
        return location;
      }
      if (location.marker) {
        location.marker.setVisible(false);
      }
    });

  }, this);

  //trigger marker function
  self.triggerMarker = function(location) {
    google.maps.event.trigger(location.marker, 'click');
  };
}


ko.applyBindings( new ViewModel());
