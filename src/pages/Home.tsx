import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useTodo } from "../reducers/todos";

const Home = ()=>{
    const [ state, dispatch ] = useTodo();
    const [ text, setText ] = useState("");
    const [ listTodo, setListTodo ] = useState(state);
    
    function handleAddTodo(){
        dispatch({ type: "ADD", payload: { id: state.length + 1, text: text } });

        setText("");
    }

    function handleRemoveElement(e: number){
        dispatch({ type: "REMOVE", payload:{ id: e }});
    }

    useEffect(()=>{
        setListTodo(state);
    },[state]);

    window.onkeydown = function(e){
        if(e.keyCode === 13 && text !== ""){
            handleAddTodo();
        }
    }

    return(
        <main className="container text-center py-3">
            <h1 className="mb-4 text-uppercase fs-1 fw-bold custom-color">Lista de To-Do</h1>
            <section className="container text-center">
                <div className="input-group align-items-center justify-content-center mb-3">
                    <input 
                        type="text" 
                        className="input-group-text"
                        placeholder="Adicionar novo elemento"
                        value={text}
                        onChange={ e => setText(e.target.value) }
                    />
                    <button 
                        type="button" 
                        className="btn custom-btn"
                        onClick={handleAddTodo}
                    >Adicionar</button>
                </div>
                <ul className="list-group bg-transparent">
                    {
                        listTodo.map((item)=>{
                            return(
                                <TodoItem
                                    onClick={handleRemoveElement}
                                    text={item.text}
                                    id={item.id}
                                />
                            );
                        })
                    }
                    {/* <TodoItem
                        onClick={handleRemoveElement}
                        text="Minha casa"
                        id={1}
                    /> */}
                </ul>
            </section>
        </main>
    );
}

export default Home;