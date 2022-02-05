import { useState } from "react";
import "./_app";
import { Box, Flex, Checkbox, Input, Button } from "@chakra-ui/react";

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
      <Box maxWidth='8x1' margin='auto' p={5}>
        <h1>Todo App</h1>
        <div className='form'>
          <Input
            type='text'
            name='todo'
            onChange={onChange}
            value={tmpTodo}
            placeholder='New todo'
          />
          <Button onClick={addTodo}>Add</Button>
        </div>
        {todos.map((todo: string, index: any) => {
          return (
            <Flex pt={2} key={index} className='card'>
              <Checkbox />
              {todo}
              <Button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                Delete
              </Button>
            </Flex>
          );
        })}
      </Box>
    </>
  );
};

export default App;
