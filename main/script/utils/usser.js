export let usser = localStorage.getItem("usser");

usser = usser ? JSON.parse(usser) : [];

export const adduser = (newuser,cart)=>{
    usser.push({usser : newuser , ucart : cart});
    localStorage.setItem("usser" , JSON.stringify(usser));
}

export default usser ; 
