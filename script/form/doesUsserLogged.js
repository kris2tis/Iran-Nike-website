export function usserLogged() {
    document.addEventListener("DOMContentLoaded", () => {
        let usserLoggedIn = JSON.parse(
            localStorage.getItem("loged in")
        )?.username;
        const dynamicHeader = document.getElementById("dynamicHeaderContent");

        if (usserLoggedIn) {
            let cartProduct = JSON.parse(
                localStorage.getItem("loged in")
            )?.cart;

            dynamicHeader.insertAdjacentHTML(
                "beforeend",
                `<div class="cart basic-gray">
                <a href="${window.location.href == `https://kris2tis.github.io/Iran-Nike-website/html/store.html` ? `./cart.html` : `./html/cart.html` }" class="basic-flex">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>
                </a>
                <div class="count-of-prodict-cart basic-flex">${cartProduct.length}</div>
                </div>`
            );

            const contOfProductLength = document.querySelector(
                ".count-of-prodict-cart"
            );
            contOfProductLength.textContent = JSON.parse(
                localStorage.getItem("loged in")
            )?.cart.length;

            document.querySelectorAll(".sign-desktop").forEach((sign) => {
                sign.style.display = "none";
            });
            document.querySelector(".quit-account").style.display = "block";
            document.querySelector(".btns").style.gap = "0px";
        } else {
            dynamicHeader.insertAdjacentHTML(
                "beforeend",
                `<div class="signin-signup basic-gray">
                        <a href="${window.location.href == `https://kris2tis.github.io/Iran-Nike-website/index.html` ? `./html/login.html` : `./login.html` }" class="basic-flex">
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                            </svg>
                        </a>
                    </div>`
            );

            document.querySelectorAll(".sign-desktop").forEach((sign) => {
                sign.style.display = "block";
            });
            document.querySelector(".quit-account").style.display = "none";
            document.querySelector(".btns").style.gap = "10px";
        }
    });
}

export default usserLogged;

let getLocation = window.location.href;
console.log(getLocation);