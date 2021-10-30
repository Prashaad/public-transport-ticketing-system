async function SignIn(){
    var param = convertFormToJson($("#frmSignIn"));
    if(!param.username && !param.password){
        alert("Credentials cannot be empty!");
        return false;
    }

    try{ 
        var result = await postApiAjaxCall("Authentication",param) ;
        if(result!=null){
            //To-Do - Get the token by passing the userId
            result.token="3fa85f64-5717-4562-b3fc-2c963f66afa6";
            setLoggedInUserDetails(result);
            window.location.href ="./screens/home.html";
        }else{
            alert("Login Failed!");
        }     
    } catch(err) {
        console.log(err);
    }
}