// Menu.js
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 md:items-center">
       <li>
        <Link href="/nosotros" className="relative group">
          <span className="text-gray-700 group-hover:text-blue-600 font-medium text-lg transition-colors duration-300">
            Sobre Nosotros
          </span>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-blue-600 transition-all duration-500"></span>
        </Link>
      </li>
      <li>
        <Link href="/huella" className="relative group">
          <span className="text-gray-700 group-hover:text-green-600 font-medium text-lg transition-colors duration-300">
            Huella
          </span>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-green-600 transition-all duration-500"></span>
        </Link>
      </li>
      <li>
        <Link href="/contacto" className="relative group">
          <span className="text-gray-700 group-hover:text-red-600 font-medium text-lg transition-colors duration-300">
            Contacto
          </span>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-red-600 transition-all duration-500"></span>
        </Link>
      </li>

    </ul>
  );
};

export default Menu;
