import user from "../utils/usser.js";

export const IsTherePassword = (ussername = "", passwword = "") => {
    let isUder = false;
    console.log(user);
    user.forEach(userr => {
        if (userr.usser.username == ussername && userr.usser.password == passwword) {
            isUder = true;
        }
    });
    return isUder
}

export default IsTherePassword;

