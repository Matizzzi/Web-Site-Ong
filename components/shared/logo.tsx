import Link from "next/link";
import { FaHandsHelping } from "react-icons/fa"; // Ícono de manos ayudando

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to homepage">
      <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <FaHandsHelping className="text-white text-4xl" />
        <h1 className="text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300">
          ONG
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
