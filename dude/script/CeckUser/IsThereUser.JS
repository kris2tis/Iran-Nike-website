import user from "../usser.js";

export const IsThereUser = (ussername = "") =>{
    let isUder = false;
    
    user.forEach(user => {
        
        if (user.username == ussername) {
            isUder = true;
            return
        }
        
    });
    
    return isUder
}



export default IsThereUser ; 

