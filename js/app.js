function viewModel  (){
  var self = this;
  this.locations = ko.observableArray(places);

// filter input
  this.filter = ko.observable('');

//filter function
  this.filterdLocations = ko.computed(function () {
    var filter = this.filter().toLowerCase();

    //if no filter valure return all
    if (!filter) {
      return self.locations();
    }
    else {
      //compare filter input with location list
      return ko.utils.arrayFilter(self.locations(),function (location,i) {
        if(location.name.toLowerCase().indexOf(filter) !== -1){
          markers[i].setVisible(true);
         return location;
      }
        markers[i].setVisible(false);
      })

    }


  }, this);

}

ko.applyBindings( new viewModel());
