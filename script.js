function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += generateOTP();
	result += number();
	
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function phoneFormat(input) {//returns (###) ###-####
    input = input.replace(/\D/g,'').substring(0,10); //Strip everything but 1st 10 digits
    var size = input.length;
    if (size>0) {input="("+input}
    if (size>3) {input=input.slice(0,4)+") "+input.slice(4)}
    if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
	var phone_input = document.getElementById("phone");
	phone_input.addEventListener('input', () => {
		phone_input.checkValidity();
	  })

    return size;
}

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return phoneno;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}


function generateOTP() {
          
    // Declare a digits variable 
    // which stores all digits
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
     return OTP;
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 4)
		return "Name should be at least four characters.\n";	
	return name;
}


function validateEmail() {
	var email = valueOf("email");
	
	if (email.indexOf('@') == -1) 
		return "Email should be a valid address.\n";
	return email;	
}

function number(){
	 return phoneFormat(input);
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}
