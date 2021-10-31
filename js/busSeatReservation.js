$(document).ready(function () {
    intializeBusRouteDropDown();
    intializeBusScheduleDropDown(); 
}); 
async function intializeBusRouteDropDown(){
    var $busRoute = $("#busrouteid");
    var result =await getApiAjaxCall("Route");
    result.forEach(function(item) {
        $busRoute.append($("<option />").val(item.routeId).text(item.routeName));
    });        
}
async function intializeBusScheduleDropDown(){
    var $busDriver= $("#Time");
    var result =await getApiAjaxCall("Schedule");
    result.forEach(function(item) {
        if(moment(item.endTime).toDate() >=  new Date()){ 
        const time =moment(item.startTime).format("HH:mm");
        $busDriver.append($("<option />").val(item.id).text(time));
        }
    });        
}

async function SaveReservingSeats(){
    var params= convertFormToJson($("#frmBusSeatReservation"));
    params.id=parseInt(params.id);
    params.NoOfSheet=parseInt( params.NoOfSheet);
    params.busrouteid=parseInt( params.busrouteid);
   
    if(params.NoOfSheet<=0){
        alert(`Please add atleast one seet to proceed.`);
        return false;
    }
    if(parseInt(params.Time)<=0){
        alert(`Please sselect a time to proceed.`);
        return false;
    }
    if(params.busrouteid<=0){
        alert(`Please sselect a bus route to proceed.`);
        return false;
    } if(!params.createdate){
        alert(`Please enter a date to proceed.`);
        return false;
    }
    
   const userdetails = getLoggedInUserId();
   if(userdetails.userid==0){
    alert(`'Logged In user not fount`);
    return false;
   }
   params.Time =$("#Time :selected").text();
   params.PassengerId= userdetails.userid;  
   params.createdate=moment(params.createdate).toDate();
    try{ 
        var result =await postApiAjaxCall("Reservation",params) ; 
        if(result> 0){
            alert("Reservation Saved Successfully!");
            window.location.href ="home.html";
        }
        
    } catch(err) {
       alert("Failed to Save!");
    }
}