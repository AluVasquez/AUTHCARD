import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center py-12 justify-center text-white rounded-lg">
            <div className="bg-white max-w-md p-10 rounded-lg shadow-lg">
                {
                    registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white text-center mb-4" key={i}>
                            { error }
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>               
                    <input 
                        type="text"
                        {...register("username", { required: true })} 
                        className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm mb-4"
                        placeholder="Usuario"
                    />
                    {errors.username && <p className="text-red-500 mb-2">Se requiere el nombre de usuario</p>}

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm mb-4"
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500 mb-2">Se requiere un email</p>}

                    <input 
                        type="password" 
                        {...register("password", { required: true })} 
                        className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm mb-4"
                        placeholder="Contraseña"
                    />
                    {errors.password && <p className="text-red-500 mb-2">Se requiere la contraseña</p>}

                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
                    >
                        Aceptar
                    </button>
                </form>

                <p className="text-blue-500 flex gap-x-2 justify-between mt-4">
                    ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500 hover:underline">¡Ingresa!</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;