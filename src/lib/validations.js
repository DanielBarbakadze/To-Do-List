function require(value){
    if(value.length > 0 ) {
        return true;
    }
    else return false;
}

function usernameValidation(value){
    /* იუზერნეიმი 4-დან 15 სიმბოლომდე, არ დაიწყებს _ ან . */
    /* იუზერნეიმში არ შეიძლება __ ან _. ან ._ ან .. */
    /* დაშვებული სიმბოლოები a-z-მდე და A-Z-მდე და 0-9-მდე */
    /* იუზერნეიმის ბოლოში არ შეიძლება _ ან .*/
    if (!/^(?=.{4,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(value)) {
        return true;
    }
    return false;
}

function fullnameValidation (value) {
    if (!/^(?=.{2,40}$)[A-Za-z]+/.test(value)) {
        return true;
    }
    return false;
}

function emailValidation (value) {
    if (!/\S+@\S+\.\S+/.test(value)){
        return true;
    }
    return false;
}

export default {
    require,
    usernameValidation,
    fullnameValidation,
    emailValidation
}