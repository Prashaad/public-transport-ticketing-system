function SavRoute(){
    
    var formData= convertFormToJson($("#frmBusRoute"));
    var param={};
    param.routeNo =formData.routeNo;
    param.routeName =formData.routeName;

    if(!param.routeNo){
        alert("Please Enter a Route No. to proceed!");
        return false;
    }
    if(!param.routeName){
        alert("Please Enter a Route Name to proceed!");
        return false;
    }
    if( $(".row_address").length <=1){
        alert("Please add atleast Routes to proceed!");
        return false;
    }
    var arrRoutes=[];
    $('.row_address').each(function(i,e) { 
        var busStopName=$(this).children().val();
        var latitude=$(this).children().attr("lat");
        var longitude= $(this).children().attr("lng");
        if(busStopName && latitude && longitude){
        arrRoutes.push({ busStopName :   busStopName, latitude: latitude   , longitude: longitude });
        }else{
            alert(`Opps! something went wrrong with the route ${busStopName}`);
            return false;
        }
     });
     param.listOfRoutes =arrRoutes;
     console.log(param);
}

/*
    Slave Island, Colombo
    Colombo Fort Station, Colombo
    Kotahena, Colombo
    Keells Mattakkuliya, Aluthmawatha Road, Colombo
    Cargills Food City, Mattakkuliya Centre Road, Colombo 
    LB Finance Mattakkuliya
*/