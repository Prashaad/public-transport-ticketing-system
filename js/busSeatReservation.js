function SaveReservingSeats(){
    var params= convertFormToJson($("#frmBusSeatReservation"));
    if(params.reservingSeats<=0){
        alert(`Please add atleast one seet to proceed.`);
        return false;
    }
    console.log(params);
}