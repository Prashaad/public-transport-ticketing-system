var screenName=""; 
$(document).ready(function () {
    initializeMenu();
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

function initializeMenu(){
//passanger 1
//driver 2 
//Transport Manager 3
//Inspector 4
const userdetails = getLoggedInUserId();
if(userdetails!=null && userdetails!=""){
    let strHTmlMenu =`<div class="sidebar-header">\
                        <h3>Bus Ticket System</h3>\
                     </div>\
                     <ul class="list-unstyled components">\
                        <p>Online Bus System</p>\
                    <li class="active">\
                        <a href="#" onclick="goToHome()">Home</a>\
                    </li>`;
        if(userdetails.usertype==1){
            strHTmlMenu+=`<li>\
                            <a href="#" onclick="check()">Checkin / Checkout</a>\
                          </li>\
                          <li>\
                              <a href="#" onclick="busSeatReservation()">Bus Seat Reservation</a>\
                          </li>`;
        }else if(userdetails.usertype==2){
            strHTmlMenu+=`<li>\
                            <a href="#" onclick="varifyToken()">Varify Passenger</a>\
                          </li>`;
        }else if(userdetails.usertype==3){
            strHTmlMenu+=`<li>\
                            <a href="#" onclick="varifyToken()">Varify Passenger</a>\
                          </li>\
                          <li>\
                            <a href="#" onclick="driverRegistration()">Driver Registration</a>\
                          </li>\                   
                          <li>\
                              <a href="#" onclick="busRegistration()">Bus Registration</a>\
                          </li>\
                          <li>\
                              <a href="#" onclick="createRoute()">Bus Route</a>\
                          </li>\
                          <li>\
                              <a href="#" onclick="busSchedule()">Bus Schedule</a>\
                          </li>`;
        }else if(userdetails.usertype==4){
            strHTmlMenu+=`<li>\
                            <a href="#" onclick="varifyToken()">Varify Passenger</a>\
                          </li>\
                          <li>\
                            <a href="#" onclick="driverRegistration()">Driver Registration</a>\
                          </li>\   
                          <li>\
                              <a href="#" onclick="busRegistration()">Bus Registration</a>\
                          </li>\
                          <li>\
                              <a href="#" onclick="createRoute()">Bus Route</a>\
                          </li>\
                          <li>\
                              <a href="#" onclick="busSchedule()">Bus Schedule</a>\
                          </li>`;
        }

        strHTmlMenu +=`</ul>`;
        strHTmlMenu +=`<ul class="list-unstyled CTAs">\
                            <li>\
                <a href="../index.html" class="download" onclick="signOut()">SignOut</a>\
            </li>\
        </ul>`;
        var menu = $("#sidebar");  // get jQuery object
        $(menu).append(strHTmlMenu); 
    }else{
        alert("Opps! User Not Found");
        signOut();
    }
}