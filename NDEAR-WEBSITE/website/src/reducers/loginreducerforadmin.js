let initialvalue = {}

export const loginreducerforadmin = (state = initialvalue , action)=>{

    console.log("reducer for loginschool = ", action.payload)
    switch(action.type){
        case "loginactionforadmin" : return action.payload
        default : return state
    }
}