import FormularioAuth from "./components/Formulario";

const AuthPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden lg:flex">
                {/*-----Imagen de Bienvenida-----*/}
                <div className="relative hidden h-full flex-col p-10 text-white lg:flex lg:w-1/2 bg-cover bg-center bg-auth">
                    <div className="relative z-10 flex flex-col justify-center h-full">
                        <h1 className="text-5xl font-bold mb-4">Bienvenido</h1>
                        <p className="text-lg leading-relaxed">
                        El mejor entretenimiento está en la vida que sucede fuera de la pantalla.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/*-----Formulario de Autenticación-----*/}
                <div className="flex flex-col justify-center p-8 lg:w-1/2 bg-white">
                    <FormularioAuth/>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
