import FormularioAuth from "./components/Formulario";

const AuthPage = () => {
    return (
        <div className="flex justify-center items-center md:h-[95vh] md:px-10 lg:px-26">
            <div className="container h-[85vh] flex flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

                {/*-----Imagen-----*/}
                <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                    <div className="bg-auth absolute inset-0"></div>
                    <div className="relative z-10">
                        {/* Contenido adicional si es necesario */}
                        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
                        <p className="text-lg">
                            Autenticación simplificada con un diseño atractivo.
                        </p>
                    </div>
                </div>

                {/*-----Formulario de Autenticación-----*/}
                <div className="flex flex-col justify-center p-6 lg:p-12">
                    <FormularioAuth/>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
 