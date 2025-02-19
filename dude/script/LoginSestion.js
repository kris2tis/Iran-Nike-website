export let LoginSestion = (user)=>{
    LoginSestion = localStorage.setItem("loged in" , JSON.stringify({username : user}));
}

export default LoginSestion ; 

