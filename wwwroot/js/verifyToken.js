$(document).ready(function () {
   $("#innerContentbody").load("./qrscan.html");
});

function getValidatePassengerToken(){
    /*To-Do
    * pass the uert id and getthe user and journey details
    */
   var ticketNo="BT0000210211022011";
   var passangerName="John Doe";
   var orginStation="Colombo Fort";
   var destination="Malabe";
   var bookingDate="2021-10-23";

    var strHTML=`<div class="row">\
    <div class="col-lg-10 col-xl-12 col-sm-12 login-card ">\
      <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">\
        <div class="card-body p-4 p-sm-8 ">\
          <h5 class="card-title text-center mb-5 fw-light fs-5">Ticket Details</h5>\
            <div class="form-floating mb-3">\
                <label class="form-label">Ticket No : </label>\
                <span>${ticketNo}</span>\
            </div>\
            <div class="form-floating mb-3">\
                <label class="form-label">Passanger Name : </label>\
                <span>${passangerName}</span>\
            </div>\
            <div class="form-floating mb-3">\
                <label class="form-label">Orgim Station: </label>\
                <span>${orginStation}</span>\
            </div>\
            <div class="form-floating mb-3">\
                <label class="form-label">Destination : </label>\
                <span>${destination}</span>\
            </div>\
            <div class="form-floating mb-3">\
                <label class="form-label">Booking Date : </label>\
                <span>${bookingDate}</span>\
            </div>\
            <div class="d-grid mb-2 text-center">\
                <button class="btn btn-sm btn btn-outline-info fw-bold text-uppercase " type="button" onclick="varifyToken()">Back</button>\
            </div>\
        </div>\
      </div>\
    </div>\
  </div>`
    $("#innerContentbody").html(strHTML);
}