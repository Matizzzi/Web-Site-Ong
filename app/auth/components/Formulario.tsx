"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "@/lib/firebase";
import { useState } from "react";
import ReactLoading from 'react-loading';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignInForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    // Definición del esquema de validación con Zod
    const formSchema = z.object({
        email: z.string()
            .email('El formato del correo no es válido. Ejemplo: usuario@gmail.com')
            .min(1, { message: 'Se necesita un correo' }),
        password: z.string()
            .min(6, { message: 'La contraseña debe tener 6 caracteres' }),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    // Función para manejar el envío del formulario
    const onSubmit = async (user: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            const res = await signIn(user);
            const username = res.username; // Asegúrate de extraer el nombre de usuario aquí
            localStorage.setItem("username", username); // Guarda el nombre de usuario en el almacenamiento local
            toast.success("Inicio de sesión exitoso!", { duration: 3000 });
            router.push("/"); // Redirige a la raíz de la aplicación
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message, { duration: 3000 });
            } else {
                toast.error("Ocurrió un error inesperado", { duration: 3000 });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Inicia sesión</h1>
                <p className="text-sm text-gray-600">
                    Introduce tu correo y contraseña para ingresar.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                    {/* Email */}
                    <div className="mb-4">
                        <Label htmlFor="email" className="font-semibold text-sm">
                            Correo
                        </Label>
                        <Input
                            {...register("email")}
                            id="email"
                            placeholder="nombre@gmail.com"
                            type="email"
                            autoComplete="email"
                            className="mt-2 p-3 border rounded-lg w-full"
                        />
                        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <Label htmlFor="password" className="font-semibold text-sm">
                            Contraseña
                        </Label>
                        <Input
                            {...register("password")}
                            id="password"
                            placeholder="******"
                            type="password"
                            className="mt-2 p-3 border rounded-lg w-full"
                        />
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </div>

                    <Link href="/auth/forgot-password" legacyBehavior>
    <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
        Recuperar Contraseña
    </button>
</Link>


                    <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                        {isLoading ? (
                            <ReactLoading type="spin" color="#ffffff" height={20} width={20} />
                        ) : (
                            "Ingresar"
                        )}
                    </Button>
                </div>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
                ¿No tienes cuenta?{" "}
                <Link href="/auth/registrar" legacyBehavior>
                    <a className="text-blue-600 hover:text-blue-800">Regístrate aquí</a>
                </Link>
            </p>
        </>
    );
};

export default SignInForm;
