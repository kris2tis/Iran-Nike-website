export function quitAccount (){
    localStorage.removeItem("loged in");
    window.location.reload();
}

export default quitAccount