import {loginreducerforadmin} from "./loginreducerforadmin" 
import {signupreducerforadmin} from "./signupreducerforadmin" 
// import {signupreducerforschool} from "./signupreducerforschool" 
import {loginreducerforschool} from "./loginreducerforschool" 
import {ndearreducerforattendence} from "./ndearreducerforattendence" 


import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    loginreducerforadmin, signupreducerforadmin,loginreducerforschool,ndearreducerforattendence
    // logoutreducer  // when we dispatch any dispatch function then it dispatched to every function
})