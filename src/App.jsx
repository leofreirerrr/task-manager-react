import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para melhorar minhas habilidades",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Cálculo",
      description: "só um exemplo",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Treinar a mira",
      description: "Treinar a mira pro marvel rivals",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTaks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTaks);
  }
  function onDeleteTaskCLick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
    console.log("oi");
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskCLick={onDeleteTaskCLick}
        />
      </div>
    </div>
  );
}

export default App;
