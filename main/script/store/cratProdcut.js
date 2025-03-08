let productsToCart = []
export let productCart = (product) => {
    // گرفتن آرایه محصولات سبد خرید و جلوگیری از پاک شدن این اصلاعات
    let getCartProducts = JSON.parse(localStorage.getItem("cartProducts")) || []
    // اضافه کردن اطلاعات محصول جدید به آرایه
    productsToCart.push(product);
    // بروز رسانی آرایه با محصول جدید و ذخیره کردن در لوکال استوریج
    localStorage.setItem("cartProducts", JSON.stringify(productsToCart))
}

export default productCart;