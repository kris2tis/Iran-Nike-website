export let usser = localStorage.getItem("usser");

usser = usser ? JSON.parse(usser) : [];

export const adduser = (newuser)=>{
    usser.push(newuser);
    localStorage.setItem("usser" , JSON.stringify(usser));
}

export default usser ; 
