function viewModel  (){
  var self = this;
  this.locations = ko.observableArray(places);

  this.filter = ko.observable('');

  this.filterdLocations = ko.computed(function () {
    var filter = this.filter().toLowerCase();
    if (!filter) {
      return self.locations();
    }
    else {
      return ko.utils.arrayFilter(self.locations(),function (location) {
        if(location.name.toLowerCase().indexOf(filter) !== -1)
        return location;
      })

    }

  }, this);

  this.pins =[];
  places.forEach( function (location) {
    self.pins.push= location.cords;

  });
  console.log(self.pins);
}

ko.applyBindings( new viewModel());
