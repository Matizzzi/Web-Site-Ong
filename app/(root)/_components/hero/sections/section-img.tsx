import CartaUsuario from "@/components/diseño/card";
import Image from "next/image";

const SectionImg = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Imagen de fondo */}
      <Image 
        src="https://res.cloudinary.com/dqq18dx3m/image/upload/v1728517359/image-removebg-preview_1_uz7lgx.png" 
        alt="Image"
        fill
        className="object-cover"
      />
      
      {/* Carta Usuario */}
      <CartaUsuario className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex flex-row items-center justify-center gap-4 px-4">
        {/* Imagen del usuario */}
        <div className="relative w-12 h-12 rounded-lg">
          <Image 
            src="https://res.cloudinary.com/dqq18dx3m/image/upload/v1728517526/939892fb-5246-4130-b15a-79e39dd85ff0.png" 
            alt="User Image" 
            fill 
            className="object-cover rounded-lg" 
          />
        </div>

        {/* Información del usuario */}
        <div className="text-left">
          <h5 className="font-bold text-lg">EcoHome</h5>
          <p className="text-sm text-gray-600">Vida Sana</p>
        </div>

        {/* Oferta */}
        <h3 className="text-xl font-semibold text-green-600">50% de Descuento</h3>
      </CartaUsuario>
    </div>
  );
};

export default SectionImg;
