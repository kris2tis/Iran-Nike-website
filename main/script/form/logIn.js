import IsTherePassword from "./IsTherePassword.js";
import LoginSestion from "./LoginSestion.js";

const logIn_btn = document.getElementById("logIn-btn");
logIn_btn.addEventListener('click' , ()=>{
    
    let username = document.getElementById("log-username").value;
    let password = document.getElementById("log-password").value;
    let users = JSON.parse(localStorage.getItem("usser")) || {};
    let userCart = [];

    let existingUser = Object.values(users).find(user => user.username  === username)
    userCart = existingUser?.cart || [];

    if (IsTherePassword(username,password)) {
        alert(`خوش برگشتی ${username}`);
        LoginSestion(username,userCart)
        location.href = "/main/html/index.html"
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