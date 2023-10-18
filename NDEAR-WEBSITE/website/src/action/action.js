export const loginactionforadmin = (user)=>{
    return {
        type : 'loginactionforadmin',
        payload : user
    }
}

export const signupactionforadmin = (signupuser)=>{
    return {
        type : 'signupactionforadmin',
        payload : signupuser
    }
}

export const signupactionforschool = (schoolform)=>{
    return {
        type : 'signupactionforschool',
        payload : schoolform
    }
}

export const loginactionforschool = (schoolform)=>{
    return {
        type : 'loginactionforschool',
        payload : schoolform
    }
}

export const ndearactionforattendence = (schoolform)=>{
    return {
        type : 'ndearactionforattendence',
        payload : schoolform
    }
}




