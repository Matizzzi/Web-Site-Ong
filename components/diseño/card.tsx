import { cn } from "@/libs/util";  // Assuming `cn` is a utility for conditional class names
import { ReactNode } from "react";

interface CartaUsuarioProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;  // Agregamos onClick como propiedad opcional
}

const CartaUsuario = ({ className, children, onClick }: CartaUsuarioProps) => {
  return (
    <div
      className={cn("bg-white px-4 py-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5", className)}
      onClick={onClick}  // Añadimos onClick aquí
    >
      {children}
    </div>
  );
};

export default CartaUsuario;
