import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center py-12 text-white rounded-lg">
            <div className="text-center max-w-3xl px-4">
                <h1 className="text-5xl font-bold mb-6 ">Administrador de Tareas</h1>
                <p className="text-2xl mb-12">
                    Este es tu mejor aliado para organizar y gestionar tus tareas diarias. 
                    Crea, edita y elimina tareas fácilmente, todo en un solo lugar.
                </p>
                <div className="mb-6">
                    <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/05/plugins-gestion-proyectos-wordpress-1024x512.jpg" alt="Gestión de Tareas" className="rounded-lg shadow-lg" />
                </div>
                <div className="flex gap-4 mb-6 justify-center">
                    <Link to="/register" className="bg-indigo-600 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg transition-colors text-lg">
                        Registrarse
                    </Link>
                    <Link to="/login" className="bg-indigo-600 hover:bg-indigo-400 text-white px-6 py-3 rounded-lg transition-colors text-lg">
                        Ingresar
                    </Link>
                </div>
                {/* <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 mt-8 max-w-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">¡Regístrate!</h2>
                    <p className="text-lg">
                        "Puedes tener acceso a una cuenta personalizada totalmente gratis"
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default HomePage;