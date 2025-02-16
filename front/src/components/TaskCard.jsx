import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
dayjs.extend(utc);

function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-blue-700 to-blue-400 max-w-md w-full p-10 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-extrabold text-white">{ task.title }</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                        onClick={() => {
                            deleteTask(task._id);
                        }}>Eliminar</button>
                    <Link to={`/tasks/${task._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                    >Editar</Link>
                </div>
            </header>
            <p className="text-white mb-4">{ task.description }</p>
            <p className="text-white">{ dayjs(task.date).utc().format("DD/MM/YYYY") }</p>
        </div>
    );
}

export default TaskCard;
