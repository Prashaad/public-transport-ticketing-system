const apiRootUrl="http://transportmanagementsystem-env-1.eba-pg2bzzfa.us-east-1.elasticbeanstalk.com/api/";
//"";
function convertFormToJson($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function downloadQRCode(image , filenameWithoutExtention){
     var link = document.createElement('a');
    link.download = `bus-qrcode-${filenameWithoutExtention}.png`;
    link.href = image.replace("image/png", "image/octet-stream" ); 
    link.click();
}

function  postApiAjaxCall(url,data){
    const apiUrl =apiRootUrl+ url;
  return  $.ajax({
        type : 'POST',
        url : apiUrl,
        dataType:'json',
        contentType: "application/json",
        data : JSON.stringify( data),
        // ,
        // success : function(data) {              
        //     return {data : data , isSuccess:true};
        // },
        // error : function(request,error)
        // {
        //     return{data : request , isSuccess:false};
        // }
    });
}