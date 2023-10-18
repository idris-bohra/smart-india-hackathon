let initialvalue = {}

export const loginreducerforschool = (state = initialvalue , action)=>{

    console.log("reducer = ", action.payload)
    switch(action.type){
        case "loginactionforschool" : return action.payload
        default : return state
    }
}