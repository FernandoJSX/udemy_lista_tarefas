import PropTypes from "prop-types";
import { useState } from "react";
import "./Taskitem.css";

export default function Taskitem({ id, title, taskState, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edittableTitle, setEdittableTitle] = useState(title);
  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEdittableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const onTaskStageChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={edittableTitle}
        onChange={onTitleChange}
        onKeyPress={onKeyPress}
      />
    );
  } else {
    return (
      <div>
        <div onClick={(e) => setIsEditing(true)}>{edittableTitle}</div>
        <select onChange={onTaskStageChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

Taskitem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
};
