let loggedUsser = JSON.parse(localStorage.getItem("loged in")) || {};

export let LoginSestion = (usser ,cart)=>{
    loggedUsser.username = usser;
    loggedUsser.cart = cart;
    LoginSestion = localStorage.setItem("loged in" , JSON.stringify(loggedUsser));
}

export default LoginSestion ; 