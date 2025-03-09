import { usser, adduser } from "../utils/usser.js";
import isThereUser from "../form/IsThereUser.js";
import LoginSestion from "../form/LoginSestion.js";

// فرم ثبت نام قدم به قدم 
let step = 1;
let checCode, checmail, checkPass, checkFL = false;

function showstep(step) {
    document.querySelectorAll(".step").forEach(step => {
        step.style.display = "none";
    });
    document.getElementById(`step${step}`).style.display = "block";
}
showstep(step)

function nextstep(nstep) {
    if (checmail) {
        step = nstep;
        showstep(step);
        sendmailto();
    }
}

window.nextstep = nextstep;

// پنهان کردن اینپوت پسفورد
const hide_password = document.getElementById("hide-password");
const hide_password_icon = document.getElementById("hide-password-icon");
const input_password = document.getElementById("password");

let StateIcon = false;

hide_password.addEventListener('click', () => {
    StateIcon = !StateIcon;
    if (StateIcon) {
        hide_password_icon.src = "../assest/picture/eye-off.png";
        input_password.setAttribute('type', 'text')
    }
    else {
        hide_password_icon.src = "../assest/picture/eye-on.png";
        input_password.setAttribute("type", "password")
    }

})


// ایجاد قوانین اینپوت ها
const email = document.getElementById('Email');
const span = document.querySelector('.span-con')
const spans = document.querySelectorAll('.span-conditaion');
const input_email_conditions = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let Input_pass_conditions = /^(?=.*[A-Z])(?=.*[0-9]).*$/;

email.addEventListener('blur', () => {
    if (input_email_conditions.test(email.value) == false) {
        span.textContent = "ایمیل نامعتبر است";
        span.classList.add("red");
        email.style.borderColor = 'red';
        checmail = false;
    }
    else {
        span.textContent = "";
        span.classList.remove("red");
        email.style.borderColor = '#111111';
        checmail = true;
    }
})


input_password.addEventListener('blur', () => {

    if (input_password.value.length < 8) {
        spans[0].style.color = "red";
        checkPass = false;
    }
    else {
        spans[0].style.color = "#111111";
        checkPass = true;
    }
    if (Input_pass_conditions.test(input_password.value) == false) {
        spans[1].style.color = "red";
        checkPass = false;
    }
    else {
        spans[1].style.color = "#111111";
        checkPass = true;
    }

    if (!checkPass) {
        document.querySelector('.cnt-pass').classList.add('red');
    }
    else {
        document.querySelector('.cnt-pass').classList.remove('red');
    }
})

const mail_txt = document.querySelector(".sendmail-txt");
mail_txt.textContent = email.value;



// تابع ارسال ایمیل به گاربر
const sendemail = document.getElementById('sendemail');
let verificationCode;

function sendmailto() {

    verificationCode = Math.floor(100000 + Math.random() * 900000);
    var params = {
        email: document.getElementById('Email').value,
        message: verificationCode
    };

    const serviceId = "service_xe8we8k";
    const templateId = "template_grl2pja";

    emailjs.send(serviceId, templateId, params)
        .then((res) => {
            alert('کد برای شما ارسال شد');
        })
        .catch((err) => console.log(err));
}

// چک کردن کد نوشته شده
const input_code = document.getElementById("code");

input_code.addEventListener('blur', () => {

    if (verificationCode == Number(input_code.value)) {
        checCode = true;
    }
    else {
        checCode = false;
    }

})

// نغییر رنگ اینپوت در صورت بروز خطا
const inputs = document.querySelectorAll('input');

function red(event) {
    const input = event.target;

    if (input.value == "") {
        input.classList.add("red");
    }
    else {
        input.classList.remove("red");
    }
}

inputs.forEach(input => {
    input.addEventListener('blur', red)
});

// چک کردن اینپوت نام و نام خانوادگی در صورت بروز خطا
const fNamelName = document.querySelectorAll(".last_first_usser");

function checkName(event) {
    const input = event.target;
    const value = input.value.trim();

    if (value == "") {
        checkFL = false;
    }
    else {
        checkFL = true;
    }
}

fNamelName.forEach(inp => {
    inp.addEventListener('blur', checkName)
});

// ثبت نام کاربر
const from = document.getElementById("sign-form");

from.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checCode && checmail && checkPass && checkFL) {

        const username = document.getElementById("userName").value;
        const password = document.getElementById("password").value;
        let users = JSON.parse(localStorage.getItem("usser")) || {};
        let userCart = [];

        let existingUser = Object.values(users).find(user => user.username === username)
        userCart = existingUser?.cart || [];

        if (!isThereUser(username)) {
            adduser({ username, password, cart: userCart });
            alert("خوش آمدید");
            LoginSestion(username, userCart);
            location.href = "../index.html"
        }
        else {
            alert("قبلا یک کاربر با این اسم ثبت نام کرده")
        }
    }

    else {
        alert("نتوانستید ثبت نام کنید");
    }
})
