import products from "./product.js";
import header from "./header.js";

header();

const Produts = document.querySelector(".products-container");
const count_product = document.getElementById("count-product");
const count_product_m = document.querySelector(".co-productcount-product");

// count of product
count_product.textContent = products.length

count_product_m .textContent =  `${products.length} محصول`
// Product Filter 
document.addEventListener('DOMContentLoaded' , show_Product)
const basic_Filter = document.querySelectorAll(".basic");
basic_Filter.forEach(basic => {
    basic.addEventListener('click' , show_Product);
});

const expensive_Bth = document.querySelectorAll(".expensive");
const cheap_Btn = document.querySelectorAll(".cheap");

expensive_Bth.forEach(expensive => {
    expensive.addEventListener('click' , expensiveHandler)
});

cheap_Btn.forEach(cheap => {
    cheap.addEventListener("click" , cheapHandler)
});

function show_Product (){
    products.sort((a,b) => Number(a.date) - Number(b.date))

    Produts.innerHTML = "";
    products.forEach(product => {
         Produts.innerHTML += createProduct(product);
    });
}

function expensiveHandler() {
    let higth_low = products.sort((a , b) => Number(b.price) - Number(a.price));

    Produts.innerHTML = "";
    higth_low.forEach(product => {
        Produts.innerHTML += createProduct(product);
    });

}

function cheapHandler (){
    let low_hight = products.sort((a , b) => Number(a.price) - Number(b.price));

    Produts.innerHTML = "";
    low_hight.forEach(product => {
        Produts.innerHTML += createProduct(product);
    });
}


function createProduct(product) {
   return  `<div class="product-cnt column-flex">
                            <div>
                                <img src="${product.imageUrl}" alt="">
                            </div>
                            <div class="cnt-data-product column-flex right w-100
                            margin-30">
                                <div class="titile-cat">
                                    <span>${product.slogan}</span>
                                    <h4>Nike${product.name}</h4>
                                    <p>${product.cat}</p>
                                </div>
                                <div class="price-discount margin-20">
                                    <h4>${product.price}$</h4>
                                    <span></span>
                                </div>
                            </div>
                        </div>`  
}


const btn_Filter = document.querySelector(".cnt-filter-by");
const cnt_Filter_Button = document.querySelector(".filter-btn-content");
const arrow_Icon_Filter = document.querySelector(".rotate-arrow-icon-filter");

btn_Filter.addEventListener("click" , ()=>{
    cnt_Filter_Button.classList.toggle("show-Container-Filter");
    arrow_Icon_Filter.classList.toggle("filter-rotate-arrow")
})


const open_Filter_Overley = document.querySelector(".filter-btn-mobile");
const close_Filter_Overley = document.getElementById("close-overley");
const containr_filter_overley = document.querySelector(".container-overley-filter");


open_Filter_Overley.addEventListener("click" , ()=>{
    containr_filter_overley.classList.add("show-oveley-filter");
    document.body.classList.add("disable-s-e");
})

close_Filter_Overley.addEventListener("click" , ()=>{
    containr_filter_overley.classList.remove("show-oveley-filter");
    document.body.classList.remove("disable-s-e");
})



