// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
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