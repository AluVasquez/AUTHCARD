import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
    const { getTasks, tasks } = useTasks();

    useEffect(() => {
        getTasks();
    }, []);

    if (tasks.length === 0) return <h1 className="text-center text-2xl text-gray-700">No hay tareas</h1>;

    return (
        <div className="bg-slate-300 min-h-screen p-8 rounded-md">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Mis Tareas</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <TaskCard task={task} key={task._id} />
                ))}
            </div>
        </div>
    );
}

export default TasksPage;
