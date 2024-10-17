import CartaUsuario from "@/components/diseño/card";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";

const SectionNewsletter = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-r from-gray-100 to-gray-50 space-y-14">
      {/* Newsletter Section */}
      <div className="space-y-8 mb-1 text-center max-w-3xl mx-auto">
        <h5 className="text-green-600 font-semibold uppercase">
          *Rutina de vida sustentable!
        </h5>
        <h1 className="text-6xl font-extrabold capitalize tracking-wide text-gray-900">
          Streaming Sostenible, Disfruta y Ahorra
        </h1>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          Descubre cómo tu entretenimiento puede ser amigable con el planeta.
          ¡Únete a nuestra iniciativa y comienza hoy mismo!
        </p>
        <div className="relative max-w-lg mx-auto">
          <input
            type="email"
            className="border-2 border-gray-300 bg-transparent outline-none p-4 pr-36 w-full rounded-full focus:ring-2 focus:ring-green-500 transition-all duration-300"
            placeholder="Ingresa tu correo"
          />
          <button
            type="button"
            className="absolute bg-green-600 hover:bg-green-700 text-white top-0 right-0 h-full rounded-full px-6 transition-colors duration-300"
          >
            Comienza
          </button>
        </div>
      </div>

      {/* Premium Clients Section */}
      <div className="text-center">
        <h5 className="text-3xl font-bold text-gray-800 mb-8">
          Clientes Premium
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add New User Card */}
          <CartaUsuario className="flex flex-col items-center justify-center bg-gray-800 text-white py-8 px-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span className="relative mb-4 before:absolute before:w-10 before:h-10 before:bg-white flex items-center justify-center before:rotate-45 before:rounded-lg before:shadow-lg">
              <LuPlus className="text-gray-800 relative z-10" size={24} />
            </span>
            <h5 className="text-center text-lg">Agregar nuevo usuario</h5>
          </CartaUsuario>

          {/* User Cards */}
          <CartaUsuario className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-16 h-16 mb-4 rounded-xl overflow-hidden">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQES8jD5tTk30Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695304111164?e=2147483647&v=beta&t=BxdY9ZS1lKnkPekeTKUp-B9zYGFMVYHAch8r6XQ-ilM"
                alt="Felipe Hermosilla"
                fill
                className="object-cover"
              />
            </div>
            <h5 className="text-center text-gray-800 text-lg font-semibold">
              Felipe <br />
              Hermosilla
            </h5>
          </CartaUsuario>

          <CartaUsuario className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-16 h-16 mb-4 rounded-xl overflow-hidden">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQH5QKJBnqeVrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695304125991?e=1733961600&v=beta&t=sFmDzcYNQ_sb8bVv2DyHC2eE33QGMXgLTiP8MAbYRkI"
                alt="Cesar Soto"
                fill
                className="object-cover"
              />
            </div>
            <h5 className="text-center text-gray-800 text-lg font-semibold">
              Cesar <br />
              Soto
            </h5>
          </CartaUsuario>
        </div>
      </div>
    </section>
  );
};

export default SectionNewsletter;
