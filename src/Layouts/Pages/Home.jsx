import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import "../Assets/css/inputfield.css";
import TodoLists from "../Components/TodoLists";

const Home = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((list) => {
        if (list.id === id) {
          list.title = updatedTitle;
        }
        return list;
      })
    );
  };
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputField addTodoProps={addTodoItem} />
        <TodoLists
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
