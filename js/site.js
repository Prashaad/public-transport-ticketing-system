 const apiRootUrl="https://localhost:5001/api/";
//const apiRootUrl="http://transportmanagementsystem-env-1.eba-pg2bzzfa.us-east-1.elasticbeanstalk.com/api/";
function convertFormToJson($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
function clearForm(fromid){
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
        success : function(data) {     
            debugger         
            return {data : data , isSuccess:true};
        },
        error : function(request,error)
        {
            debugger
            return{data : request , isSuccess:false};
     }
    });
}
function  getApiAjaxCall(url,data=""){
  const apiUrl =apiRootUrl+ url;
  return $.ajax({
        type : 'GET',
        url : apiUrl,
        dataType:'json',
        contentType: "application/json",
        data : JSON.stringify( data),
        success : function(data) {              
            return {data : data , isSuccess:true};
        },
        error : function(request,error)
        {debugger
            return{data : request , isSuccess:false};
        }
    });
}
function setLocalStorage(key, value){
localStorage.setItem(`${key}`, value);
}
function getLocalStorage(key){
    return localStorage.getItem(key);
}
function removeLocalStorage(key){
    return localStorage.removeItem(key);
}

function getLoggedInUserId(){
    const jsonUerDetails =getLocalStorage("userToken");
    let userDetails;
    if(jsonUerDetails!=null && jsonUerDetails!=undefined){
        userDetails= JSON.parse(jsonUerDetails);
        userDetails.userid = parseInt(userDetails.userid);
    }else{
        userDetails={token : "", userid: 0};
    }
   return userDetails;
}
function setLoggedInUserDetails(userdetails){
    const jsonString =JSON.stringify({
        userid : parseInt(userdetails.userId),
        usertype : parseInt(userdetails.userType),
        username: userdetails.username,
        token:userdetails.token
       });
       setLocalStorage("userToken",jsonString);
}
