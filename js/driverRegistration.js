const fromId="#frmDriverRegistration";
async function SaveDriver(){
    var params = convertFormToJson($("#frmDriverRegistration"));
    params.id=parseInt(params.id); 
    if(!params.Fullname){
        alert("Please enter the full name to proceed!");
        return false;
    }

    if(!params.LicenseNo){
        alert("Please enter the License No to proceed!");
        return false;
    }
    if(!params.DateOfBirth){
        alert("Please aenter the Date of birth to proceed!");
        return false;
    }
    if(!params.ContactNo){
        alert("Please aenter the Contact Number to proceed!");
        return false;
    }
    params.Username	=params.Fullname; 
    params.	UserType=2;
    params.Password="123";
    params.DateOfBirth=moment(params.DateOfBirth).toDate();
    try{ 
        var result =await postApiAjaxCall("Driver",params) ; 
        if(result> 0){
            alert("Driver Saved Successfully!"); 
            window.location.href ="home.html";
        }
        
    } catch(err) {
       alert("Failed to Save!");
    }
}