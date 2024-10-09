import Link from "next/link";
const Menu = () => {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
      <li>
        <Link href="/sobre-nosotros" className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">
          Sobre Nosotros
        </Link>
      </li>
      <li>
        <Link href="/huella" className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">
          Huella
        </Link>
      </li>
      <li>
        <Link href="/contacto" className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">
          Contacto
        </Link>
      </li>
      
    </ul>
  );
};


export default Menu;
