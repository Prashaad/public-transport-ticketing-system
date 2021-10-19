$(document).ready(function () {
    //

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $("#contentbody").load("./qrscan.html", function(responseTxt, statusTxt, jqXHR){});
});
function check(){
window.location.href="qrscan.html";
}
function signOut(){
$("#contentbody").load("../index.html");
}