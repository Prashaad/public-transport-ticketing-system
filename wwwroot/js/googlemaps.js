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