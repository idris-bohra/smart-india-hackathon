let initialvalue = {}

export const signupreducerforschool = (state = initialvalue , action)=>{

    console.log(action.payload)
    switch(action.type){
        case "signupactionforschool" : return action.payload
        default : return state
    }
}