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
      // ko.utils.arrayForEach(self.locations(), function(location) {
      //   addMarker(location);
      // },this);
      return self.locations();
    }
    else {
      //compare filter input with location list
      return ko.utils.arrayFilter(self.locations(),function (location) {
        if(location.name.toLowerCase().indexOf(filter) !== -1){
          addMarker(location);
        return location;
      }
      })

    }


  }, this);

  //click for more info.
this.moreInfo= ko.computed( function(){
///get info from ajax

//display popup

});

}

ko.applyBindings( new viewModel());
