import TodoItem from "../components/TodoItem";

const Home = ()=>{
    function handleRemoveElement(e: number){
        console.log(e);
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
                    />
                    <button type="button" className="btn custom-btn">Adicionar</button>
                </div>
                <ul className="list-group bg-transparent">
                    <TodoItem
                        onClick={handleRemoveElement}
                        text="Minha casa"
                        id={1}
                    />
                </ul>
            </section>
        </main>
    );
}

export default Home;