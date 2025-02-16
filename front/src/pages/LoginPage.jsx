import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signin, errors: signingErrors,isAuthenticated } = useAuth();
    const navigate   = useNavigate()


    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(()  => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center py-12 justify-center text-white rounded-lg">
        <div className="bg-white max-w-md p-10 rounded-lg shadow-lg">

        {
        signingErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center" key={i}>
                { error }
            </div>
        ))
    }

        <form onSubmit={onSubmit}>               

            <h1 className="text-2xl font-bold">Ingresar</h1>

                <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm mb-4"
                placeholder="Email"
                />
                {errors.email && <p className="text-red-500">Se requiere un email.</p>}

                <input type="password" 
                {...register("password", { required: true })} 
                className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-sm mb-4"
                placeholder="Contraseña"
                />
                {errors.password && <p className="text-red-500">Se requiere una contraseña.</p>}

                <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
                    >
                        Aceptar
                    </button>

                <button type="submit">Aceptar</button>

            </form>

            <p className="text-blue-500 flex gap-x-2 justify-between">
                ¿No tienes una cuenta? <Link to="/register"
                className="text-sky-500">¡Regístrate!</Link>
            </p>
        </div>
        </div>
    )
}

export default LoginPage