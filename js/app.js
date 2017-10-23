
function viewModel  (){
  var self = this;
  self.locations = ko.observableArray(places);
  // filter input
  self.filter = ko.observable('');

  //filter function
  self.filterdLocations = ko.computed(function () {
    var filter = this.filter().toLowerCase();
      return ko.utils.arrayFilter(self.locations(),function (location,i) {
        //console.log(location.marker);
        if(location.name.toLowerCase().indexOf(filter) !== -1){
       location.marker.setVisible(true);
          return location;
        }
        location.marker.setVisible(false);
      });

  }, this);

}

ko.applyBindings( new viewModel());
