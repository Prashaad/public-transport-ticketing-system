function SavSchedule(){
    var param = convertFormToJson($("#frmBusSchedule"));

    if(!param.busRoute){
        alert("Please Select Route to proceed!");
        return false;
    }

    if(!param.fromDate){
        alert("Please enter the  From Date to proceed!");
        return false;
    }
    if(!param.toDate){
        alert("Please aenter the To Date to proceed!");
        return false;
    }
    if(!param.time){
        alert("Please aenter the Time to proceed!");
        return false;
    }
    if(!param.driver){
        alert("Please Select a driver to proceed!");
        return false;
    }
    console.log(param);
}