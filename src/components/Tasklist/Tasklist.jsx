import "./Tasklist.css";
import PropTypes from "prop-types";
import Taskitem from "../Taskitem/Taskitem";
import ImageAdd from "../../img/add.png";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask,
}) {
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
              onDeleteTask={onDeleteTask}
            />
          );
        })}

        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
      <button onClick={addTask} className="btn">
        <img src={ImageAdd} alt="imagem" />
        Adicionar Tarefa</button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate:PropTypes.func.isRequired,
  onDeleteTask:PropTypes.func.isRequired
};
