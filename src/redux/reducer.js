import {CHANGE_INPUT } from './action'

const initialVaue = {
    defaultValue : 'default'
}

function changeReducer(state = initialVaue,action) {  
    switch(action.type){
        case CHANGE_INPUT:
            return Object.assign({},state,{
                defaultValue: action.value
            })
        default: return state
         
    }
}   
export default changeReducer