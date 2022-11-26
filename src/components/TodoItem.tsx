import { useState } from "react";

interface Props {
    text: string;
    id: number;
    onClick: (e: number)=>void;
}

const TodoItem = ({ onClick, text, id }:Props)=>{
    const [state, setState] = useState(false);

    const handleCheck = ()=>{
        setState(!state);
    }

    return(
        <li className="list-group-item d-flex bg-transparent align-items-center justify-content-center">
            <input
                className="form-check-input" 
                type="checkbox" 
                value="" 
                id="flexCheckIndeterminate"
                onClick={handleCheck}
            />
            <label 
                className={`mx-5 custom-color form-check-label ${state ? "text-decoration-line-through" : ""}`} 
                htmlFor="flexCheckIndeterminate"
            >
                {text}
            </label>
            <button
                className="btn btn-danger"
                type="button" 
                onClick={()=>onClick(id)}
            >
                remover
            </button>
        </li>
    );
}

export default TodoItem;