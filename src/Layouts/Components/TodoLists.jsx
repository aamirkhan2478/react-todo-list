import React from 'react';
import TodoList from './TodoList';

const TodoLists = ({
  todos,
  handleChangeProps,
  deleteTodoProps,
  setUpdate,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoList
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodoLists;
