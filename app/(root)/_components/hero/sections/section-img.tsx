import CartaUsuario from "@/components/diseño/card";
import Image from "next/image";

const SectionImg = () => {
  return (
    <div className="relative w-full h-[80vh] bg-gray-900">
      {/* Imagen de fondo con efecto overlay */}
      <Image 
        src="https://res.cloudinary.com/dqq18dx3m/image/upload/v1728517359/image-removebg-preview_1_uz7lgx.png" 
        alt="Background Image"
        fill
        className="object-cover brightness-75"
      />

      {/* Carta Usuario centrada */}
      <CartaUsuario className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-6 p-6 bg-white/90 rounded-xl shadow-lg backdrop-blur-sm hover:bg-white/100 transition-all duration-300">
        {/* Imagen del usuario con borde y efecto hover */}
        <div className="relative w-16 h-16 rounded-lg overflow-hidden border-4 border-green-500 shadow-lg hover:scale-110 transition-transform duration-300">
          <Image 
            src="https://res.cloudinary.com/dqq18dx3m/image/upload/v1728517526/939892fb-5246-4130-b15a-79e39dd85ff0.png" 
            alt="User Image" 
            fill 
            className="object-cover rounded-lg" 
          />
        </div>

        {/* Información del usuario con texto animado */}
        <div className="text-left">
          <h5 className="font-bold text-2xl text-gray-900 leading-tight">
            EcoHome
          </h5>
          <p className="text-base text-gray-600">Vida Sana</p>
        </div>

        {/* Oferta con animación de entrada */}
        <h3 className="text-3xl font-bold text-green-600 animate-pulse">
          50% de Descuento
        </h3>
      </CartaUsuario>
    </div>
  );
};

export default SectionImg;
