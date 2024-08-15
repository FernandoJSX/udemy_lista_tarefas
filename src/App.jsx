import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/Tasklist/Tasklist";
import { useState } from "react";

let idAcc = 0;

const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (tasks.id === id) {
          return { ...tasks, title, state };
        } else {
          return tasks;
        }
      });
    });
  };

  return (
    <>
      {
        <div className="App">
          <Navbar />
          <div className="container">
            <Tasklist
              title="Pendente"
              taskState="Pendente"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Pendente")}
              onTaskUpdate={updateTask}
            />
            <Tasklist
              title="Fazendo"
              taskState="Fazendo"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Fazendo")}
              onTaskUpdate={updateTask}
            />
            <Tasklist
              title="Completa"
              taskState="Completa"
              onAddTask={addTask}
              tasks={tasks.filter((t) => t.state === "Completa")}
              onTaskUpdate={updateTask}
            />
          </div>
        </div>
      }
    </>
  );
}

export default App;
