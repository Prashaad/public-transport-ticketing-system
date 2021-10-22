function SaveDriver(){
    var param = convertFormToJson($("#frmDriverRegistration"));

    if(!param.fullname){
        alert("Please enter the full name to proceed!");
        return false;
    }

    if(!param.licenseNo){
        alert("Please enter the License No to proceed!");
        return false;
    }
    if(!param.dob){
        alert("Please aenter the Date of birth to proceed!");
        return false;
    }
    if(!param.contactNo){
        alert("Please aenter the Contact Number to proceed!");
        return false;
    }
    console.log(param);
}