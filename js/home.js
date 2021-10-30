var screenName=""; 
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () { 
        $('#sidebar').toggleClass('active');
    });
    $("#contentbody").html("<div class='text-center'><h1>Welcome To</br> Online Bus Ticket System</h1></div>");
});
function check(){
    screenName="CheckInCheckOut"; 
    $("#contentbody").load("qrscan.html");
}
function signOut(){
    removeLocalStorage("userToken");
$("#contentbody").load("../index.html");
}
function busRegistration(){
    $("#contentbody").load("busRegistration.html");
}
function varifyToken(){
    screenName="VarifyToken";
    $("#contentbody").load("verifyToken.html");
}
function busSchedule(){
    $("#contentbody").load("busSchedule.html");
}
function driverRegistration(){
    $("#contentbody").load("driverRegistration.html");
}
function createRoute(){
    screenName="createRoute";
    $("#contentbody").load("createRoute.html");
}
function busSeatReservation(){
    $("#contentbody").load("busSeatReservation.html");
}
function goToHome(){ 
   window.location.href ="home.html";
}

$('#contentbody').click(function(){
    if($('#sidebar').hasClass('active') ){
        $('#sidebar').toggleClass('active');
    } 
});