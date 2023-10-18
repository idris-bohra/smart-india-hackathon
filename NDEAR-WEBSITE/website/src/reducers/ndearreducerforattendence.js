let initialvalue = {}

export const ndearreducerforattendence = (state = initialvalue , action)=>{

    console.log("reducer for loginschool = ", action.payload)
    switch(action.type){
        case "ndearactionforattendence" : return action.payload
        default : return state
    }
}