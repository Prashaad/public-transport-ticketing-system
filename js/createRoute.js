async function SavRoute(){
    
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
        var busStopName=$($(this).children().children()[0]).val();//$(this).children().children().val();
        var latitude=$($(this).children().children()[0]).attr("lat");//$(this).children().children().attr("lat");
        var longitude= $($(this).children().children()[0]).attr("lng");//$(this).children().children().attr("lng");
        var amount=$($(this).children().children()[1]).val();
        if(busStopName && latitude && longitude && amount >=0){
        arrRoutes.push({ name :   busStopName, latitude: latitude   , longitude: longitude, amount : parseInt(amount) });
        }else{
            alert(`Opps! something went wrrong with the route ${busStopName}`);
            return false;
        }
     });
     param.listOfRoutes =arrRoutes;
     try{
         debugger
        param.id=parseInt( param.id);
        var result =await postApiAjaxCall("Route",param) ; 
    } catch(err) {
        console.log(err);
    }
}

/*
    Slave Island, Colombo
    Colombo Fort Station, Colombo
    Kotahena, Colombo
    Keells Mattakkuliya, Aluthmawatha Road, Colombo
    Cargills Food City, Mattakkuliya Centre Road, Colombo 
    LB Finance Mattakkuliya
*/