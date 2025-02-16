import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 my-3 flex justify-between py-5 px-10 rounded-lg shadow-lg">
            <Link to={isAuthenticated ? "tasks" : "/"}>
                <h1 className="text-3xl font-bold text-white">Administra tus tareas</h1>
            </Link>
            <ul className="flex gap-x-6 items-center">
                {isAuthenticated ? (
                    <>
                        <li className="text-white">
                            Bienvenido, { user.username }
                        </li>
                        <li>
                            <Link to="/add-task"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Añadir tarea
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => { logout(); }}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Salir
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Ingresar
                            </Link>
                        </li>
                        <li>
                            <Link to="/register"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors"
                            >
                                Registrarse
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar