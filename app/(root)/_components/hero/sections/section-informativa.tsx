import CartaUsuario from "@/components/diseño/card";
import {LuPlus} from "react-icons/lu";



const SectionNewsletter = () => {
    return <section>
        <div className="space-y-10 mb-20"> 
        <h5 className="text-purple-700 font-semibold mt-20">
  *Rutina de vida sustentable!
</h5>

        <h1 className="text-7xl font-bold capitalize">
            Streaming Sostenible Disfruta y Ahorra
         </h1>
         <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, doloribus?</p>
         <div className="relative">
            <input type="text " className="border-2 border-black outline-none p-4 pr-36 w-full rounded-full " placeholder="Ingresa tu correo"/>
            <button type="button" className="absolute bg-black text-white top-0 right-0 h-full rounded-full px-6">Comienza</button>
         </div>
        </div>
        <div>
            <h5 className="font-bold mb-5 ">Clientes premium</h5>
            <ul className="flex items-center gap-4"> 
                <li>
                    <CartaUsuario className="bg-black text-white">
                    <LuPlus className="bg-white text-black p-2 box-content rounded-lg "/>
                    <h5 className="text-center">
                    Agregar nuevo usuario
                    </h5>
                    </CartaUsuario>
                </li>
                <li>
                    <CartaUsuario>
                    <LuPlus/>
                    <h5>
                    Agregar nuevo usuario
                    </h5>
                    </CartaUsuario>
                </li>
                <li>
                    <CartaUsuario>
                    <LuPlus/>
                    <h5>
                    Agregar nuevo usuario
                    </h5>
                    </CartaUsuario>
                </li>
            </ul>
        </div>
    </section>;
}

export default SectionNewsletter;