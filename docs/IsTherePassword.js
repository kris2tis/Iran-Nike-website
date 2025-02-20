import user from "./usser.js";

export const IsTherePassword = (ussername = "" , passwword = "") =>{
    let isUder = false;
    user.forEach(userr => {
        if (userr.username == ussername && userr.password == passwword) {
            isUder = true;
        }
    });
    return isUder
}

export default IsTherePassword ; 
