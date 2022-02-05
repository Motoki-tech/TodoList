import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");

  const onChange = (e: any) => {
    setTmpTodo(e.target.value);
  };

  const addTodo = () => {
    if (tmpTodo === "") {
      alert("文字を入力して下さい");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className='form'>
        <input type='text' name='todo' onChange={onChange} value={tmpTodo} />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo: string, index: any) => {
          return (
            <li key={index} className='card'>
              {todo}
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      {/* <style>
        {`
        .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }
          
        }
        `}
      </style> */}
    </>
  );
};

export default App;
