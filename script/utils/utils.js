export function quitAccount (){
    localStorage.removeItem("loged in");
    window.location.reload();
    window.location.href = "/main/index.html";
}

export default quitAccount