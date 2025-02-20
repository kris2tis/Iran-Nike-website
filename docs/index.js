import header from "./header.js";

header();

// Product Scrool
const scroolbar = document.getElementById('cnt-scrool-bar');

let DefaultTrasnformX = -109;

document.getElementById("next").addEventListener("click" , next)
function next (){
    DefaultTrasnformX -= 316 ; 
    TrasnformX(DefaultTrasnformX)
}

document.getElementById("prev").addEventListener("click" , prev)
function prev(){
    DefaultTrasnformX += 316 ; 
    TrasnformX(DefaultTrasnformX)
}

function TrasnformX (value){
    scroolbar.style.transform =`translate3d(${value}px, 0px, 0px)`
}

// Drop Down 
const dropdown = document.querySelectorAll(".p-title-category")

window.addEventListener('resize' , ()=>{
    if (window.innerWidth <= 580 ) {
        runDropDown();
    }
    
})

if ( window.innerWidth <= 580 ){
     runDropDown();
}


function runDropDown (){
    dropdown.forEach(Item => {
        Item.addEventListener('click' , ()=>{
        let NextItem = Item.nextElementSibling;
        let currerntDisplay = window.getComputedStyle(NextItem).display;
        
        if (currerntDisplay == 'none') {
            NextItem.style.display = 'flex'            
        }
        else{
            NextItem.style.display = 'none'
        }
    })
    });
}


// Accordion menu 
document.querySelectorAll('.title-f').forEach(header =>{
    header.addEventListener('click' , ()=>{
      
        let getH = header.nextElementSibling;
        let arrowI = header.querySelector('.rotate-arrow-icon');
        if(getH.classList.contains("active")){
            getH.style.maxHeight = null;
            getH.classList.remove("active");
            arrowI.style.transform = "rotate(90deg)";
        }
        else{
            getH.style.maxHeight = getH.scrollHeight + "px";
            getH.classList.add("active");
            arrowI.style.transform = "rotate(270deg)";
        }
        
    })
    
})


// Log in usser