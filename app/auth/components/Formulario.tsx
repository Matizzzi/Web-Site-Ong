"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import * as z from "zod"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormularioAuth = () => {
    const formSchema = z.object({
        email: z.string()
            .email('El formato del correo no es valido. Ejemplo: usuario@gmail.com')
            .min(1, { message: 'Se necesita un correo' }),
        password: z.string()
            .min(6, { message: 'La contraseña debe tener 6 caracteres' }),
    });

    // Utiliza useForm correctamente con zod
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (user: z.infer<typeof formSchema>) => {
        console.log(user);
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
                        {/* Mostrar error de email si existe */}
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
                        {/* Mostrar error de password si existe */}
                        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                    </div>

                    <div className="flex justify-between items-center">
                        <Link
                            href="/auth/Recuperar"
                            className="text-sm text-blue-600 hover:text-blue-800"
                        >
                            Recuperar Contraseña
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Ingresar
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

export default FormularioAuth;
