$(document).ready(function () {
    intializeBusRouteDropDown();
    intializeBusDriversDropDown(); 
});
async function intializeBusRouteDropDown(){
    var $busRoute = $("#routeid");
    var result =await getApiAjaxCall("Route");
    result.forEach(function(item) {
        $busRoute.append($("<option />").val(item.routeId).text(item.routeName));
    });        
}
async function intializeBusDriversDropDown(){
    var $busDriver= $("#driverid");
    var result =await getApiAjaxCall("Driver");
    result.forEach(function(item) {
        $busDriver.append($("<option />").val(item.userId).text(item.fullname));
    });        
}
async function SavSchedule(){
    var param = convertFormToJson($("#frmBusSchedule"));
    param.id=parseInt(param.id);
    param.RouteId=parseInt( param.RouteId);
    param.DriverId=parseInt( param.DriverId);

    if(param.RouteId==0){
        alert("Please Select Route to proceed!");
        return false;
    }

    if(!param.StartTime){
        alert("Please enter the  Start Date to proceed!");
        return false;
    }
    if(!param.EndTime){
        alert("Please aenter the End Date to proceed!");
        return false;
    }
    if(!param.time){
        alert("Please aenter the Time to proceed!");
        return false;
    }
    if(param.DriverId==0){
        alert("Please Select a driver to proceed!");
        return false;
    }

    param.StartTime= moment(`${param.StartTime} ${param.time}`, 'YYYY-MM-DD HH:mm').toDate();
    param.EndTime= moment(`${param.EndTime} ${param.time}`, 'YYYY-MM-DD HH:mm').toDate();
    try{ 
        var result =await postApiAjaxCall("Schedule",param) ; 
        if(result> 0){
            alert("Schedule Saved Successfully!");
            window.location.href ="home.html";
        }
        
    } catch(err) {
       alert("Failed to Save!");
    }
    
    
}