import Link from "next/link";

const Menu = () => {
    return ( <ul className="flex flex-col lg:flex-row lg:items-center gap-5">
        <li>
            <Link href="/"className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">Sobre Nosotros</Link>
        </li>
        <li>
            <Link href="/"className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">Huella py-2</Link>
        </li>
        
        <li>
            <Link href="/"className="border-b-2 border-transparent hover:border-black transition-colors duration-300 py">Contacto
            </Link>
        </li>
    </ul> );
}
 
export default Menu;