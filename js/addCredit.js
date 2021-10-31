async function AddCredit(){
    var param = convertFormToJson($("#frmAddCredit"));

    var obj = {
        "tokenType": 1,
        "tokenPayment": param
    }

    if(!param.cardNumber || param.expiryDate || param.cvv || param.nameOnCard || param.amount){
        alert("Fields cannot be empty!");
        return false;
    }

    try{ 
        var result = await postApiAjaxCall("Token",param) ;
        debugger
        if(result!=null){
            alert("Amount Credited");
            window.location.href ="./screens/home.html"; 
        }else{
            alert("Transaction Failed!");
        }     
    } catch(err) {
        console.log(err);
    }
}