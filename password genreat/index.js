const input = document.getElementById("input");
const passwordOutPut = document.getElementById("password");
function generatePassword() {
    // h$w%uOdg#Jw3100m
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 15;
        var password = input.value;
        var flage = true

        if(password.length < passwordLength){
            alert("Password should be at least 15 characters");
            return;
        }else{
            
            for (var i = 0; i < passwordLength; i++) {

                for(var j = 0; j < chars.length; j++) {
    
                    if(password[i] == chars[j]) {
                        console.log(password[i]);
                        // alert("Password Generated");   
                        // flage = false
                        passwordOutPut.innerHTML = 'Password Generated'
                        break;
                    }

                    if(flage == true){
                        console.log(password[i]);
                        passwordOutPut.innerHTML = 'Password Not Generated'
                        break;
                    }
                }
            }
    
    
        }
                

}