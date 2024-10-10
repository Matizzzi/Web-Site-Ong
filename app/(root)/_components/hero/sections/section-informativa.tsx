import CartaUsuario from "@/components/diseño/card";
import Image from "next/image";
import {LuPlus} from "react-icons/lu";



const SectionNewsletter = () => {
    return <section>
        <div className="space-y-10 mb-1"> 
        <h5 className="text-purple-700 font-semibold mt-20">
  *Rutina de vida sustentable!
</h5>

        <h1 className="text-7xl font-bold capitalize">
            Streaming Sostenible Disfruta y Ahorra
         </h1>
         <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus?</p>
         <div className="relative">
            <input type="text " className="border-2 border-black  bg-transparent outline-none p-4 pr-36 w-full rounded-full " placeholder="Ingresa tu correo"/>
            <button type="button" className="absolute bg-black text-white top-0 right-0 h-full rounded-full px-6">Comienza</button>
         </div>
        </div>
        <div>
            <h5 className="font-bold mb-5 ">Clientes premium</h5>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                    <CartaUsuario className="bg-black text-white">
                    <span className="relative before:absolute before:w-8 before:h-8 before:bg-white flex items-center
                    justify-center before:rotate-45 before:rounded-lg ">
                    <LuPlus className="text-black relative z-10"/>
                    </span>
                    <h5 className="text-center">
                    Agregar nuevo usuario
                    </h5>
                    </CartaUsuario>
  
            <CartaUsuario>
    <div className="relative w-10 h-10 rounded-xl">
      <Image
        src="https://media.licdn.com/dms/image/v2/D5603AQES8jD5tTk30Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695304111164?e=2147483647&v=beta&t=BxdY9ZS1lKnkPekeTKUp-B9zYGFMVYHAch8r6XQ-ilM"
        alt="Image"
        fill
        className="object-cover rounded-xl "
      />
    </div>
    <h5 className="text-center">Felipe <br/>
    Hermosilla</h5>
  </CartaUsuario>
  <CartaUsuario>
    <div className="relative w-10 h-10 rounded-xl">
      <Image
        src="https://media.licdn.com/dms/image/v2/D5603AQH5QKJBnqeVrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695304125991?e=1733961600&v=beta&t=sFmDzcYNQ_sb8bVv2DyHC2eE33QGMXgLTiP8MAbYRkI"
        alt="Image"
        fill
        className="object-cover rounded-xl "
      />
    </div>
    <h5 className="text-center">Cesar <br/>
    Soto</h5>
  </CartaUsuario>
                 
            </div>
        </div>
    </section>;
}

export default SectionNewsletter;