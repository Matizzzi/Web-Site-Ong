import { cn } from "@/libs/util";  // Assuming `cn` is a utility for conditional class names
import { ReactNode } from "react";

interface CartaUsuarioProps {
    children: ReactNode
  className?: string;
}

const CartaUsuario = ({ className, children }: CartaUsuarioProps) => {
  return (
    <div className={cn("bg-white p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-5" , className)}>
      {children}
    </div>
  );
};

export default CartaUsuario;
