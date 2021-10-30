function goToSignUp(){ 
  $('#content').load("./screens/signUp.html");
}

async function SignIn(){
  debugger
  var param = convertFormToJson($("#frmSignUp"));

  if(!param.username || !param.email || !param.password || !param.rePassword){
    alert("Fields cannot be empty!");
  }

  if(!param.password === !param.rePassword){
      alert("Missmatch between the Password and Confirm Password!");
      return false;
  }

  try{
      var result = await postApiAjaxCall("Authentication",param) ;

      let jsonstring = JSON.stringify({'token':"3fa85f64-5717-4562-b3fc-2c963f66afa6", "userid " : 1});
      setLocaStorage("userToken",jsonstring);

  } catch(err) {
      console.log(err);
  }
}