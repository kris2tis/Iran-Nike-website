export function header() {
    const open_mneu = document.querySelector('.mobile-menu');
    const containerMenu = document.querySelector('#menu');
    const close_menu = document.querySelector('#close');
    const overly = document.querySelector('.overley');
    const dropdown = document.querySelectorAll('.p-title-category');

    //منو موبایل
    open_mneu.addEventListener('click', (event) => {
        containerMenu.classList.add('show');
        document.body.classList.add('disable_scrool');
        overly.classList.add('show-overly');
        
        // جلوگیری از رسیدن رویداد به داکیومنت 
        event.stopPropagation();
    })

    containerMenu.addEventListener("click", (event) => {
        // جلوگیری از رسیدن رویداد به داکیومنت 
        event.stopPropagation();
    })

    close_menu.addEventListener('click', closeMenu)

    function closeMenu() {
        containerMenu.classList.remove('show');
        document.body.classList.remove('disable_scrool');
        overly.classList.remove('show-overly');
    }

    // اگر منو باز بود و کاربر بیرون از کانتاینر منو کلیک کرد منو بسته بشه
    document.addEventListener("click", (event) => { 
        let targetElement = event.target;
        if (!(targetElement.classList.contains("mobile-menu-offic"))) {
            closeMenu();
        }
    })
}

export default header