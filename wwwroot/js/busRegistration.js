$(document).ready(function () { 
});
function generteQRCode(){
    debugger
    $('#preview-qecode').html("");
    var val = $('#gn-val').val();
    debugger
    if(val){
        $('#preview-qecode').qrcode(val);
    }else{
        alert("Please provide a busCode !");
    }
}

function SaveBus(){
    var param = convertFormToJson($("#frmBusRegistration"));
debugger
    $('#preview-qecode').html("");
    if(param.busCode){
        $('#preview-qecode').qrcode(param.busCode);
    }else{
        alert("Please provide a busCode !");
        return false;
    }
    if(!param.numberofSeats){
        alert("Please add no of seeats to proceed!");
    }

    var canvas = $('#preview-qecode canvas');
    var img = canvas.get(0).toDataURL("image/png");
    param.qrcode =img.replace("image/png", "" ).replace("data:;base64,","");
    debugger
    downloadQRCode(img, param.busCode);
}






