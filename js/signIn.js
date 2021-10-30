async function SignIn(){
    
    var param = convertFormToJson($("#frmSignIn"));
    debugger
    if(!param.username && !param.password){
        alert("Credentials cannot be empty!");
        return false;
    }

    try{
        var result = await postApiAjaxCall("Authentication",param) ;

        let jsonstring = JSON.stringify({'token':"3fa85f64-5717-4562-b3fc-2c963f66afa6", "userid " : 1});
        setLocalStorage("userToken",jsonstring);

    } catch(err) {
        debugger
        console.log(err);
    }
}