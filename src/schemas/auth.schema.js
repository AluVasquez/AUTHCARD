import {z} from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: "Es requerido el nombre de usuario."
    }),
    email: z.string({
        required_error: "Es requerido un email."
    }).email({
        message: "Email inválido."
    }),
    password: z.string({
        required_error: "La contraseña es requerida."
    }).min(6, {
        message: "La contraseña debe ser de al menos 6 caracteres.",
    }),
});


export const loginSchema = z.object({
    email: z.string({
        required_error: "Un email es requerido.",
    }).email({
        message: "Email inválido.",
    }),
    password: z.string({
        required_error: "La contraseña es requerida.",
    })
    .min(6, {
        message: "La contraseña debe ser de al menos 6 caracteres.",
    }),
});