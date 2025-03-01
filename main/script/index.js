import header from "./utils/header.js";
import usserLogged from "./form/doesUsserLogged.js";
import quitAccount from "./utils/utils.js";
import footer from "./utils/footer.js";


header();
footer();
usserLogged()    


window.quitAccountUsser = quitAccount;

// Product Scrool
const scroolbar = document.getElementById('cnt-scrool-bar');

let DefaultTrasnformX = -109;

document.getElementById("next").addEventListener("click", next)
function next() {
    DefaultTrasnformX -= 316;
    TrasnformX(DefaultTrasnformX)
}

document.getElementById("prev").addEventListener("click", prev)
function prev() {
    DefaultTrasnformX += 316;
    TrasnformX(DefaultTrasnformX)
}

function TrasnformX(value) {
    scroolbar.style.transform = `translate3d(${value}px, 0px, 0px)`
}



