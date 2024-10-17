import Logo from "@/components/shared/logo";
import Menu from "@/components/shared/menu";
import Image from "next/image";
import Link from "next/link"; // Importa Link
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full py-5 px-5 md:px-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Logo Section */}
        <section aria-label="Logo">
          <Logo />
        </section>

        {/* Menu Section */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <Menu />
        </nav>

        {/* Notification, Profile and Login Section */}
        <section aria-label="User actions">
          <ul className="flex items-center gap-6">
            {/* Notification Bell */}
            <li>
              <button
                type="button"
                className="relative"
                aria-label="Notifications"
              >
                <FaRegBell size={20} />
                <span className="absolute w-4 h-4 text-[8px] rounded-full bg-orange-600 text-white -top-2 -right-1 flex items-center justify-center z-10">
                  2
                </span>
              </button>
            </li>

            {/* Profile Image */}
            <li>
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="https://media.licdn.com/dms/image/D5603AQFkM3IPO00-Dw/profile-displayphoto-shrink_200_200/0/1695304133177?e=2147483647&v=beta&t=16PTYP9_zdidjHleuYSl0fpvdtVrAzIc1AqQv9-wrk8"
                  alt="User profile image"
                  fill
                  loading="lazy"
                  blurDataURL="https://media.licdn.com/dms/image/D5603AQFkM3IPO00-Dw/profile-displayphoto-shrink_200_200/0/1695304133177?e=2147483647&v=beta&t=16PTYP9_zdidjHleuYSl0fpvdtVrAzIc1AqQv9-wrk8"
                  className="object-cover"
                  aria-label="User profile"
                />
              </div>
            </li>

            {/* Login Button */}
            <li>
              <Link href="/auth">
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Iniciar Sesión
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
