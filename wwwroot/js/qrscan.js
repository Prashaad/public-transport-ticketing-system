var geoLocation;
var isMinDistanceFound=false;
var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });
scanner.addListener('scan',function(content){
    getDistanceBusId(content);
});
Instascan.Camera.getCameras().then(function (cameras){
    if(cameras.length>0){ 
        scanner.start(cameras[0]);
        $('[name="options"]').on('change',function(){
            if($(this).val()==1){
                if(cameras[0]!=""){
                    scanner.start(cameras[0]);
                }else{
                    alert('No Front camera found!');
                }
            }else if($(this).val()==2){
                if(cameras[1]!=""){
                    scanner.start(cameras[1]);
                }else{
                    alert('No Back camera found!');
                }
            }
        });
    }else{
        console.error('No cameras found.');
        alert('No cameras found.');
    }
}).catch(function(e){
    console.error(e);
    alert(e);
});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
  alert("Opps! something went wrong location")
  }
}

function showPosition(position) {
    geoLocation=position.coords;
}
var arrlocation=[];
$(document).ready(function () {
    getLocation();
     arrlocation.push({latitude : 6.948286119007608,longitude: 79.85668066379527, busstopid : 1});
    // arrlocation.push({latitude :  6.956804726110859,longitude:79.86143892194264, busstopid : 2});
    // arrlocation.push({latitude : 6.9589772899631805,longitude:79.86281221294502, busstopid : 3});
     arrlocation.push({latitude : 6.9600979860955485, longitude:79.8650478509834, busstopid : 4});
    // arrlocation.push({latitude : 6.960156582924434,longitude:79.86507736690922, busstopid : 5});
     //arrlocation.push({latitude : 6.962969222106921,longitude:79.86773380023264, busstopid : 6});
    arrlocation.push({latitude : 6.966133421031003,longitude: 79.87080345651748, busstopid : 7});
    // arrlocation.push({latitude : 6.966162719069434,longitude: 79.87092152022073, busstopid : 8});
     //arrlocation.push({latitude : 6.968799535032001,longitude:79.87284005539877, busstopid : 9});
    arrlocation.push({latitude : 6.968891466923992,longitude:79.87295616575848, busstopid : 10});
    // arrlocation.push({latitude : 6.972851021606564,longitude: 79.87517523532159, busstopid : 11});
    //arrlocation.push({latitude : 6.974345679180142,longitude:79.87615268260728, busstopid : 12});
   // arrlocation.push({latitude : 6.974345679180142,longitude:79.87607343012466, busstopid : 13});
    arrlocation.push({latitude : 6.975814110046096,longitude:79.87670744998564, busstopid : 14});
    
});

function getDistanceBusId(qrcontent){
    if(screenName=="CheckInCheckOut"){ 
        arrlocation.forEach(function(item) {
            getDistance(geoLocation,item,callbackFunction,qrcontent);
        });        
    }else if(screenName=="VarifyToken"){
        getValidatePassengerToken();
    }
}

function callbackFunction(response, status,content,busstopid) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        var distance =directionsDisplay.getDirections().routes[directionsDisplay.getRouteIndex()].legs[0].distance.value / 1000 ;
        if(distance<= .800 && !isMinDistanceFound){
            isMinDistanceFound=true;
            alert(`busID: ${content} , Latitude :${geoLocation.latitude}, Longitude :${geoLocation.longitude} distance : ${distance}`  );
        }
        return distance;
    } else {
        window.alert('Directions request failed due to ' + status);
    }
}