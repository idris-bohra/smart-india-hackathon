let initialvalue = {}

export const signupreducerforadmin = (state = initialvalue , action)=>{

    console.log(action.payload)
    switch(action.type){
        case "signupactionforadmin" : return action.payload
        default : return state
    }
}