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

async function SaveBus(){
    var param = convertFormToJson($("#frmBusRegistration"));

    $('#preview-qecode').html("");
    if(param.busCode){
        $('#preview-qecode').qrcode(param.busCode);
    }else{
        alert("Please provide a busCode !");
        return false;
    }
    if(!param.numberOfSeats){
        alert("Please add no of seeats to proceed!");
        return false;
    }

    var canvas = $('#preview-qecode canvas');
    var img = canvas.get(0).toDataURL("image/png");
    param.qrcode =img.replace("image/png", "" ).replace("data:;base64,","");
    
    downloadQRCode(img, param.busCode);
    try{
        param.id=parseInt( param.id);
        param.mnufacturerYear=parseInt( param.mnufacturerYear);
        param.numberOfSeats=parseInt( param.numberOfSeats);
        var result =await postApiAjaxCall("Bus",param) ; 
        if(result> 0){
            alert("Bus Saved Successfully!");
            window.location.href ="home.html";
        }    
    } catch(err) {
       alert("Failed to Save!");
    }
}






