export const footer = () => {
    // Drop Down 
    const dropdown = document.querySelectorAll(".p-title-category")

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 580) {
            runDropDown();
        }

    })

    if (window.innerWidth <= 580) {
        runDropDown();
    }


    function runDropDown() {
        dropdown.forEach(Item => {
            Item.addEventListener('click', () => {
                let NextItem = Item.nextElementSibling;
                let currerntDisplay = window.getComputedStyle(NextItem).display;

                if (currerntDisplay == 'none') {
                    NextItem.style.display = 'flex'
                }
                else {
                    NextItem.style.display = 'none'
                }
            })
        });
    }


    // Accordion menu 
    document.querySelectorAll('.title-f').forEach(header => {
        header.addEventListener('click', () => {

            let getH = header.nextElementSibling;
            let arrowI = header.querySelector('.rotate-arrow-icon');
            if (getH.classList.contains("active")) {
                getH.style.maxHeight = null;
                getH.classList.remove("active");
                arrowI.style.transform = "rotate(90deg)";
            }
            else {
                getH.style.maxHeight = getH.scrollHeight + "px";
                getH.classList.add("active");
                arrowI.style.transform = "rotate(270deg)";
            }

        })

    })
}
export default footer