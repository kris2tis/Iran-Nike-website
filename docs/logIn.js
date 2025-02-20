import IsTherePassword from "../docs/IsTherePassword.js";
import LoginSestion from "../docs/LoginSestion.js";

const logIn_btn = document.getElementById("logIn-btn");
logIn_btn.addEventListener('click' , ()=>{
    
    let username = document.getElementById("log-username").value;
    let password = document.getElementById("log-password").value;
    
    if (IsTherePassword(username,password)) {
        alert(`خوش برگشتی ${username}`);
        LoginSestion(username)
        location.href = "index.html"
    }
    else{
        alert("حسابی با این نام کاربری پیدا نشد ");
    }
})

const inputs = document.querySelectorAll(".log-input");

function red (e){
    let input = e.target;
    
    if (input.value == "") {
        input.classList.add("red");
    }
    else{
        input.classList.remove("red");
    }
    
}

inputs.forEach(input => {
    input.addEventListener('blur' , red)
});


