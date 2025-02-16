import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function TasksFormPage() {
    const { register, handleSubmit, setValue } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                setValue("title", task.title);
                setValue("description", task.description);
                setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
            }
        }
        loadTask();
    }, []);

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        };

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }

        navigate("/tasks");
    });

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-blue-700 to-blue-400 max-w-md w-full p-10 rounded-2xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
            <form onSubmit={onSubmit} className="space-y-4">
                <label htmlFor="title" className="text-white font-semibold">Título</label>
                <input 
                    type="text"
                    placeholder="Título"
                    {...register("title")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 transition-all hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    autoFocus
                />
                
                <label htmlFor="description" className="text-white font-semibold">Descripción</label>
                <textarea
                    rows="3"
                    placeholder="Descripción"
                    {...register("description")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 transition-all hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>

                <label htmlFor="date" className="text-white font-semibold">Fecha</label>
                <input 
                    type="date" 
                    {...register("date")}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-lg my-2 transition-all hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <div className="flex justify-between items-center">
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-2 rounded-lg transition-all duration-300">
                        Guardar
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-all duration-300"
                    >
                        Volver
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TasksFormPage;
