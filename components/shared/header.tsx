"use client"; // Asegura que es un componente cliente

import Logo from "@/components/shared/logo";
import Menu from "@/components/shared/menu";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

const Header = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Escucha el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Si el usuario está autenticado, obtén el nombre de usuario de Firestore
        const userRef = doc(db, "users", user.uid); // Cambia "users" al nombre de tu colección en Firestore
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData?.username || "Usuario"); // Asume que `username` es el campo del nombre de usuario en Firestore
        }
      } else {
        // Si no hay usuario, borra el nombre de usuario
        setUsername(null);
      }
    });

    return () => unsubscribe(); // Limpia la suscripción al desmontar el componente
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUsername(null); // Resetea el nombre de usuario al cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="fixed left-0 top-0 w-full py-5 px-5 md:px-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <section aria-label="Logo">
          <Logo />
        </section>

        <nav aria-label="Main navigation" className="hidden md:block">
          <Menu />
        </nav>

        <section aria-label="User actions">
          <ul className="flex items-center gap-6">
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

            <li>
              {username ? (
                <>
                  <span className="text-gray-800">Bienvenido, {username}!</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition ml-4"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <Link href="/auth">
                  <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Iniciar Sesión
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
