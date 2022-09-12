import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import '../Assets/css/todolist.css';

const TodoList = ({
  todo, handleChangeProps, setUpdate, deleteTodoProps,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)} type="button">
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>

        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoList;
