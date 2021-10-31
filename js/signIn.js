async function SignIn(){
    var param = convertFormToJson($("#frmSignIn"));
    if(!param.username && !param.password){
        alert("Credentials cannot be empty!");
        return false;
    }

    try{ 
        var result = await postApiAjaxCall("Authentication",param) ;
        debugger
        if(result!=null){
            var isTokenExist=false;
            debugger
            if(result.userType ==1){
                var token = await getApiAjaxCall("GetTokenByUser"+"/"+result.userId);
                result.token = token.tokenId;
                if( result?.token!=null &&  result?.token!=""){
                    isTokenExist=true;
                }
            }else{
                isTokenExist=true;
            }
              
                
            if(!isTokenExist){
                alert("You have no Active Token. Please Contact Support!");
            }
            else{
                setLoggedInUserDetails(result);
                window.location.href ="./screens/home.html";  
            }
        }else{
            alert("Login Failed!");
        }     
    } catch(err) {
        console.log(err);
    }
}