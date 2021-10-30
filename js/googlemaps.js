function initMap() {
    var pointA = new google.maps.LatLng(51.2750, 1.0870),
      pointB = new google.maps.LatLng(51.5379, 0.7138),
      center = new google.maps.LatLng(51.3, 0.8),
      myOptions = {
        zoom: 10,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(document.getElementById('map-canvas'), myOptions),
      map = new google.maps.Map(myOptions),
      // Instantiate a directions service.
      directionsService = new google.maps.DirectionsService,
      directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
      }),
  
      outputAtoB = document.getElementById('a2b');
  
    // click on marker B to get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, outputAtoB);

  }
  
  
  async function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, callback,content,busstopid) {
       
    var selectedMode = "DRIVING";
    var distance=-1000;
    directionsService.route({
      origin: pointA,
      destination: pointB,
      unitSystem: google.maps.UnitSystem.METRIC,
      travelMode: google.maps.TravelMode[selectedMode]
    }, await function(response, status) {
        callback(response,status,content,busstopid);
    });
    return distance;
  }
  
  //initMap();
 
   function  getDistance(fromGeoLocation,toGeoLocationItem,callback,content){   
    
   var pointA =new google.maps.LatLng(fromGeoLocation.latitude, fromGeoLocation.longitude);
   var pointB =new google.maps.LatLng(toGeoLocationItem.latitude,toGeoLocationItem.longitude);
    center = new google.maps.LatLng( 6.9271, 79.8612),
    myOptions = {
      zoom: 10,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
   
    map = new google.maps.Map(myOptions),
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService,
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    // click on marker B to get route from A to B
    return  calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, callback,content,toGeoLocationItem.busstopid);
}

//Google Place - Textbox Auto Complete
function addAddress() {

  $("#new").on("click", function() {

    var inc = $(".row_address").length + 1,
      // $newAddressRow = `
      //       <div id="${inc}" class="row_address col-sm-02" >
      //                 <input type="text" name="route${inc}" placeholder="Route...">
      //                 <input type="number" name="amount" placeholder="Amount...">
      //         <button class="remove">X</button>
      //     </div>
      //       `;
      $newAddressRow = `<div class="form-floating mb-3">\
                          <div id="1" class="row_address row">\
                            <div class="col-4">\
                              <input type="text" name="route${inc}" placeholder="Route..." class="pac-target-input" autocomplete="off">\
                            </div>\
                            <div class="col-4">\
                              <input type="number" name="amount${inc}" placeholder="Amount...">
                            </div>\
                            <div class="col-2">\
                              <button class="remove">X</button>\
                            </div>\
                        </div>`


    $($newAddressRow).insertBefore($(this));

    var $newAddressInput = $(`input[name='route${inc}']:last`);
    $newAddressInput.focus();

    applySearchAddress($newAddressInput);

  });

};

function delAddress() {
  $(document).on("click", ".remove", function() {
    $(this).closest(".row_address").remove();
    // https://developers.google.com/maps/documentation/javascript/places-autocomplete#style_autocomplete
    // remove predictions
    $("#predictions_" + $(this).closest("div").attr("id")).remove();
  });
};

function applySearchAddress($input) {

  if (google.maps.places.PlacesServiceStatus.OK != "OK") {
    console.warn(google.maps.places.PlacesServiceStatus)
    return false;
  }

  // https://developers.google.com/maps/documentation/javascript/geocoding#ComponentFiltering
  // country: matches a country name or a two letter ISO 3166-1 country code. Note: The API follows the ISO standard for defining countries, and the filtering works best when using the corresponding ISO code of the country.
  var options = {
    // componentRestrictions: {
    //   country: "en"
    // }
  };

  var autocomplete = new google.maps.places.Autocomplete($input.get(0), options);

  autocomplete.addListener('place_changed', function() {

    var place = autocomplete.getPlace();

    if (place.length == 0) {
      return;
    }

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
    $input.attr("lat",  place.geometry.location.lat());
    $input.attr("lng", place.geometry.location.lng());
    $input.val(address);

  });

  // set attr id to the predictions list
  setTimeout(function() {
    var rowId = $input.closest("div").attr("id");
    $(".pac-container:last").attr("id", "predictions_" + rowId);
  }, 100);

};

$(document).ready(function() {
  if(screenName=="createRoute"){
    addAddress();
    delAddress();
  }
});