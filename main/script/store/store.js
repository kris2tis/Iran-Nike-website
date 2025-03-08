import products from "./product.js";
import header from "../utils/header.js";
import usserLogged from "../form/doesUsserLogged.js";
import productCart from "./cratProdcut.js";
import quitAccount from "../utils/utils.js";
import footer from "../utils/footer.js";

header();
footer();
usserLogged()    

window.quitAccountUsser = quitAccount;

const count_product = document.getElementById("count-product");
const count_product_m = document.querySelector(".co-productcount-product");

// تعداد محصولات برای کامپیوتر
count_product.textContent = products.length
// تعداد محصولات برای موبایل
count_product_m.textContent = `${products.length} محصول`

// گرفتن دکمه های مرتب سازی
let cheap_Btn = document.querySelectorAll(".cheap");
let expensive_Bth = document.querySelectorAll(".expensive");
let new_btn = document.querySelectorAll(".basic");

// گرفتن دکمه باز / بسته شدن منو فیلتر در کامپیتور
const btn_Filter = document.querySelector(".cnt-filter-by");
const cnt_Filter_Button = document.querySelector(".filter-btn-content");
const arrow_Icon_Filter = document.querySelector(".rotate-arrow-icon-filter");
// کد منو کافیلتر در کامپیتور
btn_Filter.addEventListener("click", () => {
    cnt_Filter_Button.classList.toggle("show-Container-Filter");
    arrow_Icon_Filter.classList.toggle("filter-rotate-arrow")
})

// گرفتن دکمه باز / بسته شدن منو فیلتر در موبایل
const open_Filter_Overley = document.querySelector(".filter-btn-mobile");
const close_Filter_Overley = document.getElementById("close-overley");
const containr_filter_overley = document.querySelector(".container-overley-filter");
// کد منو فیلتر در موبایل
open_Filter_Overley.addEventListener("click", () => {
    containr_filter_overley.classList.add("show-oveley-filter");
    document.body.classList.add("disable-s-e");
})
close_Filter_Overley.addEventListener("click", () => {
    containr_filter_overley.classList.remove("show-oveley-filter");
    document.body.classList.remove("disable-s-e");
})

// اجرا کانتاینر محصولات در صورت لود کامل صفحه
document.addEventListener("DOMContentLoaded", () => {
    let stateProduct = []

    let usserLoggedIn = JSON.parse(localStorage.getItem("loged in"))?.username;
    const productContainer = document.getElementById("Produts");

    // تابع ساخت محصولات
    function renderProdcut(product) {
        // خالی کردن کانتاینر محصولات در صورت صدا زدن تابع با ترتیب جدید 
        productContainer.innerHTML = "";
        product.forEach(prdcts => {
            productContainer.innerHTML += `
                <div class="product-cnt column-flex">
                    <div>
                        <img src="${prdcts.imageUrl}" alt="">
                    </div>
                <div class="cnt-data-product column-flex right w-100margin-30">
                    <div class="titile-cat">
                        <span>${prdcts.slogan}</span>
                        <h4>Nike${prdcts.name}</h4>
                        <p>${prdcts.cat}</p>
                </div>
                <div class="container-price-add-tcart w-100 basic-flex margin-20">
                    <div class="price-discount">
                        <h4>${prdcts.price}$</h4>
                        <span></span>
                </div>
    
                <div>
                    <button data-DT="${[prdcts.id, prdcts.imageUrl, prdcts.name, prdcts.cat , prdcts.price]}" class="addTocart btn">${usserLoggedIn ? "افزون به سبد" : "ورود برای خرید"}</button>
                </div>
                </div>
                </div>
                `
        });
        
        document.querySelectorAll(".addTocart").forEach(addBtn => {
            addBtn.addEventListener("click", (e) => {
                if (usserLoggedIn) {
                    // گرغتن اطلاعات محصول کلیک شده
                    let getDT = e.target.getAttribute("data-DT");

                    // اضافه کردن محصول مورد نظر به آرایه 
                    productCart(getDT);
                }
                else {
                    // منتقل کردن کاربر اگر وارد نشده بود
                    window.location.href = "login.html"
                }
            })
        });
    }

    // گپی گرفتن از آرایه محصولات برای نامرتب نشدن آرایه پروداکت
    stateProduct = [...products];
    // اجرا تابع ساخت محصول با ترتیب ساده
    renderProdcut(stateProduct);

    // مرتب کردن محصولات بر اساس جدید یا همان ساده
    new_btn.forEach(newBtn => {
        newBtn.addEventListener("click", () => {
            let newP = stateProduct.sort((a, b) => Number(a.date) - Number(b.date))
            renderProdcut(newP);
        })
    });

    // مرتب کردن محصولات بر اساس گران ترین 
    expensive_Bth.forEach(expensive => {
        expensive.addEventListener("click", () => {
            let higth_low = stateProduct.sort((a, b) => Number(b.price) - Number(a.price));
            renderProdcut(higth_low);
        })
    });

    // مرتب کردن محصولات بر اساس ارزان ترین
    cheap_Btn.forEach(cheap => {
        cheap.addEventListener("click", () => {
            let low_hight = stateProduct.sort((a, b) => Number(a.price) - Number(b.price));
            renderProdcut(low_hight);
        })
    });
})
