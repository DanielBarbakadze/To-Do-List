export function require(value) {
    if (value === undefined)
        return false;
    else if (value.length >= 3)
        return true;
}
// export function name(value){
//     if(value.length > 2) return true;
//     else return false;
// }
export function usernameValidation(value) {
    /* იუზერნეიმი 4-დან 15 სიმბოლომდე, არ დაიწყებს _ ან . */
    /* იუზერნეიმში არ შეიძლება __ ან _. ან ._ ან .. */
    /* დაშვებული სიმბოლოები a-z-მდე და A-Z-მდე და 0-9-მდე */
    /* იუზერნეიმის ბოლოში არ შეიძლება _ ან .*/
    if (!/^(?=.{4,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(value)) {
        return "invalid username";
    }
    return true;
}
export function emailValidation(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
        return "please input email correctly";
    }
    return true;
}
export function nameValidation(value) {
    if (!/^(?=.{2,200}$)[A-Za-z]+/.test(value)) {
        return "invalid name";
    }
    return true;
}
export function dateValidation(value) {
    if (value <= "2001-12-31") {
        return true;
    }
    return "you should be +18 to register";
}

/* მინ 8 სიმბოლო, მინ ერთი ასო, მინ ერთი რიცხვი */
export function passwordValidation(value){
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(value)){
        return "easy pass to be guessed";
    }
    else return true;
}
