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
      setLocalStorage("userToken",jsonstring);

  } catch(err) {
      console.log(err);
  }
}
function goToSignIn(){ 
  $('#content').load("./screens/signIn.html");
}
// function goToSignIn(){

//   //Set key value pair to localstorage, this value can be only retrived after login into the system
//    setLocalStorage("userToken","3fa85f64-5717-4562-b3fc-2c963f66afa6");
//   //Get Value from localstorage
//   //var userToken= getLocalStorage("userToken");
// }