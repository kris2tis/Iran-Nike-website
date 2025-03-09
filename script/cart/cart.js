import header from "../utils/header.js";
import usserLogged from "../form/doesUsserLogged.js";
import quitAccount from "../utils/utils.js";
import footer from "../utils/footer.js";

header();
usserLogged();
footer();
window.quitAccountUsser = quitAccount;

document.addEventListener("DOMContentLoaded", () => { 
    let prductsContainer = document.getElementById("prducts-container");
    // گرفتن محصولات اضافه شده به اوکال استوریج و سبد خرید برای اضافه کردن آن به سبد خرید
    let getItemFromLS = JSON.parse(localStorage.getItem("cartProducts"));
    let sumTotal = 0;
    getItemFromLS.forEach(product => {
        let toArry = product.split(",");
        // محاسبه جمع کل سبد خرید
        sumTotal += Number(toArry[4]);
        // نمایش محصولات در صفحه سبد خرید
        prductsContainer.innerHTML += createProduct(toArry);
    });
    // صدا زدن تابع محاسبات
    Calculations(sumTotal);

    // عملیات پاک کردن محصول
    prductsContainer.addEventListener("click", (event) => {
        let getItem = event.target;
        // جلوگیری از رسیدن رویداد کلیک به والدان
        event.stopPropagation();
        // یافتن دکمه پاک کردن محصول با اسم کلاس
        if (getItem.classList.contains("prodocut-delete-icon")) {
            getItemFromLS.forEach((product, index) => {
                // تدبیل کردن لیست محصولات در لوکال استوریج به آرایه
                let toArry = product.split(",");
                // شرط پاک کردن محصول 
                // اگر آیدی این محصولی که کلیک شده در آرایه محصولات لوکال استوریج بود این محصول پاک شود 
                if (Number(toArry[0]) == Number(findId(event.target))) {
                    // پاک کردن محصول با خانه آرایه که روش کلیک شده
                    getItemFromLS.splice(index, 1);
                    // بروز رسانی لوکال استوریج محصولات سبد خرید
                    localStorage.setItem("cartProducts", JSON.stringify(getItemFromLS));
                    window.location.reload();
                }
            });
        }
    })
})

// تابع ساخت کانتانر محصول جدید 
function createProduct(product) {
    return  ` <div class="cart basic-flex">
                                <div>
                                    <img
                                        src="${product[1]}"
                                        alt="کفش نایک"
                                    />
                                </div>
                                <div class="info-product column-flex">
                                    <h5>${product[2]}</h5>
                                    <span>${product[3]}</span>
                                    <span>شناسه : ${product[0]}</span>
                                    <div class="prodocut-delete-icon margin-20">
                                        <svg width="17" height="17" viewBox="0 0 2048 2048">
                                            <path class="prodocut-delete-icon" fill="#000"
                                                d="M1792 384h-128v1472q0 40-15 75t-41 61t-61 41t-75 15H448q-40 0-75-15t-61-41t-41-61t-15-75V384H128V256h512V128q0-27 10-50t27-40t41-28t50-10h384q27 0 50 10t40 27t28 41t10 50v128h512zM768 256h384V128H768zm768 128H384v1472q0 26 19 45t45 19h1024q26 0 45-19t19-45zM768 1664H640V640h128zm256 0H896V640h128zm256 0h-128V640h128z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>`
}

// تابع یافتن آیدی کانتاینر کلیک شده 
function findId(element) {
    let getID = element.parentElement.parentElement.previousElementSibling.innerHTML;
    getID = getID.split(":");
    
    return getID[1]
}

let totalSum = document.getElementById("total-sum");
let TotalWithDiscount = document.getElementById("Total-with-discount");
let countPeresrnt = document.getElementById("countOfPeresrnt");
// تابع محاسبات قیمت محصولات
function Calculations(value) {
    totalSum.textContent = value + "$";    

    let randNumber = (Math.floor(Math.random() * 15));
    let persent = (randNumber * value) / 100;
    
    TotalWithDiscount.textContent = Math.floor(value - persent) + "$";
    countPeresrnt.textContent += " " + randNumber + "%";
}