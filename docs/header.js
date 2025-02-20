export function header() {
    const open_mneu = document.querySelector('.mobile-menu ');
    const containerMenu = document.querySelector('#menu');
    const close_menu = document.querySelector('#close');
    const overly = document.querySelector('.overley');
    const dropdown = document.querySelectorAll('.p-title-category');
    //Mobile Menu

    open_mneu.addEventListener('click' , ()=>{
        containerMenu.classList.add('show');
        document.body.classList.add('disable_scrool')
        overly.classList.add('show-overly')
    })

    close_menu.addEventListener('click' , ()=>{
        containerMenu.classList.remove('show');
        document.body.classList.remove('disable_scrool')
        overly.classList.remove('show-overly')
    })
}

export default header