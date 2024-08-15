import "./Tasklist.css";
import PropTypes from "prop-types";
import Taskitem from "../Taskitem/Taskitem";

export default function Tasklist({ title, taskState, onAddTask, tasks, onTaskUpdate }) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <Taskitem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
}

Tasklist.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
