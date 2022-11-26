import { useReducer } from "react";

type TodoStateProps = {
    id: number;
    text: string;
}

type TodoActionProps = {
    type: string;
    payload?: any; 
}

const initialState:TodoStateProps[] = []

const reducer = (state: TodoStateProps[], action: TodoActionProps)=>{
    switch(action.type){
        case "ADD": 
            return [ ...state,  {
                id: action.payload.id,
                text: action.payload.text
            }]
        break;
        case "REMOVE":
            const tmpState:TodoStateProps[] = [...state];

            let newState: TodoStateProps[];
    
            newState = tmpState.filter( item => item.id !== action.payload.id);
            
            return newState;
        break;
        default:
            return state;
        break;
    }
}

export const useTodo = ()=>{
    return useReducer(reducer, initialState);
}